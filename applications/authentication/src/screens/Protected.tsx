import React, {useContext} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {AuthContext} from '../contexts/AuthContexts';

export default function Protected() {
  const {user, token, logOut} = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Protected</Text>
      <Button title="logout" color="#5856D6" onPress={logOut} />
      <Text style={styles.text}>{JSON.stringify(user)}</Text>
      <Text style={styles.text}>{token}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    color: 'black',
  },
  text: {
    color: 'black',
  },
});
