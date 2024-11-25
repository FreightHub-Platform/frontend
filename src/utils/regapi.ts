"use server"

import { api } from './config'
import { UserRegister } from './interfaces/signIn_signUp';


//SignUp with axios
export const handleSignup = async (userDetails: UserRegister): Promise<boolean>=> {
   
    try {
      const response = await api.post('/auth/register', userDetails)
      if (response.status === 200) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error('Error:', error);
      return false;
    }
  };
