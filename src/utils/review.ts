"use server"

import { consignerApi, driverApi, reviewApi, vehicleApi } from "./config"

//GET CONSIGNER DETAILS
/* Methana function eka gahaganna @GEETHIKA*/
export const getConsignerDetails = async (cid : any, token : String) =>{
  try {
    const response = await consignerApi.post('/single', cid, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    console.log(response.data.data)// get eka athulata call karana function eka danna
    return response.data.data;
    
  } catch (error) {
    throw new Error('An unexpected error occurred.');
  }
}

//VERIFY CONSIGNER
export const verifyConsigner = async (cid : any, token : String) => {
  try {
    const response = await consignerApi.post('/register/verify', cid, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    return response.data.statusCode;
  } catch (error) {
    // return 400;
    throw new Error('An unexpected error occurred.');
  }
}

//GET DRIVER DETAILS
export const getDriverDetails = async (did : any, token : String) =>{
  try {
    const response = await driverApi.post('/single', did, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    return response.data.data;
  } catch (error) {
    throw new Error('An unexpected error occurred.');
  }
}

//VERIFY DRIVER
export const verifyDriver = async (did : any, token : String) => {
  try {
    const response = await driverApi.post('/register/verify', did, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    return response.data.statusCode;
  } catch (error) {
    throw new Error('An unexpected error occurred.');
  }
}

//GET DRIVER DETAILS
export const getVehicleDetails = async (vid : any, token : String) =>{
  try {
    const response = await vehicleApi.post('/single', vid, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })// get eka athulata call karana function eka danna
    return response.data.data;
  } catch (error) {
    throw new Error('An unexpected error occurred.');
  }
}

//VERIFY DRIVER
export const verifyVehicle = async (vid : any, token : String) => {
  try {
    const response = await vehicleApi.post('/register/verify', vid, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    return response.data.statusCode;
  } catch (error) {
    throw new Error('An unexpected error occurred.');
  }
}


//GET ALL VEHICLE DETAILS
export const getAllVehicleDetails = async (token : String) =>{
  try {
    const response = await vehicleApi.get('/', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })// get eka athulata call karana function eka danna
    return response.data.data;
  } catch (error) {
    throw new Error('An unexpected error occurred.');
  }
}

//GET ALL DRIVER DETAILS
export const getAllDriverDetails = async (token : String) =>{
  try {
    const response = await driverApi.get('/', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    return response.data.data;
  } catch (error) {
    throw new Error('An unexpected error occurred.');
  }
}

//GET ALL DRIVER DETAILS
export const getAllConsignerDetails = async (token : String) =>{
  try {
    const response = await consignerApi.get('/', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })// get eka athulata call karana function eka danna
    return response.data.data;
  } catch (error) {
    throw new Error('An unexpected error occurred.');
  }
}