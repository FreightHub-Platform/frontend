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

import FormHelperText from '@mui/material/FormHelperText';


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
    pathName: '/consigner/orders/new/finalize',
    status: false
  }
];


const types = ["Fruits", "Medicines", "Fishes", 'Chicken']



const ItemForm = ({addItems}) => {

  const [type, setType] = useState('');
  const [tpyeError, setTypeError] = useState(false)

  const handleChange = (event: SelectChangeEvent) => {
    setType(event.target.value as string);
  };

  const [name, setName] = useState("")
  const [nameError, setNameError] = useState(false)
  const [weight, setWeight] = useState("")
  const [weightError, setWeightError] = useState(false)
  const [cbm, setCbm] = useState("")
  const [cbmError, setCbmError] = useState(false)
  const [refrigirated, setRefrigirated] = useState(false)
  const [hazardous, setHazardous] = useState(false)
  const [perishable, setPerishable] = useState(false)

  const handleSubmit = () => {

    let hasError = false

    // if(!name){
    //   hasError = true
    //   setNameError(true)
    // } else {
    //   setNameError(false)  
    // }

    // if(!weight){
    //   hasError = true
    //   setWeightError(true)
    // } else {
    //   setWeightError(false)
    // }

    // if(!cbm){
    //   hasError = true
    //   setCbmError(true)      
    // } else {
    //   setCbmError(false)
    // }

    // if(!tpyeError){
    //   hasError = true
    //   setTypeError(true)  
    // } else {
    //   setTypeError(false)
    // }

    

      const newItem = {
        "itemName": name,
        "weight": weight,
        "cbm": cbm,
        "iTypeId": 1,
        "refrigerated": refrigirated,
        "hazardous": hazardous,
        "perishable": perishable
      }
      
      addItems(newItem)
    

  }

  return (
    <Box component="section" sx={{ p: 2 }} className='w-4/5 bg-white rounded-2xl'>
      <Box component="section" sx={{ p: 2, border: '2px solid #FB8C00', borderRadius: '20px' }} className='w-3/5 mx-auto'>
          <ProcessBox step={steps} completion={1} />
      </Box>
      <Box component="section"  sx={{ p: 2 }} className='m-3 flex flex-row gap-5'>
        <Box component="section"  className='basis-1/3 flex-col '>
          <div className='flex flex-col gap-2 mb-3'>
            <p className='font-semibold text-center text-base'>Name:</p>
            <TextField
              size='small'
              error={nameError}
              color='warning' 
              id="outlined-basic" 
              variant="outlined"
              value={name}
              helperText={nameError ? "Please enter the name" : ""}
              onChange={(e) => setName(e.target.value)}   
            />
          </div>
          <div className='flex flex-col gap-2 mb-3'>
            <p className='font-semibold text-center text-base'>Weight(kg):</p>
            <TextField
              sx={{
                "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
                                        display: "none",
                                      },
              "& input[type=number]": {
                                        MozAppearance: "textfield",
                                      },
              }}
              type='number'
              size='small'
              error={weightError}
              color='warning' 
              id="outlined-basic"
              variant="outlined" 
              value={weight}
              helperText={weightError ? "Please enter the weight in kg" : ""}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div className='flex flex-col gap-2 mb-3'>
            <p className='font-semibold text-center text-base'>CBM:</p>
            <TextField
              sx={{
                "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
                                        display: "none",
                                      },
              "& input[type=number]": {
                                        MozAppearance: "textfield",
                                      },
              }}
              type='number'
              size='small'
              error={cbmError}
              color='warning' 
              id="outlined-basic"
              variant="outlined" 
              value={cbm}
              helperText={cbmError ? "Please enter the CBM" : ""}
              onChange={(e) => setCbm(e.target.value)}
            />
          </div>
        </Box>
        <Box component="section" className='basis-2/3 flex-col'>
          <div className='flex flex-col gap-2 '>
            <p className='font-semibold text-center text-base'>Item Type</p>
            <Box component="section" className='mb-3'>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label" size='small' color='warning'>Type</InputLabel>
                <Select
                  size='small'
                  color='warning'
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  error={tpyeError}
                  value={type}
                  label="Types"
                  onChange={handleChange}
                >
                  {types.map((ele, index) => (
                    <MenuItem value={ele} key={index}>{ele}</MenuItem>
                  ))}
                </Select>
                {tpyeError && (
                  <FormHelperText error>
                    Please select the type.
                  </FormHelperText>
                )}
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
        <button className='bg-primary py-2 px-10 rounded-lg text-white hover:bg-orange-500 text-xs duration-500' onClick={handleSubmit}>Submit</button>
      </div>
    </Box>
  )

}

export default ItemForm