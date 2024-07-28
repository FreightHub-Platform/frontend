"use client"

import Box from '@mui/material/Box'
import ProcessBox from '../../../../Auth/process/ProcessBox';
import TextField from '@mui/material/TextField';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from 'react';

import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


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


const types = ["Fruits", "Medicines", "Fishe", 'Chicken']



const ItemForm = ({addItems}) => {

  const [type, setType] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setType(event.target.value as string);
  };

  const [name, setName] = useState("")
  const [weight, setWeight] = useState("")
  const [cbm, setCbm] = useState("")
  const [refrigirated, setRefrigirated] = useState(false)
  const [hazardous, setHazardous] = useState(false)
  const [perishable, setPerishable] = useState(false)

  const handleSubmit = () => {
    const newItem = {
      "name": name,
      "weight": weight,
      "cbm": cbm,
      "type": type,
      "refrigirated": refrigirated,
      "hazardous": hazardous,
      "perishable": perishable
    }

    addItems(newItem)
  }

  return (
    <Box component="section" sx={{ p: 2 }} className='w-4/5 bg-white rounded-2xl'>
      <Box component="section" sx={{ p: 2, border: '2px solid #FB8C00', borderRadius: '20px' }} className='w-3/4 mx-auto'>
          <ProcessBox step={steps} completion={1} />
      </Box>
      <Box component="section" sx={{ p: 2 }} className='m-3 flex flex-row gap-5'>
        <Box component="section" sx={{ p: 2 }} className='basis-1/3 flex-col '>
          <div className='flex flex-col gap-2 mb-5'>
            <p className='font-semibold text-center text-2xl'>Name:</p>
            <TextField 
              id="outlined-basic" 
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}   
            />
          </div>
          <div className='flex flex-col gap-2 mb-5'>
            <p className='font-semibold text-center text-2xl'>Weight:</p>
            <TextField 
              id="outlined-basic"
              variant="outlined" 
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div className='flex flex-col gap-2 mb-5'>
            <p className='font-semibold text-center text-2xl'>CBM:</p>
            <TextField 
              id="outlined-basic"
              variant="outlined" 
              value={cbm}
              onChange={(e) => setCbm(e.target.value)}
            />
          </div>
        </Box>
        <Box component="section" sx={{ p: 2 }} className='basis-2/3 flex-col'>
          <div className='flex flex-col gap-2 mb-5'>
            <p className='font-semibold text-center text-2xl'>Item Type</p>
            <Box component="section" sx={{ p: 2 }} >
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Type</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={type}
                  label="Types"
                  onChange={handleChange}
                >
                  {types.map((ele, index) => (
                    <MenuItem value={ele} key={index}>{ele}</MenuItem>
                  ))}
                </Select>
              </FormControl>  
            </Box>
          </div>

          <div className='flex flex-row justify-between px-10'>
            <FormControlLabel control={<Checkbox />} label="Refrigirated" onChange={(e) => setRefrigirated(true)}/>
            <FormControlLabel control={<Checkbox />} label="Hazardous" onChange={(e) => setHazardous(true)}/>
            <FormControlLabel control={<Checkbox />} label="Perishable" onChange={(e) => setPerishable(true)}/>
          </div>
        </Box>
      </Box>
      <div className='flex justify-center'>
        <button className='bg-primary py-2 px-10 rounded-lg text-white hover:bg-orange-400 text-sm' onClick={handleSubmit}>Submit</button>
      </div>
    </Box>
  )

}

export default ItemForm