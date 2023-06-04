import type {StackScreenProps} from '@react-navigation/stack';

import React from 'react';
import {View, Text, KeyboardAvoidingView, TextInput} from 'react-native';
import {TouchableOpacity, Keyboard} from 'react-native';

import {WhiteLogo} from '../components';
import {useForm} from '../hooks';
import {loginStyles} from '../theme/loginTheme';

interface Props extends StackScreenProps<any, any> {}

export default function Register({navigation}: Props) {
  const {name, email, password, onChange} = useForm({
    name: '',
    email: '',
    password: '',
  });

  const handleRegister = () => {
    Keyboard.dismiss();
  };

  const handleNavigateLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <>
      <KeyboardAvoidingView style={{flex: 1, backgroundColor: '#5856D6'}}>
        <View style={loginStyles.formContainer}>
          <WhiteLogo />
          <Text style={loginStyles.title}>Register</Text>

          <Text style={loginStyles.label}>Name</Text>
          <TextInput
            placeholder="Ingrese su nombre"
            placeholderTextColor="rgba(255,255,255,0.4)"
            keyboardType="default"
            underlineColorAndroid="white"
            style={{...loginStyles.inputField}}
            selectionColor="white"
            autoCapitalize="words"
            autoCorrect={false}
            onChangeText={value => onChange(value, 'name')}
            value={name}
            onSubmitEditing={handleRegister}
          />

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
            onSubmitEditing={handleRegister}
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
            onSubmitEditing={handleRegister}
          />

          <View style={loginStyles.buttomContainer}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={loginStyles.button}
              onPress={handleRegister}>
              <Text style={loginStyles.buttonText}>Ingresar</Text>
            </TouchableOpacity>
          </View>

          <View style={loginStyles.newUserContainer}>
            <TouchableOpacity activeOpacity={0.8} onPress={handleNavigateLogin}>
              <Text style={loginStyles.buttonText}>Ir a login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </>
  );
}
