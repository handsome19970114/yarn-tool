import axios from 'axios';
const instance = axios.create({
  baseURL: 'http://119.3.224.149:10008',
  timeout: 6000 * 10,
});

const errorHandler = async (error) => {
  if (error.response) {
    const data = error.response.data;
  }

  if (error.toString().indexOf('Network Error') > -1) {
    message.warning('网络超时');
  }

  return Promise.reject(error);
};

instance.interceptors.request.use(async (config) => {
  return config;
}, errorHandler);

instance.interceptors.response.use((response) => {
  return response.data;
}, errorHandler);

export default instance;
