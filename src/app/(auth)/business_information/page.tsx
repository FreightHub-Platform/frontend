import Image from 'next/image'
import styles from './business.module.css'
import Navbar from '../../../components/navbar/Navbar'
import ProcessBox from '../../../components/Auth/process/ProcessBox'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import OfflinePinRoundedIcon from '@mui/icons-material/OfflinePinRounded';
import ErrorRoundedIcon from '@mui/icons-material/ErrorRounded';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Business = () => {


  

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Navbar />
        <div className={styles.imageContainer}>
          <Image src='/images/image.png' alt='' fill className={styles.img}/>
        </div>
      </div>
      <div className={styles.bottom}>
        <ProcessBox />

        <div className={styles.desc}>
          <div className={styles.titleContainer}>
            <div className={styles.title}>Business Information</div>
            <div className={styles.subtitle}>Basic business details</div>
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
                '& .MuiTextField-root': { m: 1, width: '50%' },
              }}
              noValidate
              autoComplete="off"
            >
            <div>
              <TextField
                required
                id="outlined-required"
                label="Enter Your Business name:"
                InputProps={{
                  sx: { width: '100%' }
                }}
             />
            </div>
            <div>
              <TextField
                required
                id="outlined-required"
                label="Your Business Registration No:"
             />
            </div>
            </Box>
          </div>
          <div className={styles.upload}>
            <div className={styles.head}>UPLOAD YOUR COMPANY LOGO</div>
            <div className={styles.logoInput}>
              <input
                  type="file"
                  id="logo-upload"
                  accept="image/*"
                  style={{ display: 'none' }}
                />
            </div>
          </div>
        </div>

        <div className={styles.options}>
          <button className={styles.btn}>Draft</button>
          <button className={styles.btn}>Next</button>
        </div>
      </div>
    </div>
  )
}

export default Business