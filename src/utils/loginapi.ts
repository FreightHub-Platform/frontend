"use server"
import axios from "axios"

import { UserLogin, businessInfo, contactInfo, locationInfo } from './interfaces/signIn_signUp'
import { api, consignerApi } from './config'

//SignIn with axios
export const handleSignin = async (userDetails: UserLogin) => {
  try {
    const response = await api.post('/auth/login', userDetails);
    return response.data.data;

  } catch (error: any) {
    if (error.response && error.response.data) {
      throw new Error(error.response.data.message);
    } else {
      console.error('Error:', error);
      throw new Error('An unexpected error occurred.');
    }
  }
};


//upadte with axios
export const updateBusiness = async (businessInformation: businessInfo, token: String) => {
    // const response = await consignerApi.post('/register/0', businessInformation);
    try {
      const response = await axios.post('http://localhost:8080/api/consigner/register/0', businessInformation, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
    return response.status === 200;

  } catch (error) {
    return 0;
    console.error('Error:', error);
    throw new Error('An unexpected error occurred.');
  }
};


//Update contact with axios
export const updateContact = async (contactInformation: contactInfo, token: String) => {
  try {
    const response = await consignerApi.post('/register/1', contactInformation, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    return response.status === 200;

  } catch (error) {
    console.error('Error:', error);
    throw new Error('An unexpected error occurred.');
  }
};


//update location with axios
export const updateLocation = async (locationInformation: locationInfo, token: String) => {
  try {
    const response = await consignerApi.post('/register/2', locationInformation, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    return response.status === 200;
    
  } catch (error) {
    console.error('Error:', error);
    throw new Error('An unexpected error occurred.');
  }
};


//Mobile verification with axios
export const sendMobileNumber = async (mobileNumber: string, jwt:string) => {
  try {
    const response = await api.post(`/otpv1/sendOtp?phoneNumber=${mobileNumber}`, {}, {
      headers: {
        'Authorization': `Bearer ${jwt}`,
      },
    });

    return response.status === 200
  } catch (error) {
    console.error('Error:', error);
    throw new Error('An unexpected error occurred.');
  }
}


//verify mobile number with axios
export const verifyMobileNumber = async (mobileNumber:string, otp:string, jwt:string) => {
  try {
    const response = await api.post(`/otpv1/verifyOtp?phoneNumber=${mobileNumber}&otp=${otp}`, {}, {
      headers: {
        'Authorization': `Bearer ${jwt}`,
      },
    });

    return response.status === 200
  } catch (error) {
    console.error('Error:', error);
    throw new Error('An unexpected error occurred.');
  }
}