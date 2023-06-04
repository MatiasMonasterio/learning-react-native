import {Usuario} from '../types';

export interface AuthState {
  status: 'cheking' | 'authenticated' | 'not-authenticated';
  errorMessage: string;
  token: string | null;
  user: Usuario | null;
}

type AuthAction =
  | {type: 'signIn'; payload: {token: string; user: Usuario}}
  | {type: 'signUp'; payload: {token: string; user: Usuario}}
  | {type: 'addError'; payload: string}
  | {type: 'removeError'}
  | {type: 'notAuthenticated'}
  | {type: 'logout'};

export function authReducer(state: AuthState, action: AuthAction): AuthState {
  switch (action.type) {
    case 'addError':
      return {
        ...state,
        user: null,
        status: 'not-authenticated',
        token: null,
        errorMessage: action.payload,
      };

    case 'removeError':
      return {
        ...state,
        errorMessage: '',
      };

    case 'signUp':
      return {
        ...state,
        errorMessage: '',
        status: 'authenticated',
        token: action.payload.token,
        user: action.payload.user,
      };

    case 'signIn':
      return {
        ...state,
        errorMessage: '',
        status: 'authenticated',
        token: action.payload.token,
        user: action.payload.user,
      };

    case 'notAuthenticated':
      return {
        ...state,
        status: 'not-authenticated',
        token: null,
        user: null,
      };

    case 'logout':
      return {
        ...state,
        status: 'not-authenticated',
        token: null,
        user: null,
      };

    default:
      return state;
  }
}
