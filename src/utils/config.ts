"use client"
import axios from "axios"
import Cookies from "js-cookie";

export const api = axios.create({
  baseURL: "http://localhost:8080/api"
})


//CONSIGNER APIS
export const consignerApi = axios.create({
  baseURL: "http://localhost:8080/api/consigner"
})

consignerApi.interceptors.request.use(
  (config) => {
    console.log("fuck")
    const token = Cookies.get('jwt');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;  
    }
    return config;
  },
  (error) => {
    console.log("fuck2")
    return Promise.reject(error);
  }
);

//ORDER APIS
export const orderApi = axios.create({
   baseURL: "http://localhost:8080/api/orders"
})

orderApi.interceptors.request.use((config) => {
  const token = Cookies.get('jwt'); 
  if(token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config
},
(error) => {
  return Promise.reject(error);
})