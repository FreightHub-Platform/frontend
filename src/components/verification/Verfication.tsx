"use client"

import styles from './verification.module.css'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from 'next/link';


const Verification = () => {


  return (
    <Box sx={{ minWidth: 275 }}>
      <div className={styles.container}>
        <div className={styles.title}>Please check  your email!</div>
        <div className={styles.detail}> 
          We have sent you a 6 digit verification code to your email address. Please enter the code bellow to verify email.  
        </div>
        <div className={styles.input_feilds}>
          <input type="number" />
          <input type="number" />
          <input type="number" />
          <input type="number" />
          <input type="number" />
          <input type="number" />
        </div>
        
        <div className={styles.signup_button}>
          <Button variant="contained"
            sx={{width: '90%', backgroundColor: '#FB8C00', marginBottom: '10px'}}
            className={styles.btn}>Verify</Button>
        </div>
        <div className={styles.sign_in}>
          <div className={styles.desc}>Don't have an code?</div>
          <Link href="" className={styles.sign}>Resend code</Link>
        </div>

        <div className={styles.returnToSignUp}>
          <Link href="/register">&lt; Return to sign up</Link>
        </div>
      </div>
    </Box>
  )
}
export default Verification