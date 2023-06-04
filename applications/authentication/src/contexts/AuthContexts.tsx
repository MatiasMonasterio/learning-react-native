import type {Usuario, UsuarioResponse, LoginData} from '../types';

import React, {createContext, useEffect, useReducer} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {AuthState, authReducer} from './AuthReducer';
import {cafeApi} from '../api';

type AuthContextProps = {
  errorMessage: string;
  token: string | null;
  user: Usuario | null;
  status: 'cheking' | 'authenticated' | 'not-authenticated';
  signUp: () => void;
  signIn: (data: LoginData) => void;
  logOut: () => void;
  removeError: () => void;
};

const initialState: AuthState = {
  status: 'cheking',
  token: null,
  user: null,
  errorMessage: '',
};

export const AuthContext = createContext({} as AuthContextProps);

export default function AuthProvider({children}: any) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const signIn = async ({correo, password}: LoginData) => {
    try {
      const resp = await cafeApi.post<UsuarioResponse>('/auth/login', {
        correo,
        password,
      });

      dispatch({
        type: 'signIn',
        payload: {token: resp.data.token, user: resp.data.usuario},
      });

      await AsyncStorage.setItem('token', resp.data.token);
    } catch (error) {
      dispatch({type: 'addError', payload: error.response.data.msg || ''});
    }
  };

  const signUp = () => {};

  const logOut = () => {
    AsyncStorage.removeItem('token');
    dispatch({type: 'logout'});
  };

  const removeError = () => {
    dispatch({type: 'removeError'});
  };

  const validarToken = async () => {
    const token = await AsyncStorage.getItem('token');

    if (!token) {
      dispatch({type: 'notAuthenticated'});
      return;
    }

    const resp = await cafeApi.get('/auth');

    if (resp.status !== 200) {
      dispatch({type: 'notAuthenticated'});
      return;
    }

    dispatch({
      type: 'signIn',
      payload: {token: resp.data.token, user: resp.data.usuario},
    });

    await AsyncStorage.setItem('token', resp.data.token);
  };

  useEffect(() => {
    validarToken();
  }, []);

  return (
    <AuthContext.Provider
      value={{...state, signUp, signIn, logOut, removeError}}>
      {children}
    </AuthContext.Provider>
  );
}
