"use server"

import { orderApi } from "./config";

//SAVE ORDER
// export const saveOrder = async (orderDetailsJson: any, jwt: any) => {
//     try {
//       const response = await fetch('http://localhost:8080/api/orders/save', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${jwt}`,
//         },
//         body: orderDetailsJson,
//       });
  
//       if (response.ok) {
//         return true;
//       } else {
//         return false;
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       throw new Error('An unexpected error occurred.');
//     }
//   };

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