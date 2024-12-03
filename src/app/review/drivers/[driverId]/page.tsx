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
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { getDriverDetails, verifyDriver, verifyVehicle } from "../../../../utils/review"
import { updateNotification } from "../../../../utils/notification"
import { useRouter } from "next/navigation"

const ProfileDetails = () => {

  const [submitting, setSubmitting] = useState(false);
  const [open, setOpen] = useState(false);
  const [sentMail, setSentMail] = useState(false);

  const [verifiedDr, setVerifiedDr] = useState(false);
  const [verifiedVr, setVerifiedVr] = useState(false);
  const [driverVehicleDetails, setDriverVehicleDetails] = useState({driver: "", vehicle: "", email: ""})
  const path = usePathname();
  

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
        'to': driverVehicleDetails.email,
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
  const router = useRouter();

  //Meka handle verify thana meka ona widiyata hadaganna @GEETHIKA
  const handleVerify = async (e, type) => {
    e.preventDefault();
    setSubmitting(true)
    const driverId = path.split('/')[3]
    try {
      if(type === 'driverVerified') {
        const did = {
          id : driverId
        }
        const response = await verifyDriver(did, localStorage.getItem('jwt'))
        if(response == 200){ // response eka succes nm yawnna
          handleEmailSent(e,type);
          router.refresh()
          const notificationBody = {
            notificationTime: new Date().toISOString().slice(0, 19),
            message: "Your profile has successfully verified",
            userId: driverId
          }
          await updateNotification(notificationBody, localStorage.getItem('jwt'))
        }
      } else {
        const vehicleId = 11
        const vid = {
          id : vehicleId
        }
        const response = await verifyVehicle(vid, localStorage.getItem('jwt'))
        if(response == 200){ // response eka succes nm yawnna
        handleEmailSent(e,type);
        const notificationBody = {
          notificationTime: new Date().toISOString().slice(0, 19),
          message: "Your vehicle has successfully verified",
          userId: driverId
        }
        const res = await updateNotification(notificationBody, localStorage.getItem('jwt'))
        // const res = await updateNotification(2, notifactionDetails)
      }
      }
      
    } catch (error) {
      console.error('Error fetching consigner data:', error);
    }
  }

  

  /* Methana function eka gahaganna @GEETHIKA*/
  useEffect(() => {
    const fetchDriverDetails = async () => {
      const driverId = path.split('/')[3]
      try {
        setSubmitting(true)
        const did = {
          id : driverId
        }
        const data = await getDriverDetails(did, localStorage.getItem('jwt'))
        setDriverVehicleDetails({driver: data.driver, vehicle: data.vehicle, email: data.driver.username})
        
        if(data.driver.verifyStatus == "verified"){
          setVerifiedDr(true)
        } 

        if(data.vehicle.verifyStatus == 'verified'){
          setVerifiedVr(true)
        } 
        console.log(data)
        setSubmitting(false)
      } catch (error) {
        
      }
    }

    fetchDriverDetails();
  }, [])

  useEffect(() => {
    console.log(driverVehicleDetails)
  }, [driverVehicleDetails])

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
        <div className="flex justify-center w-11/12">
          <div className="grid grid-cols-[400px_1fr] gap-3">
            <div className="gap-2 bg-white p-3 rounded-2xl max-h-[85vh]">
              <div className="bg-white p-5 rounded-2xl max-h-[75vh] overflow-y-auto custom-scrollbar-horizontal">
              <div>
                <div className="p-1 w-full flex justify-between mb-3 rounded-lg" style={{ backgroundColor: '#FF9800'}}>
                  <div className="flex w-full text-white justify-center font-bold">Driver Details</div>
                  {
                    !verifiedDr ?
                      <form onSubmit={(e) => handleEmailSent(e,"driverMissMatch")}>
                        <button type="submit" className="me-4 hover:text-white cursor-pointer"><ForwardToInboxIcon /></button>
                  </form>
                : null
              }
              
            </div>
            <ProfilePhoto pic={driverVehicleDetails.driver ? driverVehicleDetails.driver : ""}/>
          </div>
          <div className="mt-2">
            <Details driver={driverVehicleDetails.driver ? driverVehicleDetails.driver : ""}/>
          </div>  
          {/* <div>
            <BankDetails />
          </div>  */}
          </div>
          

          {!verifiedDr ? 
            <div className="flex justify-center">
              <form onSubmit={(e) => handleVerify(e,"driverVerified")}>
                <button type="submit" className="bg-green-500 py-2 px-5 rounded-lg hover:bg-green-600 duration-300 hover:text-white mt-2">Verify Driver</button>
              </form>
            </div> 
            : null
          }
          
          
        </div>
        <div className="gap-2 bg-white p-3 rounded-2xl max-h-[85vh]">
          <div className="bg-white p-5 rounded-2xl max-h-[75vh] overflow-y-auto custom-scrollbar-horizontal">
            <div className="p-1 bg-orange-300 w-full flex justify-between mb-2 rounded-lg" style={{ backgroundColor: '#FF9800'}}>
              <div className="flex w-full justify-center font-bold text-white">Vehicle Details</div>
              {
                !verifiedVr ?
                  <form onSubmit={(e) => handleEmailSent(e,"vehicleMissMatch")}>
                    <button type="submit" className="me-4 hover:text-white cursor-pointer"><ForwardToInboxIcon /></button>
                  </form>
                : null
              }
              
            </div>
            <div><VehicleDetails vehicle={driverVehicleDetails.vehicle ? driverVehicleDetails.vehicle : ""}/></div>
            <div className="p-1 border-3 font-bold w-full flex justify-center mb-2 mt-4 rounded-lg" style={{ borderColor: '#FF9800'}}>Vehicle Images</div>
            <div><VehicleImages vehicle={driverVehicleDetails.vehicle ? driverVehicleDetails.vehicle : ""}/></div>  
            <div className="p-1 border-3 font-bold w-full flex justify-center mb-2 mt-4 rounded-lg" style={{ borderColor: '#FF9800'}}>Vehicle Documents</div>
            <div><VehicleDocument vehicle={driverVehicleDetails.vehicle ? driverVehicleDetails.vehicle : ""}/></div> 
          </div>

          {!verifiedVr ? 
            <div className="flex justify-center">
              <form onSubmit={(e) => handleVerify(e,"vehicleVerified")}>
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