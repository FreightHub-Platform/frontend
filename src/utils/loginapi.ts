"use server"

import Cookies from 'js-cookie';

// Define the user details type
interface UserDetails {
  email: string;
  password: string;
}

// Define the response data type
interface ResponseData {
  completion: number;
  role: string;
  token: string;
}

// Define the response type
interface SigninResponse {
  statusCode: number;
  message: string;
  data: ResponseData;
}

// Define the error response type
interface ErrorResponse {
  error: true;
  message: string;
}

//SIGNIN
export const handleSignin = async (userDetails: { username: string, password: string }) => {
  try {
    const response = await fetch('http://localhost:8080/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userDetails),
    });

    if (response.ok) {
      const responseData = await response.json();
      // Store the JWT in cookies or localStorage if needed
      Cookies.set('jwt', responseData.data.token, { expires: 1 });
      return responseData.data; // Return the data part
    } else {
      const errorData = await response.json();
      throw new Error(errorData.message);
    }
  } catch (error) {
    console.error('Error:', error);
    throw new Error('An unexpected error occurred.');
  }
};
