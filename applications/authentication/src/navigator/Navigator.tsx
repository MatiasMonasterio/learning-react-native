import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Login from '../screens/Login';
import Register from '../screens/Register';
import Protected from '../screens/Protected';
import Loading from '../screens/Loading';

import {AuthContext} from '../contexts/AuthContexts';

const Stack = createStackNavigator();

export default function Navigator() {
  const {status} = useContext(AuthContext);

  if (status === 'cheking') {
    return <Loading />;
  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      {status !== 'authenticated' ? (
        <>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
        </>
      ) : (
        <Stack.Screen name="Protected" component={Protected} />
      )}
    </Stack.Navigator>
  );
}
