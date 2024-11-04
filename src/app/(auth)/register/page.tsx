"use client"

import Image from 'next/image'
import styles from './register.module.css'
import RegisterBox from '../../../components/Auth/register/RegisterBox'
import Navbar from '../../../components/navbar/Navbar'
import Footer from '../../../components/footer/Footer'
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

const Register = () => {
  const [loading, setLoading] = useState(false)

  return (
    <div className='h-screen overflow-hidden'>
      {
        loading ? 
          <Box sx={{ width: '100%' }}>
            <LinearProgress color='warning'/>
          </Box>
        : null
      }
      
      <Navbar onLinkClick={() => setLoading(true)}/>
      <div className='grid grid-cols-2 h-full items-center'>
        <div className='flex justify-center'>
          <RegisterBox onLinkClick={() => setLoading(true)}/>
          <Footer />
        </div>
        <div className='relative w-full h-full flex'>
        <Image 
            src="/images/home-page-side.png" 
            alt="Home Page Side" 
            fill 
          />
        </div>
      </div>  
    </div> 
  )
}

export default Register