import type {StackScreenProps} from '@react-navigation/stack';

import React, {useContext, useEffect} from 'react';
import {View, Text, TextInput, Keyboard, Alert} from 'react-native';
import {KeyboardAvoidingView, TouchableOpacity} from 'react-native';

import {Background, WhiteLogo} from '../components';
import {useForm} from '../hooks';
import {loginStyles} from '../theme/loginTheme';
import {AuthContext} from '../contexts/AuthContexts';

interface Props extends StackScreenProps<any, any> {}

export default function Login({navigation}: Props) {
  const {signIn, errorMessage, removeError} = useContext(AuthContext);
  const {email, password, onChange} = useForm({email: '', password: ''});

  const handleLogin = () => {
    Keyboard.dismiss();
    signIn({correo: email, password});
  };

  const handleNavigateRegister = () => {
    navigation.navigate('Register');
  };

  useEffect(() => {
    if (errorMessage.length === 0) {
      return;
    }

    Alert.alert('Login incorrecto', errorMessage, [
      {text: 'ok', onPress: () => removeError()},
    ]);
  }, []);

  return (
    <>
      <Background />

      <KeyboardAvoidingView style={{flex: 1}}>
        <View style={loginStyles.formContainer}>
          <WhiteLogo />
          <Text style={loginStyles.title}>Login</Text>

          <Text style={loginStyles.label}>Email</Text>
          <TextInput
            placeholder="Ingrese su email"
            placeholderTextColor="rgba(255,255,255,0.4)"
            keyboardType="email-address"
            underlineColorAndroid="white"
            style={{...loginStyles.inputField}}
            selectionColor="white"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={value => onChange(value, 'email')}
            value={email}
            onSubmitEditing={handleLogin}
          />

          <Text style={loginStyles.label}>Password</Text>
          <TextInput
            placeholder="*****"
            secureTextEntry={true}
            placeholderTextColor="rgba(255,255,255,0.4)"
            keyboardType="default"
            underlineColorAndroid="white"
            style={{...loginStyles.inputField}}
            selectionColor="white"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={value => onChange(value, 'password')}
            value={password}
            onSubmitEditing={handleLogin}
          />

          <View style={loginStyles.buttomContainer}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={loginStyles.button}
              onPress={handleLogin}>
              <Text style={loginStyles.buttonText}>Ingresar</Text>
            </TouchableOpacity>
          </View>

          <View style={loginStyles.newUserContainer}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={handleNavigateRegister}>
              <Text style={loginStyles.buttonText}>Nueva Cuenta</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </>
  );
}
