'use client'

import styles from './location.module.css'
import Navbar from '../../../components/navbar/Navbar'
import ProcessBox from '../../../components/Auth/process/ProcessBox'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import ErrorRoundedIcon from '@mui/icons-material/ErrorRounded';
import TextField from '@mui/material/TextField';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import Link from 'next/link';
import Image from 'next/image'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CheckIcon from '@mui/icons-material/Check';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Footer from '../../../components/footer/Footer';

const currencies = [
  {
    value: 'Sri Lanka',
  },
  {
    value: 'America',
  },
  {
    value: 'United States',
  },
  {
    value: 'Italy',
  },
];

const status = {
  stepCompletion: 2,
  business: true,
  contact: true,
  location: false
}


const Location = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [contact, setContact] = useState('')
  const [country, setCountry] = useState('')
  const [zipCode, setZipCode] = useState('')
  const [vatNumber, setVatNumber] = useState('')

  const [nameError, setNameError] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [addressError, setAddressError] = useState(false)
  const [contactError, setContactError] = useState(false)
  const [countryError, setCountryError] = useState(false)
  const [zipCodeError, setZipCodeError] = useState(false)
  const [vatNumberError, setVatNumberError] = useState(false)

  const handleSubmit = () => {
    let hasError = false

    if(!country){
      setCountryError(true)
      hasError = true
    } else {
      setCountryError(false)
    }

    if(!email){
      setEmailError(true)
      hasError = true
    } else {
      setEmailError(false)
    }

    if(!address){
      setAddressError(true)
      hasError = true
    } else {
      setAddressError(false)
    }

    if(!contact){
      setContactError(true)
      hasError = true
    } else {
      setContactError(false)
    }

    if(!name){
      setNameError(true)
      hasError = true
    } else {
      setNameError(false)
    }

    if(!zipCode){
      setZipCodeError(true)
      hasError = true
    } else {
      setZipCodeError(false)
    }

    if(!vatNumber){
      setVatNumberError(true)
      hasError = true
    } else {
      setVatNumberError(false)
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Navbar />
        <div className={styles.imageContainer}>
          <Image src='/images/image.png' alt='' fill className={styles.img}/>
        </div>
      </div>
      <div className={styles.bottom}>
        <ProcessBox step={status}/>

        <div className={styles.desc}>
          <div className={styles.titleContainer}>
            <div className={styles.title}>Location Information</div>
            <div className={styles.subtitle}>Basic location details</div>
          </div>
          <div className={styles.status}>
            <button className={styles.edit}><EditOutlinedIcon className={styles.editicon}/>Edit</button>
            <div className={styles.progress}>
              <div className={styles.icon}>
                  <ErrorRoundedIcon className={styles.erricon}/>
              </div>
              <div className={styles.detail}>
                  <p>In Progress</p>
                  <p>Fill all the fields</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.input}>
          <div className={styles.left}>
            <div className={styles.line}>
              <div className={styles.lft}>
                <label htmlFor="">Name</label>
                <TextField 
                  error={nameError}
                  id="outlined-basic" 
                  variant="outlined" 
                  color='warning'
                  value={name}
                  onChange={e => setName(e.target.value)}
                  helperText={nameError ? "Please enter name" : ''}
                  />
              </div>
              <div className={styles.rgt}>
                <label htmlFor="">Email</label>
                <TextField 
                  error={emailError}
                  id="outlined-basic" 
                  variant="outlined" 
                  color='warning'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  helperText={emailError ? "Please enter email" : ""}
                  />
              </div>
            </div>
            <div className={styles.textField}>
              <label htmlFor="">Billing address</label>
              <TextField
                error={addressError}
                id="outlined-multiline-static"
                multiline
                rows={4}
                placeholder="Address"
                color='warning'
                value={address}
                onChange={e => setAddress(e.target.value)}
                helperText={addressError ? "Please enter address" : ""}
                sx={{width: '100%'}}
              />
            </div>
            <div className={styles.line}>
              <div className={styles.lft}>
                <label htmlFor="">Contact</label>
                <TextField 
                  error={contactError}
                  id="outlined-basic" 
                  variant="outlined" 
                  color='warning'
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  helperText={contactError ? "Please enter contact number" : ""}
                  />
              </div>
              <div className={styles.rgt}>
                <label htmlFor="">Country</label>
                <TextField
                  error={countryError}
                  color='warning'
                  id="outlined-select-currency"
                  select
                  value={country}
                  onChange={e => setCountry(e.target.value)}
                  helperText={countryError ? "Please select country" : ""}
                >
                  {currencies.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.value}
                    </MenuItem>
                  ))}
                </TextField>
              </div>
            </div>
            <div className={styles.line}>
              <div className={styles.lft}>
                <label htmlFor="">Zip code</label>
                <TextField 
                  error={zipCodeError}
                  id="outlined-basic" 
                  variant="outlined" 
                  color='warning'
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                  helperText={zipCodeError ? "Please enter zip code" : ""}
                  />
              </div>
              <div className={styles.rgt}>
                <label htmlFor="">Vat number</label>
                <TextField 
                  error={vatNumberError}
                  id="outlined-basic" 
                  variant="outlined" 
                  color='warning'
                  value={vatNumber}
                  onChange={(e) => setVatNumber(e.target.value)}
                  helperText={vatNumberError ? "Please enter vat number" : ""}
                  />
              </div>
            </div>
          </div> 
          <div className={styles.right}>
            <div className={styles.locationMap}></div>
          </div>
        </div>

        <div className={styles.options}>
          <button className={styles.btn}>
            <UploadFileIcon />
            Draft
          </button>
          <Link href='/contact_information'>
            <button className={styles.btn}>
              <ArrowBackIcon  />
              Back
            </button>
          </Link>
          <button className={styles.submit} onClick={handleSubmit}>
              <CheckIcon  />
              Submit
            </button>
        </div>

        <Footer />
      </div>
    </div>
  )
}

export default Location