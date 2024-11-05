'use client'

import Cookies from 'js-cookie'
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
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Footer from '../../../components/footer/Footer';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useRouter } from 'next/navigation'
import { updateLocation } from '../../../utils/loginapi'
import { getConsignerById } from '../../../utils/consigner'
import LinearProgress from '@mui/material/LinearProgress';


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

  const [address1, setAddress1] = useState('')
  const [address2, setAddress2] = useState('')
  const [postalCode, setPostalCode] = useState('')
  const [city, setCity] = useState('')
  const [province, setProvince] = useState('')

  const [address1Error, setAddress1Error] = useState(false)
  const [address2Error, setAddress2Error] = useState(false)
  const [postalCodeError, setPostalCodeError] = useState(false)
  const [cityError, setCityError] = useState(false)
  const [provinceError, setProvinceError] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchConsignerData = async () => {
      
      const consigner = {"id": localStorage.getItem("id")}
      try {
        const data = await getConsignerById(consigner, localStorage.getItem('jwt'));
        if (data && data.addressLine1 && data.addressLine2 && data.city && data.province && data.postalCode) {
          setAddress1(data.addressLine1);
          setAddress2(data.addressLine2);
          setCity(data.city);
          setProvince(data.province);
          setPostalCode(data.postalCode);
        }
      } catch (error) {
        console.error('Error fetching consigner data:', error);
      }
    };

    fetchConsignerData();
  }, []);


  const handleSubmit = async () => {
    let hasError = false

    if(!city){
      setCityError(true)
      hasError = true
    } else {
      setCityError(false)
    }

    if(!address1){
      setAddress1Error(true)
      hasError = true
    } else {
      setAddress1Error(false)
    }

    if(!address2){
      setAddress2Error(true)
      hasError = true
    } else {
      setAddress2Error(false)
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

      setLoading(true)

      const locationInformation = {
        "id": localStorage.getItem("id"),
        "addressLine1": address1,
        "addressLine2": address2,
        "city": city,
        "province": province,
        "postalCode": postalCode
      }

      const data = await updateLocation(locationInformation, localStorage.getItem('jwt'));

      if (data) {
        router.push('/consigner/regcomplete') // have to create this page
      } else {
        alert("Something is wrong");
      }

    }
  }

  return (
    <div className={styles.container}>
      {
        loading ? 
          <Box sx={{ width: '100%', position: 'fixed', top: 0, left: 0, zIndex: 1000 }}>
            <LinearProgress  color='warning'/>
          </Box>
        : null
      }
      
      <div className={styles.top}>
        <Navbar onLinkClick={() => setLoading(true)}/>
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
              { (address1 && address2 && postalCode && city && province) ? <CheckCircleIcon className={styles.checkicon}/> : <ErrorRoundedIcon className={styles.erricon}/> }    
              </div>
              <div className={styles.detail}>
              { (address1 && address2 && postalCode && city && province) ? 
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
            {/* <div className={styles.textField}>
              <label htmlFor="">Billing address</label>
              <TextField
                error={addressError}
                id="outlined-multiline-static"
                multiline
                rows={4}
                placeholder="Address"
                color='warning'
                value={address}
                onChange={e => setAddress(e.tarf.value)}
                helperText={addressError ? "Please enter address" : ""}
                sx={{width: '100%'}}
              />
            </div> */}
            <div className={styles.line}>
              <div className={styles.lft}>
                <label htmlFor="">Address Line 1</label>
                <TextField 
                  sx={{
                    "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
                                            display: "none",
                                          },
                  "& input[type=number]": {
                                            MozAppearance: "textfield",
                                          },
                  }}
                  type='string'
                  error={address1Error}
                  id="outlined-basic" 
                  variant="outlined" 
                  color='warning'
                  value={address1}
                  onChange={(e) => setAddress1(e.target.value)}
                  helperText={address1Error ? "Please enter address" : ""}
                  />
              </div>
              <div className={styles.rgt}>
                <label htmlFor="">Address Line 2</label>
                <TextField 
                  error={address2Error}
                  id="outlined-basic" 
                  variant="outlined" 
                  color='warning'
                  value={address2}
                  onChange={(e) => setAddress2(e.target.value)}
                  helperText={address2Error ? "Please enter address" : ""}
                  />
              </div>
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

        </div>

        <div className={styles.options}>
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