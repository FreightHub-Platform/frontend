"use server"

import { consignerApi } from "./config";


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
export const changePassword = async (consignerId: any, newPassword: string, oldPassword: string, token: string) => {
  try {
    const response = await consignerApi.put("", {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
  } catch (error) {
    console.error('Error:', error);
    throw new Error('An unexpected error occurred.');
  }
}


//GET CONSIGNER ORDERS
export const getConsignerOrders = async () =>{
  try {
    const response = await consignerApi.get("", {
     
    })
  } catch (error) {
    console.error('Error:', error);
    throw new Error('An unexpected error occurred.');
  }
}