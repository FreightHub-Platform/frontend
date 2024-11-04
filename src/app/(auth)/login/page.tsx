"use client"

import Image from 'next/image'
import Navbar from '../../../components/navbar/Navbar'
import styles from './login.module.css'
import LoginBox from '../../../components/Auth/login/Login'
import Footer from '../../../components/footer/Footer'
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import React, { useState } from 'react'


const Login = () => {

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
          <LoginBox onLinkClick={() => setLoading(true)}/>
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

export default Login