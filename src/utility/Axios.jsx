import axios from 'axios';
const instance = axios.create({
    baseURL : "https://api.rawg.io/api",
     params: {
     key: import.meta.env.VITE_RAWIO_API_KEY,
    page_size: 10,
  }
});



 instance.interceptors.request.use(
  function (config) {
    console.log("ye axios ",config);
   
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