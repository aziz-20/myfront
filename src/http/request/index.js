import axios from "axios";
import {requestIntersept,responseIntersept} from "../inspector";

axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'
const request = axios.create({
    
      baseURL: process.env.VUE_APP_API_BASE_URL,
      timeout: 10000
  })

request.interceptors.request.use((config) => requestIntersept(config), error => {
  console.log(error);
  return Promise.reject(error);
});

request.interceptors.response.use((config) => responseIntersept(config), error => {
  console.log(error);
  return Promise.reject(error);
});
console.log(process.env.VUE_APP_API_BASE_URL)

export default request
