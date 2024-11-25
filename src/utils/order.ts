"use server"

import { orderApi } from "./config";

//Save order with axios
export const saveOrder = async (orderDetailsJson: any, token: String) => {
  try {
    const response = await orderApi.post('/save', orderDetailsJson, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });

    return response.status === 200
  } catch (error) {
    console.error('Error:', error);
    throw new Error('An unexpected error occurred.');
  }
};