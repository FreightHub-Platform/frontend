"use client"

import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { useState } from "react"
import Image from "next/image";
import Logo from '../../../components/review/consigners/info/Logo';
import { FormControl, FormHelperText, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';



const ProfileC = () => {

  const currentPassward = "abc123"

  const [showOldPassword, setShowOldPassword] = React.useState(false);
  const [oldPassword, setOldPassword] = useState("")
  const [oldPasswordError, setOldPasswordError] = React.useState(false)
  const [showNewPassword, setShowNewPassword] = React.useState(false);
  const [newPassword, setNewPassword] = useState("")
  const [newPasswordError, setNewPasswordError] = React.useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
  const [confirmPassword, setConfirmPassword] = useState("")
  const [confirmPasswordError, setConfirmPasswordError] = React.useState(false)

  const [oldPasswordMissmatchError, setOldPasswordMissmatchError] = React.useState(false);
  const [newConfirmPasswordMissmatchError, setNewConfirmPasswordMissmatchError] = React.useState(false);

  const [loading, setLoading] = useState(false)

  const handleClickShowOldPassword = () => setShowOldPassword((show) => !show);
  const handleClickShowNewPassword = () => setShowNewPassword((show) => !show);
  const handleClickShowConfirmPassword = () => setShowConfirmPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const [open, setOpen] = useState(false);
  const [passwordChange, setPasswordChange] = useState(false);

  const handleChangePassword = () => {
    let hasError = false;

    if(!oldPassword){
      hasError = true;
      setOldPasswordError(true)
    } else if(oldPassword !== currentPassward) {
      hasError = true;
      setOldPasswordError(false)
      setOldPasswordMissmatchError(true)
    } else {
      setOldPasswordError(false)
      setOldPasswordMissmatchError(false)
    }

    
    if(!newPassword){
      hasError = true
      setNewPasswordError(true)
    } else if(newPassword !== confirmPassword){
      hasError = true;
      setNewPasswordError(false)
      setNewConfirmPasswordMissmatchError(true)
    } else {
      setNewPasswordError(false)
      setNewConfirmPasswordMissmatchError(false)
    }

    if(!confirmPassword){
      hasError = true
      setConfirmPasswordError(true)
    } else {
      setConfirmPasswordError(false)
    }

    if(!hasError){
      // setLoading(true)
      setPasswordChange(true)
      setOpen(true)
    }
 
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
    <div className="w-full mb-3 flex justify-center pb-5">
      <div className="bg-white p-5 w-11/12 rounded-2xl">
        <div className="p-1 bg-orange-300 w-full flex justify-between rounded-lg mb-3" style={{ backgroundColor: '#FF9800'}}>
          <div className="flex w-full justify-center font-bold text-white">Profile Details</div>
          {/* { 
            !consignerStatus ?
              <form onSubmit={(e) => handleEmailSent(e,"businessMissMatch")}>
                <button type="submit" className="me-4 hover:text-red-600 cursor-pointer"><ForwardToInboxIcon /></button>
              </form> 
            : null
          } */}
        </div>
        <div className="flex justify-center items-center"><Logo /></div>
        <div className="grid grid-cols-2 gap-2 mt-3">
          <div>
            <table className="table-fixed w-full">
              <tbody className="text-sm flex flex-col justify-between h-56">
                <tr className="flex mb-1">
                  <td className="border-2 border-orange-300 w-40 p-1 rounded-l-lg flex items-center ps-4">Business Name</td>
                  <td className="p-1 border-2 flex-grow flex items-center ps-3">Pambaya</td> 
                </tr>
                <tr className="flex mb-1">
                  <td className="border-2 border-orange-300 w-40 p-1 rounded-l-lg flex items-center ps-4">Business Registration Number</td>
                  <td className="p-1 border-2 flex-grow flex items-center ps-3">Pambaya</td> 
                </tr>
                <tr className="flex mb-1">
                  <td className="border-2 border-orange-300 w-40 p-1 rounded-l-lg flex items-center ps-4">Email</td>
                  <td className="p-1 border-2 flex-grow flex items-center ps-3">Pambaya</td> 
                </tr>
                <tr className="flex mb-1">
                  <td className="border-2 border-orange-300 w-40 p-1 rounded-l-lg flex items-center ps-4">Main Contact Number</td>
                  <td className="p-1 border-2 flex-grow flex items-center ps-3">Pambaya</td> 
                </tr>
                <tr className="flex mb-1">
                  <td className="border-2 border-orange-300 w-40 p-1 rounded-l-lg flex items-center ps-4">Alternative Contact Number</td>
                  <td className="p-1 border-2 flex-grow flex items-center ps-3">Pambaya</td> 
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <table className="table-fixed w-full">
              <tbody className="text-sm flex flex-col justify-between h-56">
                <tr className="flex mb-1">
                  <td className="border-2 border-orange-300 w-40 p-1 rounded-l-lg flex items-center ps-4">Address Line 1</td>
                  <td className="p-1 border-2 flex-grow flex items-center ps-3">Pambaya</td> 
                </tr>
                <tr className="flex mb-1">
                  <td className="border-2 border-orange-300 w-40 p-1 rounded-l-lg flex items-center ps-4">Address Line 2</td>
                  <td className="p-1 border-2 flex-grow flex items-center ps-3">Pambaya</td> 
                </tr>
                <tr className="flex mb-1">
                  <td className="border-2 border-orange-300 w-40 p-1 rounded-l-lg flex items-center ps-4">City</td>
                  <td className="p-1 border-2 flex-grow flex items-center ps-3">Pambaya</td> 
                </tr>
                <tr className="flex mb-1">
                  <td className="border-2 border-orange-300 w-40 p-1 rounded-l-lg flex items-center ps-4">Province</td>
                  <td className="p-1 border-2 flex-grow flex items-center ps-3">Pambaya</td> 
                </tr>
                <tr className="flex mb-1">
                  <td className="border-2 border-orange-300 w-40 p-1 rounded-l-lg flex items-center ps-4">Postal Code</td>
                  <td className="p-1 border-2 flex-grow flex items-center ps-3">Pambaya</td> 
                </tr>
                <tr className="flex mb-1">
                  <td className="border-2 border-orange-300 w-40 p-1 rounded-l-lg flex items-center ps-4">Document</td>
                  <td className="p-1 border-2 flex-grow">
                    <a href={'/pdf/1.pdf'} target="_blank" rel="noopener noreferrer" className="flex items-center ps-1">
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
        <div className='mt-11'>
          <div className='text-base text-slate-600 mb-3'>
            CHANGE PASSWORD
          </div>

          <div className='flex flex-col gap-3 w-2/5'>
            <FormControl  variant="outlined" size="small">
            <InputLabel htmlFor="outlined-adornment-old-password" color={oldPasswordError ? "error" : "warning"}>Old password</InputLabel>
            <OutlinedInput
              error={oldPasswordError || oldPasswordMissmatchError}
              color={oldPasswordError ? "error" : "warning"}
              id="outlined-adornment-old-password"
              onChange={(e) => setOldPassword(e.target.value)}
              type={showOldPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label={
                      showOldPassword ? 'hide the password' : 'display the password'
                    }
                    onClick={handleClickShowOldPassword}
                    onMouseDown={handleMouseDownPassword}
                    onMouseUp={handleMouseUpPassword}
                    edge="end"
                  >
                    {showOldPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="old_Password"   
            />
            {oldPasswordError && (
              <FormHelperText error >
                Please enter the old password.
              </FormHelperText>
            )}
            {!oldPasswordError && oldPasswordMissmatchError && (
              <FormHelperText error >
                Password does not match with the old password.
              </FormHelperText>
            )}
            </FormControl>
            <FormControl  variant="outlined" size="small">
              <InputLabel htmlFor="outlined-adornment-new-password" color={newPasswordError ? "error" : "warning"}>New password</InputLabel>
              <OutlinedInput
                error={newPasswordError || newConfirmPasswordMissmatchError}
                color={newPasswordError ? "error" : "warning"}
                id="outlined-adornment-new-password"
                onChange={(e) => setNewPassword(e.target.value)}
                type={showNewPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label={
                        showNewPassword ? 'hide the password' : 'display the password'
                      }
                      onClick={handleClickShowNewPassword}
                      onMouseDown={handleMouseDownPassword}
                      onMouseUp={handleMouseUpPassword}
                      edge="end"
                    >
                      {showNewPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="new_Password"
              />
              {newPasswordError && (
                <FormHelperText error >
                  Please enter the new password.
                </FormHelperText>
              )}
              {!newPasswordError && newConfirmPasswordMissmatchError && (
                <FormHelperText error >
                  New password and Confirm password does not match.
                </FormHelperText>
              )}
            </FormControl>
            <FormControl  variant="outlined" size="small">
              <InputLabel htmlFor="outlined-adornment-confirm-password" color={confirmPasswordError ? "error" : "warning"}>Confirm password</InputLabel>
              <OutlinedInput
                error={confirmPasswordError || newConfirmPasswordMissmatchError}
                color={confirmPasswordError ? "error" : "warning"}
                id="outlined-adornment-confirm-password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                type={showConfirmPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label={
                        showConfirmPassword ? 'hide the password' : 'display the password'
                      }
                      onClick={handleClickShowConfirmPassword}
                      onMouseDown={handleMouseDownPassword}
                      onMouseUp={handleMouseUpPassword}
                      edge="end"
                    >
                      {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="confirm_Password"
              />
              {confirmPasswordError && (
                <FormHelperText error >
                  Please confirm the new password.
                </FormHelperText>
              )}
              {!confirmPasswordError && newConfirmPasswordMissmatchError && (
                <FormHelperText error >
                  New password and Confirm password does not match.
                </FormHelperText>
              )}
            </FormControl>
            <div className='flex justify-center w-full'>
              <button className="bg-green-500 py-2 px-5 rounded-lg hover:bg-green-600 duration-300 hover:text-white mt-2" onClick={handleChangePassword}>Change password</button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Backdrop
          sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
          open={loading}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      </div>
      <div>
        <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity={passwordChange ? "success" : "error"}
            variant="filled"
            sx={{ width: '100%' }}
          >
            {passwordChange ? "Password change success!" : "Password change fail!"}
          </Alert>
        </Snackbar>
      </div>
    </div>
  )
}

export default ProfileC