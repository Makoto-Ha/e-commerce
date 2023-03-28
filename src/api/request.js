import axios from 'axios';
import store from '@/store';
import nprogress from 'nprogress';
import 'nprogress/nprogress.css';

const requests = axios.create({
  baseURL: 'api',
  timeout: 5000
});

requests.interceptors.request.use(config => {
  nprogress.start();
  if(store.state.detail.uuid_token) {
    config.headers.userTempId = store.state.detail.uuid_token;
  }
  if(localStorage.getItem('TOKEN')) {
    config.headers.token = localStorage.getItem('TOKEN');
  }
  return config
});

requests.interceptors.response.use(res => {
  nprogress.done();
  return res.data
},
error => {
  return Promise.reject(new Error(error));
});

export default requests;