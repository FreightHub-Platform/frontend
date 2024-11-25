
import axios from "axios"

export const api = axios.create({
  baseURL: "http://localhost:8080/api"
})


//CONSIGNER APIS
export const consignerApi = axios.create({
  baseURL: "http://localhost:8080/api/consigner"
})


//ORDER APIS
export const orderApi = axios.create({
   baseURL: "http://localhost:8080/api/orders"
})

//REVIEW APIS backend eka balala hariyata daganna CONTROLLER EKE NAMA 'API/CONTOLLER_NAME'
export const reviewApi = axios.create({
  baseURL: "http://localhost:8080/api"
});

//NOTIFICATION API
export const notificationApi = axios.create({
  baseURL: "http://localhost:8080/api"
})