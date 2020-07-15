import axios from 'axios';

const instance = axios.create({
  baseURL: `http://api.website.com`
});
instance.defaults.headers.common['Authorization'] = 'Bearer ' + sessionStorage.getItem('token');

instance.interceptors.request.use(
  config => {
    // let token = sessionStorage.getItem('token')
    // if (token) {
    //   config.headers['Authorization'] = 'Bearer ' + token;
    // }
    // config.url = config.url.replace('', '')
    return config;
  },
  error => {
    Promise.reject(error)
  });

instance.interceptors.response.use(function (response) {
  return response.data;
}, function (error) {
  return Promise.reject(error);
});

export default instance;
