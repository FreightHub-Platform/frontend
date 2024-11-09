"use client"

import Logo from "../../../../components/review/consigners/info/Logo"
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { useState } from "react"
import Image from "next/image";



const ConsignerDetails = () => {

  const consignerStatus = false

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
      <div className="w-11/12 mb-3">
        <div className="bg-white p-5 rounded-2xl">
          <div className="p-1 bg-orange-300 w-full flex justify-between mb-3 rounded-lg">
            <div className="flex w-full justify-center">Consigner Details</div>
            { 
              !consignerStatus ?
                <form onSubmit={(e) => handleEmailSent(e,"businessMissMatch")}>
                  <button type="submit" className="me-4 hover:text-red-600 cursor-pointer"><ForwardToInboxIcon /></button>
                </form> 
              : null
            }
          </div>
          <div className="flex justify-center items-center"><Logo /></div>
          <div className="grid grid-cols-2 gap-2 mt-3">
            <div>
              <table className="table-fixed w-full">
                <tbody className="text-sm flex flex-col justify-between h-56">
                  <tr className="flex mb-1">
                    <td className="bg-orange-400 w-40 p-1 rounded-l-lg flex items-center ps-4">Business Name</td>
                    <td className="p-1 border-2 flex-grow ps-3 rounded-r-lg">Pambaya</td> 
                  </tr>
                  <tr className="flex mb-1">
                    <td className="bg-orange-400 w-40 p-1 rounded-l-lg flex items-center ps-4">Business Registration Number</td>
                    <td className="p-1 border-2 flex-grow flex items-center ps-3 rounded-r-lg">Pambaya</td> 
                  </tr>
                  <tr className="flex mb-1">
                    <td className="bg-orange-400 w-40 p-1 rounded-l-lg flex items-center ps-4">Email</td>
                    <td className="p-1 border-2 flex-grow ps-3 rounded-r-lg">Pambaya</td> 
                  </tr>
                  <tr className="flex mb-1">
                    <td className="bg-orange-400 w-40 p-1 rounded-l-lg flex items-center ps-4">Main Contact Number</td>
                    <td className="p-1 border-2 flex-grow ps-3 rounded-r-lg flex items-center">Pambaya</td> 
                  </tr>
                  <tr className="flex mb-1">
                    <td className="bg-orange-400 w-40 p-1 rounded-l-lg flex items-center ps-4">Alternative Contact Number</td>
                    <td className="p-1 border-2 flex-grow flex items-center ps-3 rounded-r-lg">Pambaya</td> 
                  </tr>
                </tbody>
              </table>
            </div>
            <div>
              <table className="table-fixed w-full">
                <tbody className="text-sm flex flex-col justify-between h-56">
                  <tr className="flex mb-1">
                    <td className="bg-orange-400 w-40 p-1 rounded-l-lg flex items-center ps-4">Address Line 1</td>
                    <td className="p-1 border-2 flex-grow ps-3 rounded-r-lg">Pambaya</td> 
                  </tr>
                  <tr className="flex mb-1">
                    <td className="bg-orange-400 w-40 p-1 rounded-l-lg flex items-center ps-4">Address Line 2</td>
                    <td className="p-1 border-2 flex-grow flex items-center ps-3 rounded-r-lg">Pambaya</td> 
                  </tr>
                  <tr className="flex mb-1">
                    <td className="bg-orange-400 w-40 p-1 rounded-l-lg flex items-center ps-4">City</td>
                    <td className="p-1 border-2 flex-grow flex items-center ps-3 rounded-r-lg">Pambaya</td> 
                  </tr>
                  <tr className="flex mb-1">
                    <td className="bg-orange-400 w-40 p-1 rounded-l-lg flex items-center ps-4">Province</td>
                    <td className="p-1 border-2 flex-grow ps-3 rounded-r-lg">Pambaya</td> 
                  </tr>
                  <tr className="flex mb-1">
                    <td className="bg-orange-400 w-40 p-1 rounded-l-lg flex items-center ps-4">Postal Code</td>
                    <td className="p-1 border-2 flex-grow ps-3 rounded-r-lg">Pambaya</td> 
                  </tr>
                  <tr className="flex mb-1">
                    <td className="bg-orange-400 w-40 p-1 rounded-l-lg flex items-center ps-4">Document</td>
                    <td className="p-1 border-2 flex-grow ps-3 rounded-r-lg">
                      <a href={'/pdf/1.pdf'} target="_blank" rel="noopener noreferrer" className="flex items-center">
                        <Image
                          src="/images/pdf.svg" 
                          alt="Description of the SVG"
                          width={30} 
                          height={30}
                        />
                        1.pdf
                      </a> 
                    </td> 
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="flex justify-center">
            {
              !consignerStatus ?
                <form onSubmit={(e) => handleEmailSent(e,"businessVerified")}>
                  <button type="submit" className="bg-green-500 py-2 px-5 rounded-lg hover:bg-green-600 duration-300 hover:text-white mt-2">Verify Consigner</button>
                </form> 
              : null
            }
            
          </div>
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
  )
}

export default ConsignerDetails