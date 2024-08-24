"use server"

import { api } from './config'
import { UserRegister } from './interfaces/signIn_signUp';

//SIGNUP
// export const handleSignup = async (userDetails) => {
//   const user = userDetails;

//   try {
//     const response = await fetch('http://localhost:8080/api/auth/register', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(user),
//     });

//     if (response.ok) {
//       return true
//     } else {
//       return false;
//     }
//   } catch (error) {
//     console.error('Error:', error);
//   }
// };


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
