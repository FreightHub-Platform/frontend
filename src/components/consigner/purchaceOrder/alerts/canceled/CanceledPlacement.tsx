"use client"

import Box from '@mui/material/Box'
import CloseIcon from '@mui/icons-material/Close';
import { useRouter } from 'next/navigation';

import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const CanceledPlacement = () => {

  const router = useRouter()
  const [open, setOpen] = React.useState(false);
  
  const handleSubmit =() => {
    setOpen(true);
    localStorage.clear();
    router.replace("/consigner/orders")
  }

  

  return (
    <div>
      <p className='text-4xl font-bold text-center mb-5'>Order Placement Declined!</p>
      <div className='flex flex-row justify-center my-5'>
        <CloseIcon className='text-9xl text-red-600'/>
      </div>
      <Box component="section" className='text-2xl font-semibold text-center '>
        We are sorry that we couldn’t meet your requirements 
      </Box>
      <p className='text-xl font-semibold text-center mt-10'>Go back to your Orders</p>
      <div className='flex justify-center mt-10'>
        <button className='bg-primary py-2 px-8 rounded-lg text-white hover:bg-orange-500' onClick={handleSubmit}>Back to Orders</button>
      </div>
      <div>
        <Backdrop
          sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
          open={open}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      </div>
    </div>
  )
}

export default CanceledPlacement