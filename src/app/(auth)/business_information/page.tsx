'use client'

import Cookies from 'js-cookie';
import Image from 'next/image'
import styles from './business.module.css'
import Navbar from '../../../components/navbar/Navbar'
import ProcessBox from '../../../components/Auth/process/ProcessBox'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import ErrorRoundedIcon from '@mui/icons-material/ErrorRounded';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import { useRef, useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Footer from '../../../components/footer/Footer'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { updateBusiness } from '../../../utils/loginapi'
import { getConsignerById } from '../../../utils/consigner'
import { divider } from '@nextui-org/theme';
import LinearProgress from '@mui/material/LinearProgress';

  const steps = [
    {
      title: 'Business',
      semTitle: 'Business Information',
      pathName: '/business_information',
      status: false
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


const Business = () => {


  const [businessName, setBusinessName] = useState('');
  const [businessError, setBusinessError] = useState(false);
  const [registrationNo, setRegistrationNo] = useState('');
  const [registrationError, setregistrationError] = useState(false);
  const [logo, setLogo] = useState(null);
  const [logoError, setLogoError] = useState(false);
  const [regDocument, setRegDocument] = useState('');
  const [regDocumentError, setRegDocumentError] = useState(false);
  const [fileUrl, setFileUrl] = useState('')
  const fileInputRef = useRef(null);
  const [loading, setLoading] = useState(false)

  const router = useRouter();

  useEffect(() => {
    const fetchConsignerData = async () => {
      const consigner = {"id": localStorage.getItem("id")}
      console.log(consigner)
      try {
        const data = await getConsignerById(consigner, localStorage.getItem('jwt'));
        console.log(data.businessName)
        if (data && data.businessName && data.brn) {
          setBusinessName(data.businessName);
          setRegistrationNo(data.brn);
  
          // Handle the logo URL
          if (data.logo) {
            setLogo(data.logo); // Set the URL to the state
          }
        }
      } catch (error) {
        console.error('Error fetching consigner data:', error);
      }
    };
  
    fetchConsignerData();
  }, []);
  


  const handleLogoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogo(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  // const handleFileChange = (event) => {
  //   const file = event.target.files[0];
  //   setRegDocument(file);
  //   setFileUrl(URL.createObjectURL(file))
  // }

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setRegDocument(file);
    setFileUrl(URL.createObjectURL(file));
  
    const reader = new FileReader();
    reader.onloadend = () => {
      if (typeof reader.result === 'string') {
        const base64String = reader.result.split(',')[1]; // Extract base64 part
        setRegDocument(base64String); // Save the base64 string in state
      }
    };
    reader.readAsDataURL(file);
  };
  

  const handleNext = async () => {

    let hasError = false;

    if(!businessName){
      setBusinessError(true);
      hasError = true
    } else {
      setBusinessError(false);
    }

    if(!registrationNo){
      setregistrationError(true);
      hasError = true
    } else {
      setregistrationError(false);
    }

    if(!regDocument){
      setRegDocumentError(true);
      hasError = true
    } else {
      setRegDocumentError(false);
    }

    if(!logo){
      setLogoError(true);
      hasError = true
    } else {
      setLogoError(false);
    }

    if(!hasError){
      setLoading(true)
      console.log(logo)
      
      const businessInformation = {
        "id": localStorage.getItem("id"),
        "businessName": businessName,
        "brn": registrationNo,
        "logo": logo,
        "regDoc": regDocument  // base64 string from file
      };
      try {
        const data = await updateBusiness(businessInformation, Cookies.get('jwt'));

        if(data){
          router.push('/contact_information')
        } else {
          alert("brn already exist")
        }
      } catch (error) {
        console.error('Error:', error);
      }
      
    }
  }

  


  return (
    <div className={styles.container}>
      {
        loading ? 
          <Box sx={{ width: '100%', position: 'fixed', top: 0, left: 0, zIndex: 1000 }}>
            <LinearProgress color='warning'/>
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
          <ProcessBox step={steps} completion={0}/>
        </Box>

        <div className={styles.desc}>
          <div className={styles.titleContainer}>
            <div className={styles.title}>Business Information</div>
            <div className={styles.subtitle}>Basic business details</div>
          </div>
          <div className={styles.status}>
            <button className={styles.edit}><EditOutlinedIcon className={styles.editicon}/>Edit</button>
            <div className={styles.progress}>
              <div className={styles.icon}>
                { (businessName && registrationNo && logo) ? <CheckCircleIcon className={styles.checkicon}/> : <ErrorRoundedIcon className={styles.erricon}/> }    
              </div>
              <div className={styles.detail}>
                  { (businessName && registrationNo && logo) ? 
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
                '& .MuiTextField-root': { m: 1, width: '50%' },
              }}
              noValidate
              autoComplete="off"
            >
              <div>
                <TextField
                  error={businessError}
                  id="outlined-required"
                  label="Enter Your Business name:"
                  color='warning'
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  helperText={businessError ? "Please enter your business name" : ""}
              />
              </div>
              <div>
                <TextField
                  error={registrationError}
                  id="outlined-required"
                  label="Your Business Registration No:"
                  color='warning'
                  value={registrationNo}
                  onChange={(e) => setRegistrationNo(e.target.value)}
                  helperText={registrationError ? "Please enter your business ragistration number" : ""}
              />
              </div>

              <div className='flex gap-4 mt-2 text-gray-600 items-center'>
                <div className='ms-6'>Registration Document</div>
                <input type="file" accept="application/pdf" className='text-sm' onChange={handleFileChange}/> 
                <div className={fileUrl ? 'border-1 p-2 border-black hover:border-2' : null}>
                  <a href={fileUrl} target="_blank" rel="noopener noreferrer" className='flex text-sm items-center'>
                    <div>{regDocument ? <Image src="/images/pdf.svg" width={30} height={30} alt=''/> : null}</div>
                  </a>
                </div>
                <div className='text-sm text-red-600'>
                  {regDocumentError ? "Please select the registration document" : ""}
                </div> 
              </div>
            </Box>
          </div>
          <div className={styles.upload}>
            <div className={styles.head}>UPLOAD YOUR COMPANY LOGO</div>
            <div className={styles.logoInput} onClick={handleImageClick}>
              <input
                type="file"
                id="logo-upload"
                accept="image/*"
                className={styles.logo}
                onChange={handleLogoChange}
                ref={fileInputRef}
              />
              {!logo && (
                <div className={styles.logoLabel}>+</div>
              )}
              {logo && (
                <img src={logo} alt="Company Logo" className={styles.previewImage} />
              )}
            </div>
            <div className={styles.logoerr}>
              {logoError ? "Please input company logo" : ""}
            </div>
          </div>
        </div>

        <div className={styles.options}>
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

export default Business