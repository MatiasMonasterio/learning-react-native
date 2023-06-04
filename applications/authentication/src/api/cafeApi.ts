import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const cafeApi = axios.create({baseURL: 'http://192.168.0.6:8080/api'});

cafeApi.interceptors.request.use(async config => {
  const token = await AsyncStorage.getItem('token');

  if (token) {
    config.headers['x-token'] = token;
  }

  return config;
});

export default cafeApi;
