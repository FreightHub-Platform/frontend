"use server";
import axios from "axios";

import {
  UserLogin,
  businessInfo,
  contactInfo,
  locationInfo,
} from "./interfaces/signIn_signUp";
import { api, consignerApi } from "./config";

// Define the response data type
// interface ResponseData {
//   completion: number;
//   role: string;
//   token: string;
// }

// // Define the response type
// interface SigninResponse {
//   statusCode: number;
//   message: string;
//   data: ResponseData;
// }

// // Define the error response type
// interface ErrorResponse {
//   error: true;
//   message: string;
// }

//SIGNIN
// export const handleSignin = async (userDetails: UserLogin) => {
//   try {
//     const response = await fetch('http://localhost:8080/api/auth/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(userDetails),
//     });

//     if (response.ok) {
//       const responseData = await response.json();
//       return responseData.data;
//     } else {
//       const errorData = await response.json();
//       throw new Error(errorData.message);
//     }
//   } catch (error) {
//     console.error('Error:', error);
//     throw new Error('An unexpected error occurred.');
//   }
// };

//SignIn with axios
export const handleSignin = async (userDetails: UserLogin) => {
  try {
    const response = await api.post("/auth/login", userDetails);
    return response.data.data;
  } catch (error: any) {
    if (error.response && error.response.data) {
      throw new Error(error.response.data.message);
    } else {
      console.error("Error:", error);
      throw new Error("An unexpected error occurred.");
    }
  }
};

//UPDATE BUSINESS INFORMATION
// export const updateBusiness = async (businessInformation, jwt) => {
//   try {
//     const response = await fetch('http://localhost:8080/api/consigner/register/0', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${jwt}`,
//       },
//       body: JSON.stringify(businessInformation),
//     });

//     if (!response.ok) {
//       const errorText = await response.text();
//       console.error('Response Error:', errorText);
//       return false;
//     } else {
//       return true;
//     }
//   } catch (error) {
//     console.error('Error:', error);
//     throw new Error('An unexpected error occurred.');
//   }
// };

//upadte with axios
export const updateBusiness = async (
  businessInformation: businessInfo,
  token: String
) => {
  // const response = await consignerApi.post('/register/0', businessInformation);
  try {
    const response = await axios.post(
      // "http://auth.freighthub.danujaya.live/api/consigner/register/0",
      "http://localhost:8080/api/consigner/register/0",
      businessInformation,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.status === 200;
  } catch (error) {
    return 0;
    console.error("Error:", error);
    throw new Error("An unexpected error occurred.");
  }
};

//UPDATE CONTACT INFO
// export const updateContact = async (contactInformation: {id: string, mainNumber: string, altNumber: string }, jwt: any) => {
//   try {
//     const response = await fetch('http://localhost:8080/api/consigner/register/1', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${jwt}`,
//       },
//       body: JSON.stringify(contactInformation),
//     });

//     if (response.ok) {
//       return true;
//     } else {
//       return false;
//     }
//   } catch (error) {
//     console.error('Error:', error);
//     throw new Error('An unexpected error occurred.');
//   }
// };

//Update contact with axios
export const updateContact = async (
  contactInformation: contactInfo,
  token: String
) => {
  try {
    const response = await consignerApi.post(
      "/register/1",
      contactInformation,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.status === 200;
  } catch (error) {
    console.error("Error:", error);
    throw new Error("An unexpected error occurred.");
  }
};

//UPDATE LOCATION INFO
// export const updateLocation = async (locationInformation: any, jwt: string) => {
//   try {
//     const response = await fetch('http://localhost:8080/api/consigner/register/2', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${jwt}`,
//       },
//       body: JSON.stringify(locationInformation),
//     });

//     if (response.ok) {
//       return true;
//     } else {
//       return false;
//     }
//   } catch (error) {
//     console.error('Error:', error);
//     throw new Error('An unexpected error occurred.');
//   }
// };

//update location with axios
export const updateLocation = async (
  locationInformation: locationInfo,
  token: String
) => {
  try {
    const response = await consignerApi.post(
      "/register/2",
      locationInformation,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.status === 200;
  } catch (error) {
    console.error("Error:", error);
    throw new Error("An unexpected error occurred.");
  }
};

//MOBILE VERIFICATION
// export const sendMobileNumber = async (mobileNumber: string, jwt:string) => {
//   try {
//     const response = await fetch(`http://localhost:8080/api/otpv1/sendOtp?phoneNumber=${mobileNumber}`, {
//       method: 'POST',
//       headers: {
//         'Authorization': `Bearer ${jwt}`,
//         'Content-Type': 'application/json',
//       },
//     });

//     if (response.ok) {
//       return true;
//     } else {
//       return false;
//     }
//   } catch (error) {
//     console.error('Error:', error);
//     throw new Error('An unexpected error occurred.');
//   }
// }

//Mobile verification with axios
export const sendMobileNumber = async (mobileNumber: string, jwt: string) => {
  try {
    const response = await api.post(
      `/otpv1/sendOtp?phoneNumber=${mobileNumber}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      }
    );

    return response.status === 200;
  } catch (error) {
    console.error("Error:", error);
    throw new Error("An unexpected error occurred.");
  }
};

//VERIFY MOBILE NUMBER
// export const verifyMobileNumber = async (mobileNumber:string, otp:string, jwt:string) => {
//   try {
//     const response = await fetch(`http://localhost:8080/api/otpv1/verifyOtp?phoneNumber=${mobileNumber}&otp=${otp}`, {
//       method: 'POST',
//       headers: {
//         'Authorization': `Bearer ${jwt}`,
//         'Content-Type': 'application/json',
//       },
//     });

//     if (response.ok) {
//       return true;
//     } else {
//       return false;
//     }
//   } catch (error) {
//     console.error('Error:', error);
//     throw new Error('An unexpected error occurred.');
//   }
// }

//verify mobile number with axios
export const verifyMobileNumber = async (
  mobileNumber: string,
  otp: string,
  jwt: string
) => {
  try {
    const response = await api.post(
      `/otpv1/verifyOtp?phoneNumber=${mobileNumber}&otp=${otp}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      }
    );

    return response.status === 200;
  } catch (error) {
    console.error("Error:", error);
    throw new Error("An unexpected error occurred.");
  }
};
