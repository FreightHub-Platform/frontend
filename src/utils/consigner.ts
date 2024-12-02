"use server"

import { api, consignerApi, orderApi } from "./config";


//GET CONSIGNER DETAILS BY ID with axios
export const getConsignerById = async (consigner: any, token: String) => {
  try {
    const response = await consignerApi.post('/single', consigner, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    
    return response.data.data;
    
  } catch (error) {
    console.error('Error:', error);
    throw new Error('An unexpected error occurred.');
  }
};

//CHANGE PASSWORD
export const changePassword = async (changePw: any, token: string) => {
  try {
    const response = await api.post("/auth/change_pw", changePw, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    return response.data.statusCode
  } catch (error) {
    console.error('Error:', error);
    throw new Error('An unexpected error occurred.');
  }
}


//GET CONSIGNER ORDERS
export const getConsignerOrders = async (consigner : any, token : String) =>{
  try {
    const response = await orderApi.post("/consigner", consigner, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    return response.data.data;
  } catch (error) {
    console.error('Error:', error);
    throw new Error('An unexpected error occurred.');
  }
}

//GET REPORTS
export const getConsignerReports = async (consigner : any, token : String) =>{
  try {
    const response = await orderApi.post("/months", consigner, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    return response.data.data;
  } catch (error) {
    console.error('Error:', error);
    throw new Error('An unexpected error occurred.');
  }
}

export const getConsignerReportsById = async (consigner : any, token : String) =>{
  try {
    const response = await api.post("/transactions/consigner", consigner, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    return response.data.data;
  } catch (error) {
    console.error('Error:', error);
    throw new Error('An unexpected error occurred.');
  }
}