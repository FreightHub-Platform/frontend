"use client"

import ProfilePhoto from "../../../../components/review/info/person/ProfilePhoto"
import Details from "../../../../components/review/info/person/Details"
import BankDetails from "../../../../components/review/info/person/BankDetails"
import VehicleDetails from "../../../../components/review/info/vechicle/VehicleDetails"
import VehicleDocument from "../../../../components/review/info/vechicle/VehicleDocument"
import VehicleImages from "../../../../components/review/info/vechicle/VehicleImages"
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { useState } from "react"

const ProfileDetails = () => {

  const verifiedDriver = false
  const verifiedVehicle = false

  const [submitting, setSubmitting] = useState(false);
  const [open, setOpen] = useState(false);
  const [sentMail, setSentMail] = useState(false);

  const handleEmailSent = async(e, type) => {
    e.preventDefault();
    setSubmitting(true)

    const response = await fetch('api/send-mail',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        'name': "Nuwan Fernando",
        'to': "fnimal402@gmail.com",
        'mailType': type
      })
    })

    const { success, error } = await response.json()
    if (success) {
      setSentMail(true)
      setOpen(true)
    } else if (error){
      setOpen(true)
    }

    setSubmitting(false)
  }

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason,
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return(

      <div className="flex justify-center">
        <div className="flex justify-center w-11/12 mb-3">
          <div className="grid grid-cols-[400px_1fr] gap-3">
            <div className="gap-2 bg-white p-5 rounded-2xl max-h-[85vh]">
              <div className="bg-white p-5 rounded-2xl max-h-[75vh] overflow-y-auto">
              <div>
                <div className="p-1 w-full flex justify-between mb-3 rounded-lg" style={{ backgroundColor: '#FF9800'}}>
                  <div className="flex w-full text-white justify-center font-bold">Driver Details</div>
                  {
                    !verifiedDriver ?
                      <form onSubmit={(e) => handleEmailSent(e,"driverMissMatch")}>
                        <button type="submit" className="me-4 hover:text-white cursor-pointer"><ForwardToInboxIcon /></button>
                  </form>
                : null
              }
              
            </div>
            <ProfilePhoto />
          </div>
          <div className="mt-2">
            <Details />
          </div>  
          <div>
            <BankDetails />
          </div> 
          </div>
          

          {!verifiedDriver ? 
            <div className="flex justify-center">
              <form onSubmit={(e) => handleEmailSent(e,"driverVerified")}>
                <button type="submit" className="bg-green-500 py-2 px-5 rounded-lg hover:bg-green-600 duration-300 hover:text-white mt-2">Verify Driver</button>
              </form>
            </div> 
            : null
          }
          
          
        </div>
        <div className="gap-2 bg-white p-5 rounded-2xl max-h-[85vh]">
          <div className="bg-white p-5 rounded-2xl max-h-[75vh] overflow-y-auto">
            <div className="p-1 bg-orange-300 w-full flex justify-between mb-2 rounded-lg" style={{ backgroundColor: '#FF9800'}}>
              <div className="flex w-full justify-center font-bold text-white">Vehicle Details</div>
              {
                !verifiedVehicle ?
                  <form onSubmit={(e) => handleEmailSent(e,"vehicleMissMatch")}>
                    <button type="submit" className="me-4 hover:text-white cursor-pointer"><ForwardToInboxIcon /></button>
                  </form>
                : null
              }
              
            </div>
            <div><VehicleDetails /></div>
            <div className="p-1 border-3 font-bold w-full flex justify-center mb-2 mt-4 rounded-lg" style={{ borderColor: '#FF9800'}}>Vehicle Images</div>
            <div><VehicleImages /></div>  
            <div className="p-1 border-3 font-bold w-full flex justify-center mb-2 mt-4 rounded-lg" style={{ borderColor: '#FF9800'}}>Vehicle Documents</div>
            <div><VehicleDocument /></div> 
          </div>

          {!verifiedVehicle ? 
            <div className="flex justify-center">
              <form onSubmit={(e) => handleEmailSent(e,"vehicleVerified")}>
                <button className="bg-green-500 py-2 px-5 rounded-lg hover:bg-green-600 duration-300 hover:text-white mt-2">Verify Vehicle</button>
              </form>
            </div>
           : null
          }
          
        </div>
        <div>
          <Backdrop
            sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
            open={submitting}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
        </div>
        <div>
          <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
            <Alert
              onClose={handleClose}
              severity={sentMail ? "success" : "error"}
              variant="filled"
              sx={{ width: '100%' }}
            >
              {sentMail ? "Email sent success!" : "Email sent fail!"}
            </Alert>
          </Snackbar>
        </div>
      </div>
    </div>
  </div >
  )
}

export default ProfileDetails