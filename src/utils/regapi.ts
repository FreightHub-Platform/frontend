"use server"

//SIGNUP
export const handleSignup = async (userDetails) => {
  const user = userDetails;

  try {
    const response = await fetch('http://localhost:8080/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });

    if (response.ok) {
      return true
    } else {
      return false;
    }
  } catch (error) {
    console.error('Error:', error);
  }
};


//LOGIN


//BUSINESS INFORMATION
