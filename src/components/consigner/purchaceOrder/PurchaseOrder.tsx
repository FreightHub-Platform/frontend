"use client"
import Box from '@mui/material/Box';
import styles from './purchaseOrder.module.css'
import ProcessBox from '../../Auth/process/ProcessBox';
import TextField from '@mui/material/TextField';

import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from 'next/link';
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
  const [storeContact, setStoreContact] = useState("")
  const [storeEmail, setStoreEmail] = useState("")
  const [date, setDate] = useState("")

  const handleSubmit = () => {
    const newDetail = {
      "order_no": orderNo,
      "store_contact": storeContact,
      "store_email": storeEmail,
      "date": date
    }

    closeFunction(newDetail);
  }

  return ( 
    <Box component="section">
      <Box component="section" className='rounded-2xl my-3 bg-white p-3'>
        <Box component="section" sx={{ p: 2, border: '2px solid #FB8C00', borderRadius: '20px' }} className='w-1/2 mx-auto'>
          <ProcessBox step={steps} completion={1}/>
        </Box>
        <Box component="section" className='mt-3 mb-1 flex flex-row gap-5'>
          <Box component="section" sx={{ p: 2 }} className='basis-1/3'>
            <Box component="section" sx={{ p: 2, marginBottom: '20px'}} className='flex flex-col gap-4'>
              <h1 className='text-2xl font-semibold ms-3 mb-2' style={{ textAlign: 'center' }}>Purchase Order Details:</h1>  
              <Box component="section" sx={{ p: 2 }} className='flex flex-col gap-4'>
              
                <TextField
                  required
                  id="outlined-required"
                  label="Order No"
                  value={orderNo}
                  onChange={(e) => seOrderNo(e.target.value)}
                />

                <TextField
                  required
                  id="outlined-required"
                  label="Store Contact"
                  value={storeContact}
                  onChange={(e) => setStoreContact(e.target.value)}
                />

                <TextField
                  required
                  id="outlined-required"
                  label="Store Email"
                  value={storeEmail}
                  onChange={(e) => setStoreEmail(e.target.value)}
                />

              <TextField 
                id="outlined-basic" 
                label="Date" 
                variant="outlined" 
                type='date'
                value={date}
                onChange={(e) => setDate(e.target.value)}
                InputLabelProps={{
                  shrink: true,
                }}
              />
    
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <FormControlLabel control={<Checkbox />} label="Allow Load Sharing" />
              </Box>
            </Box>
          </Box>
          <Box component="section" sx={{ p: 2 }} className='flex flex-col basis-2/3'>
            <Box component="section" sx={{ p: 2, marginBottom: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}  className='flex flex-col gap-3 '>
              <h1 className={styles.subTitle}>Drop-Off Location</h1>
              <Paper
                component="form"
                sx={{ p: '2px 4px', width: 350, borderRadius: '50px', background: '#F5F6FA' }}
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
          <button className={styles.submitBtn} onClick={handleSubmit}>Submit</button>
        </Box>
      </Box>
    </Box>
    
  )
}

export default PurchaseOrder