"use client"

import Box from '@mui/material/Box';
import styles from './newOrder.module.css'
import ProcessBox from '../../Auth/process/ProcessBox';
import TextField from '@mui/material/TextField';

import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { useRouter } from 'next/navigation';



const steps = [
  {
    title: '',
    semTitle: 'Pickup Information',
    pathName: '/consigner/orders/new/pickup_information',
    status: false
  },
  {
    title: '',
    semTitle: 'Purchase Order',
    pathName: '/purchase_order',
    status: false
  },
  {
    title: '',
    semTitle: 'Finalize',
    pathName: '/finalize',
    status: false
  }
];


const NewOrder = () => {

  const router = useRouter()

  const [pickupdate, setPickupDate] = useState("")
  const [from, setFrom] = useState("")
  const [to, setTo] = useState("")

  const handleSubmit = () => {
    router.push(`/consigner/orders/new/purchase_order?picupDate=${pickupdate}&from=${from}&to=${to}`)
  }

  return (
    
    <Box component="section" className='w-3/4'>
      <h1 className="text-4xl font-semibold text-center">New Order</h1>
      <Box component="section" className='border-orange-500 border-2 rounded-md my-3 bg-white p-3'>
        <Box component="section" sx={{ p: 2, border: '2px solid #FB8C00', borderRadius: '20px' }} className='w-4/5 mx-auto'>
          <ProcessBox step={steps} completion={0}/>
        </Box>
        <Box component="section" className='my-3 flex flex-row gap-5'>
          <Box component="section" sx={{ p: 2 }} className='basis-1/3'>
            <Box component="section" sx={{ p: 2, marginBottom: '20px'}} className='flex flex-col gap-3'>
              <h1 className='text-1xl font-semibold ms-3'>Pickup Date</h1>
          
              <TextField 
                // sx={{ minWidth: '250px'}}
                id="outlined-basic" 
                label="Date" 
                variant="outlined" 
                type='date'
                value={pickupdate}
                onChange={(e) => setPickupDate(e.target.value)}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              
            </Box>
            <Box component="section" sx={{ p: 2 }} className='flex flex-col gap-3'>
              <h1 className='text-1xl font-semibold ms-3'>Pickup Time</h1>
              
              <div className='flex flex-col gap-4'>
                <TextField 
                  // sx={{ minWidth: '300px'}}
                  id="outlined-basic" 
                  label="From" 
                  variant="outlined" 
                  type='time'
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />

                <TextField 
                  // sx={{ minWidth: '300px'}}
                  id="outlined-basic" 
                  label="To" 
                  variant="outlined" 
                  type='time'
                  value={to}
                  onChange={(e) => setTo(e.target.value)}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </div>
    
            </Box>
          </Box>
          <Box component="section" sx={{ p: 2 }} className='flex flex-col basis-2/3'>
            <Box component="section" sx={{ p: 2, marginBottom: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}  className='flex flex-col gap-3 '>
              <h1 className={styles.subTitle}>Pickup Location</h1>
              <Paper
                component="form"
                sx={{ p: '2px 4px', width: 400, borderRadius: '50px', background: '#F5F6FA' }}
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
        <Box component="section" sx={{ p: 2, textAlign: 'center'}}>
          <button className='bg-primary py-2 px-10 rounded-lg text-white hover:bg-orange-500 text-md duration-500' onClick={handleSubmit}>Submit</button>
        </Box>
      </Box>
    </Box>
    
  )
}

export default NewOrder