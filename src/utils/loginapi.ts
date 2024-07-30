"use server"

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
      return responseData.data;
    } else {
      const errorData = await response.json();
      throw new Error(errorData.message);
    }
  } catch (error) {
    console.error('Error:', error);
    throw new Error('An unexpected error occurred.');
  }
};

//UPDATE BUSINESS INFORMATION
export const updateBusiness = async (businessInformation: {id: string, businessName: string, brn: string }, jwt: any) => {


  try {
    const response = await fetch('http://localhost:8080/api/consigner/register/0', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${jwt}`,
      },
      body: JSON.stringify(businessInformation),
    });

    if (response.ok) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error('Error:', error);
    throw new Error('An unexpected error occurred.');
  }
};

//UPDATE CONTACT INFO
export const updateContact = async (contactInformation: {id: string, mainNumber: string, altNumber: string }, jwt: any) => {
  try {
    const response = await fetch('http://localhost:8080/api/consigner/register/1', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${jwt}`,
      },
      body: JSON.stringify(contactInformation),
    });

    if (response.ok) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error('Error:', error);
    throw new Error('An unexpected error occurred.');
  }
};

//UPDATE LOCATION INFO
export const updateLocation = async (locationInformation: any, jwt: any) => {
  try {
    const response = await fetch('http://localhost:8080/api/consigner/register/2', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${jwt}`,
      },
      body: JSON.stringify(locationInformation),
    });

    if (response.ok) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error('Error:', error);
    throw new Error('An unexpected error occurred.');
  }
};
