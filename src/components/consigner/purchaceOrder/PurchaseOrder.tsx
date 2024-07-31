"use client"

import Box from '@mui/material/Box';
import ProcessBox from '../../Auth/process/ProcessBox';
import TextField from '@mui/material/TextField';

import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react';



const steps = [
  {
    title: '',
    semTitle: 'Pickup Information',
    pathName: '/consigner/orders/new/pickup_information',
    status: true
  },
  {
    title: '',
    semTitle: 'Purchase Order',
    pathName: '/consigner/orders/new/purchase_order',
    status: false
  },
  {
    title: '',
    semTitle: 'Finalize',
    pathName: '/finalize',
    status: false
  }
];


const PurchaseOrder = ({closeFunction}) => {

  const [orderNo, seOrderNo] = useState("")
  const [orderNoError, setOrderNoError] = useState(false)
  const [storeContact, setStoreContact] = useState("")
  const [storeContactError, setStoreContactError] = useState(false)
  const [storeEmail, setStoreEmail] = useState("")
  const [storeEmailError, setStoreEmailError] = useState(false)
  const [emailVerification, setEmailVerification] = useState(false)
  const [date, setDate] = useState("")
  const [dateError, setDateError] = useState(false)
  const [drop_offTime, setDro_offTime] = useState("")
  const [drop_offTimeError, setDrop_offTimeError] = useState(false)
  const [address, setAddress] = useState("")
  const [addressError, setAddressError] = useState(false)
  const [storeName, setStoreName] = useState("")
  const [storeNameError, setStoreNameError] = useState(false)

  const [allowSharing, setAllowSharing] = useState(false)

  const today = new Date().toISOString().split('T')[0];

  const handleSubmit = () => {
    let hasError = false

    // if(!orderNo){
    //   hasError = true
    //   setOrderNoError(true)
    // } else {
    //   setOrderNoError(false)
    // }

    // if(!storeContact){
    //   hasError = true
    //   setStoreContactError(true)
    // } else {
    //   setStoreContactError(false)
    // }

    // if(!storeEmail) {
    //   setStoreEmailError(true)
    //   hasError = true
    // } else {
    //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //   if(!(emailRegex.test(storeEmail))){
    //     setStoreEmailError(true)
    //     setEmailVerification(true)
    //     hasError = true
    //   } else {
    //     setStoreEmailError(false)
    //     setEmailVerification(false)
    //   }
    // }

    // if(!date){
    //   hasError = true
    //   setDateError(true)
    // } else {
    //   setDateError(false)
    // }

    // if(!drop_offTime){
    //   hasError = true
    //   setDrop_offTimeError(true)
    // } else {
    //   setDrop_offTimeError(false)
    // }

    // if(!address){
    //   hasError = true
    //   setAddressError(true)
    // } else {
    //   setAddressError(false)
    // }

    // if(!storeName){
    //   hasError = true
    //   setStoreNameError(true)
    // } else {
    //   setStoreNameError(false)
    // }

    if(!hasError){
      
      const newDetail = {
        "order_no": orderNo,
        "store_contact": storeContact,
        "store_email": storeEmail,
        "date": date,
        "drop_off_time": drop_offTime,
        "address": address,
        "store_name": storeName,
        "allow_shearing": allowSharing
      }
      
      closeFunction(newDetail);
    }
  }

  return ( 
    <Box component="section">
      <Box component="section" className='rounded-2xl my-3 bg-white p-3'>
        <Box component="section" sx={{ p: 2, border: '2px solid #FB8C00', borderRadius: '20px' }} className='w-3/5 mx-auto mb-8'>
          <ProcessBox step={steps} completion={1}/>
        </Box>
        <Box component="section" className='mt-2 mb-1 flex flex-row gap-5'>
          <Box component="section" className='basis-1/2 pl-10'>
            <Box component="section" sx={{ marginBottom: '20px'}} className='flex flex-col gap-4'>
              <h1 className='text-base font-semibold mb-2' style={{ textAlign: 'center' }}>Purchase Order Details:</h1>  
              <Box component="section" className='flex flex-col gap-4'>
              
              <div className='flex flex-row gap-4 items-center'>
                <TextField
                  size="small"
                  color='warning'
                  required
                  id="outlined-required"
                  label="Store name"
                  error={storeNameError}
                  value={storeName}
                  helperText={storeNameError ? "Please enter store name" : ""}
                  onChange={(e) => setStoreName(e.target.value)}
                  sx={{flex: 1}}
                />

                <TextField
                  sx={{
                    "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
                                            display: "none",
                                          },
                  "& input[type=number]": {
                                            MozAppearance: "textfield",
                                          },
                                          flex: 1}}
                  size="small"
                  color='warning'
                  error={storeContactError}
                  required
                  type='number'
                  id="outlined-required"
                  label="Store contact number"
                  value={storeContact}
                  helperText={storeContactError ? "Please enter contact number" : ""}
                  onChange={(e) => setStoreContact(e.target.value)}
                />
              </div>
              <div className='flex flex-row gap-4 items-center'>
                <TextField
                  size="small"
                  error={orderNoError}
                  color='warning'
                  required
                  id="outlined-required"
                  label="Order No"
                  helperText={orderNoError ? "Please enter order number" : ""}
                  value={orderNo}
                  onChange={(e) => seOrderNo(e.target.value)}
                  sx={{flex: 1}}
                />

                <TextField
                  size="small"
                  error={storeEmailError}
                  color='warning'
                  required
                  id="outlined-required"
                  label="Email"
                  value={storeEmail}
                  helperText={emailVerification ? "Please enter valid email address" : storeEmailError ? "Please enter email address" : ""}
                  onChange={(e) => setStoreEmail(e.target.value)}
                  sx={{flex: 1}}
                />
              </div>
              <div className='flex flex-row gap-4 items-center'>
                <TextField
                  size="small"
                  color='warning'
                  error={drop_offTimeError}
                  required
                  id="outlined-required"
                  type='time'
                  label="Drop-off time"
                  value={drop_offTime}
                  helperText={drop_offTimeError ? "Please enter drop_off time" : ""}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={(e) => setDro_offTime(e.target.value)}
                  sx={{flex: 1}}
                />

                <TextField
                  size="small"
                  error={dateError}
                  color='warning' 
                  id="outlined-basic" 
                  label="Date" 
                  variant="outlined" 
                  type='date'
                  value={date}
                  helperText={dateError ? "Please select a drop off date" : ""}
                  onChange={(e) => setDate(e.target.value)}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  inputProps={{
                    min: today, 
                  }}
                  sx ={{ flex: 1}}
                />
              </div>
              <div className='flex flex-row justify-center items-center'>
                <TextField
                  size="small"
                  color='warning'
                  multiline
                  error={addressError}
                  helperText={addressError ? "Please enter address" : ""}
                  rows={2}
                  required
                  id="ooutlined-multiline-static"
                  label="Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  sx={{flex: 1}}
                />
              </div>
                
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <FormControlLabel control={<Checkbox />} label="Allow Load Sharing" onChange={() => setAllowSharing(true)}/>
              </Box>
            </Box>
          </Box>
          <Box component="section" className='flex flex-col basis-1/2'>
            <Box component="section" sx={{ marginBottom: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}  className='flex flex-col gap-3 '>
              <h1 className='text-base font-semibold ms-3 mb-2'>Drop-Off Location</h1>
              <Paper
                component="form"
                sx={{  width: 350, borderRadius: '50px', background: '#F5F6FA' }}
              >
                <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                  <SearchIcon />
                </IconButton>
                <InputBase
                  sx={{ ml: 1, flex: 1, }}
                  placeholder="Search Google Maps"
                  inputProps={{ 'aria-label': 'search google maps' }}
                />
              
              </Paper>
            </Box>
            <Box component="section" sx={{ p: 2 }}>
              Google map
            </Box>
          </Box>
        </Box>
        <Box component="section" sx={{ textAlign: 'center'}}>
          <button className='bg-primary py-2 px-8 rounded-lg text-white hover:bg-orange-500 text-sm duration-500' onClick={handleSubmit}>Submit</button>
        </Box>
      </Box>
    </Box>
    
  )
}

export default PurchaseOrder