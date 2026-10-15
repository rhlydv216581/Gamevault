import axios from 'axios';
const instance = axios.create({
    baseURL : "https://api.rawg.io/api/games?",
     params: {
    key: "ec81cd95eecd4503b6a93d6001c82694"
  }
});
 instance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);
export default instance