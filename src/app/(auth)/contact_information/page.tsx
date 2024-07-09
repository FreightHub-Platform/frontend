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

const status = {
  stepCompletion: 1,
  business: true,
  contact: false,
  location: false
}

const Contact = () => {

  const router = useRouter()

  const [mobile, setMobile] = useState('')
  const [mobileError, setMobileError] = useState(false)
  const [aternative, setAlternative] = useState('')
  const [alternativeError, setAlternativeError] = useState(false)

  const handleNext = () => {
    let hasError = false

    if(!mobile){
      setMobileError(true)
      hasError = true
    } else {
      setMobileError(false)
    }

    if(!aternative){
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
        <ProcessBox step={status}/>

        <div className={styles.desc}>
          <div className={styles.titleContainer}>
            <div className={styles.title}>Contact Information</div>
            <div className={styles.subtitle}>Basic contact details</div>
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
                error={mobileError}
                color='warning'
                id="outlined-required"
                label="Mobile Number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                helperText={mobileError ? "Please enter mobile number" : ""}
             />
             <MobileVerification />
            </div>
            <div>
              <TextField
                error={alternativeError}
                color='warning'
                id="outlined-required"
                label="Alternative Mobile Number"
                value={aternative}
                onChange={(e) => setAlternative(e.target.value)}
                helperText={alternativeError ? "Please enter alternative mobile number" : ""}
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