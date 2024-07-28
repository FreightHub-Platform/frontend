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
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useRouter } from 'next/navigation'


const steps = [
  {
    title: 'Business',
    semTitle: 'Business Information',
    pathName: '/business_information',
    status: true
  },
  {
    title: 'Contact',
    semTitle: 'Contact Information',
    pathName: '/contact_information',
    status: true
  },
  {
    title: 'Location',
    semTitle: 'Location Information',
    pathName: '/location_information',
    status: false
  }
];


const Location = () => {

  const router = useRouter()

  const [address, setAddress] = useState('')
  const [postalCode, setPostalCode] = useState('')
  const [city, setCity] = useState('')
  const [province, setProvince] = useState('')

  const [addressError, setAddressError] = useState(false)
  const [postalCodeError, setPostalCodeError] = useState(false)
  const [cityError, setCityError] = useState(false)
  const [provinceError, setProvinceError] = useState(false)


  const handleSubmit = () => {
    let hasError = false

    if(!city){
      setCityError(true)
      hasError = true
    } else {
      setCityError(false)
    }

    if(!address){
      setAddressError(true)
      hasError = true
    } else {
      setAddressError(false)
    }

    if(!postalCode){
      setPostalCodeError(true)
      hasError = true
    } else {
      setPostalCodeError(false)
    }

    if(!province){
      setProvinceError(true)
      hasError = true
    } else {
      setProvinceError(false)
    }

    if(!hasError){
      router.replace("/consigner/dashboard")
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
        <Box component="section" sx={{ p: 2, border: '2px solid #FB8C00', borderRadius: '20px', marginTop: '20px' }} minWidth={800}>
          <ProcessBox step={steps} completion={2}/>
        </Box>

        <div className={styles.desc}>
          <div className={styles.titleContainer}>
            <div className={styles.title}>Location Information</div>
            <div className={styles.subtitle}>Basic location details</div>
          </div>
          <div className={styles.status}>
            <button className={styles.edit}><EditOutlinedIcon className={styles.editicon}/>Edit</button>
            <div className={styles.progress}>
              <div className={styles.icon}>
              { (address && postalCode && city && province) ? <CheckCircleIcon className={styles.checkicon}/> : <ErrorRoundedIcon className={styles.erricon}/> }    
              </div>
              <div className={styles.detail}>
              { (address && postalCode && city && province) ? 
                    (
                      <>
                        <p>Saved</p>
                        <p style={ {color: '#2AB930'} }>Uploaded</p>
                      </>
                    )
                    :
                    (
                      <>
                        <p>In Progress</p>
                        <p>Fill all the fields</p>
                      </>
                    ) 
                  }    
              </div>
            </div>
          </div>
        </div>

        <div className={styles.input}>
          <div className={styles.left}>
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
                <label htmlFor="">Postal Code</label>
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
                  error={postalCodeError}
                  id="outlined-basic" 
                  variant="outlined" 
                  color='warning'
                  value={postalCode}
                  onChange={(e) => setPostalCode(e.target.value)}
                  helperText={postalCodeError ? "Please enter postal code" : ""}
                  />
              </div>
              <div className={styles.rgt}>
                <label htmlFor="">City</label>
                <TextField 
                  error={cityError}
                  id="outlined-basic" 
                  variant="outlined" 
                  color='warning'
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  helperText={cityError ? "Please enter city" : ""}
                  />
              </div>
            </div>
            <div className={styles.line}>
              <div className={styles.lft}>
                <label htmlFor="">Province</label>
                <TextField 
                  error={provinceError}
                  id="outlined-basic" 
                  variant="outlined" 
                  color='warning'
                  value={province}
                  onChange={(e) => setProvince(e.target.value)}
                  helperText={provinceError ? "Please enter province" : ""}
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