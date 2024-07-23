'use client'

import styles from './contact.module.css'
import Image from 'next/image'
import Navbar from '../../../components/navbar/Navbar'
import ProcessBox from '../../../components/Auth/process/ProcessBox'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import ErrorRoundedIcon from '@mui/icons-material/ErrorRounded';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MobileVerification from '../../../components/Auth/mobileVerification/MobileVerification';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Footer from '../../../components/footer/Footer'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

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
    status: false
  },
  {
    title: 'Location',
    semTitle: 'Location Information',
    pathName: '/location_information',
    status: false
  }
];

const Contact = () => {

  const router = useRouter()

  const [verification, setVerification] = useState(false)
  const [mobile, setMobile] = useState('')
  const [mobileError, setMobileError] = useState(false)
  const [alternative, setAlternative] = useState('')
  const [alternativeError, setAlternativeError] = useState(false)

  const handleVerificationSuccess = () => {
    setVerification(true)
  }

  let mobileLen = (mobile.length == 10 && alternative.length == 10) ? true : false

  const handleNext = () => {
    let hasError = false

    if(!mobile || mobile.length != 10){
      setMobileError(true)
      hasError = true
    } else {
      setMobileError(false)
    }

    if(!alternative || alternative.length != 10){
      setAlternativeError(true)
      hasError = true
    } else {
      setAlternativeError(false)
    }

    if(!hasError){
      router.push('/location_information')
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
        <Box component="section" sx={{ p: 2, border: '2px solid #FB8C00', borderRadius: '20px', marginTop: '20px' }} minWidth={800} >
          <ProcessBox step={steps} completion={1}/>
        </Box>
        <div className={styles.desc}>
          <div className={styles.titleContainer}>
            <div className={styles.title}>Contact Information</div>
            <div className={styles.subtitle}>Basic contact details</div>
          </div>
          <div className={styles.status}>
            <button className={styles.edit}><EditOutlinedIcon className={styles.editicon}/>Edit</button>
            <div className={styles.progress}>
              <div className={styles.icon}>
              { (verification) ? <CheckCircleIcon className={styles.checkicon}/> : <ErrorRoundedIcon className={styles.erricon}/> }
              </div>
              <div className={styles.detail}>
                  { (verification ) ? 
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
          <div className={styles.business}>
            <Box
              component="form"
              sx={{
                '& .MuiTextField-root': { m: 1, width: '70%' },
              }}
              noValidate
              autoComplete="off"
            >
            <div className={styles.verify}>
              <TextField
                sx={{
                  "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
                                          display: "none",
                                        },
                "& input[type=number]": {
                                          MozAppearance: "textfield",
                                        },
                }}
                error={mobileError}
                type='number'
                color='warning'
                id="outlined-required"
                label="Mobile Number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                helperText={ mobileError ? mobile.length == 0 ? "Please enter mobile number" : mobile.length != 10 ? "Please enter valid mobile number" : "" : ""}
             />
             <MobileVerification onVerificationSuccess={handleVerificationSuccess} len={mobileLen}/>
            </div>
            <div>
              <TextField
                sx={{
                  "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
                                          display: "none",
                                        },
                "& input[type=number]": {
                                          MozAppearance: "textfield",
                                        },
                }}
                error={alternativeError}
                type='number'
                color='warning'
                id="outlined-required"
                label="Alternative Mobile Number"
                value={alternative}
                onChange={(e) => setAlternative(e.target.value)}
                helperText={ alternativeError ? alternative.length == 0 ? "Please enter alternative mobile number" : alternative.length != 10 ? "Please enter valid alternative mobile number" : "" : ""} 
             />
            </div>
            </Box>
          </div>
          <div className={styles.email}>
            <Box
                component="form"
                sx={{
                  '& .MuiTextField-root': { m: 1, width: '80%' },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  color='warning'
                  id="outlined-read-only-input"
                  label="Email"
                  defaultValue="hello@gmail.com"
                  InputProps={{
                    readOnly: true,
                  }}
                />
            </Box>
          </div>
        </div>

        <div className={styles.options}>
          <button className={styles.btn}>
            <UploadFileIcon />
            Draft
          </button>
          <Link href='/business_information'>
            <button className={styles.btn}>
              <ArrowBackIcon  />
              Back
            </button>
          </Link>
          <button className={styles.btn} onClick={handleNext}>
            Next
            <ArrowForwardIcon  />
          </button>
        </div>

        <Footer />
      </div>
    </div>
  )
}

export default Contact