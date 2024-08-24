"use server"

import { consignerApi } from "./config";

//GET CONSIGNER DETAILS BY ID
// export const getConsignerById = async (consigner: any, jwt: any) => {
//     try {
//       const response = await fetch('http://localhost:8080/api/consigner/single', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${jwt}`,
//         },
//         body: JSON.stringify(consigner),
//       });
  
//       if (response.ok) {
//         const responseData = await response.json();
//         return responseData.data;
//       } else {
//         return false;
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       throw new Error('An unexpected error occurred.');
//     }
//   };

  //GET CONSIGNER DETAILS BY ID with axios
export const getConsignerById = async (consigner: any) => {
  try {
    const response = await consignerApi.post('/single', consigner);

    return response.data;
    
  } catch (error) {
    console.error('Error:', error);
    throw new Error('An unexpected error occurred.');
  }
};