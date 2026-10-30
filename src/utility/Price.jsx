import axios from 'axios';
const instanceprice = axios.create({
    baseURL : "https://www.cheapshark.com/api/1.0"
})


instanceprice.interceptors.request.use(
  function (config) {
    console.log("ye price axios ",config);
   
    return config;
    
  },
  function (error) {
    return Promise.reject(error);
  }
);

instanceprice.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);
export default instanceprice