"use server"

import { reviewApi } from "./config"

//GET CONSIGNER DETAILS
/* Methana function eka gahaganna @GEETHIKA*/
export const getConsignerDetails = async (id) =>{
  try {
    const response = await reviewApi.get('')// get eka athulata call karana function eka danna
  } catch (error) {
    throw new Error('An unexpected error occurred.');
  }
}

//VERIFY CONSIGNER
export const verifyConsigner = async (id) => {
  try {
    const response = await reviewApi.post('')
  } catch (error) {
    throw new Error('An unexpected error occurred.');
  }
}

//GET DRIVER DETAILS
export const getDriverDetails = async (id) =>{
  try {
    const response = await reviewApi.get('')// get eka athulata call karana function eka danna
  } catch (error) {
    throw new Error('An unexpected error occurred.');
  }
}

//VERIFY DRIVER
export const verifyDriver = async (id) => {
  try {
    const response = await reviewApi.post('')
  } catch (error) {
    throw new Error('An unexpected error occurred.');
  }
}

//GET DRIVER DETAILS
export const getVehicleDetails = async (id) =>{
  try {
    const response = await reviewApi.get('')// get eka athulata call karana function eka danna
  } catch (error) {
    throw new Error('An unexpected error occurred.');
  }
}

//VERIFY DRIVER
export const verifyVehicle = async (id) => {
  try {
    const response = await reviewApi.post('')
  } catch (error) {
    throw new Error('An unexpected error occurred.');
  }
}


//GET ALL VEHICLE DETAILS
export const getAllVehicleDetails = async () =>{
  try {
    const response = await reviewApi.get('')// get eka athulata call karana function eka danna
  } catch (error) {
    throw new Error('An unexpected error occurred.');
  }
}

//GET ALL DRIVER DETAILS
export const getAllDriverDetails = async () =>{
  try {
    const response = await reviewApi.get('')// get eka athulata call karana function eka danna
  } catch (error) {
    throw new Error('An unexpected error occurred.');
  }
}

//GET ALL DRIVER DETAILS
export const getAllConsignerDetails = async () =>{
  try {
    const response = await reviewApi.get('')// get eka athulata call karana function eka danna
  } catch (error) {
    throw new Error('An unexpected error occurred.');
  }
}