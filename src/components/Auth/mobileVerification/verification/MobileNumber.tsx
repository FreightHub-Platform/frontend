'use client'

import styles from './mobileNumber.module.css'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from 'next/link';
import TextField from '@mui/material/TextField';

const MobileNumber = () => {

  const handleInput = (e) => {
    const value = e.target.value;
    if (value.length > 1) {
      e.target.value = value.slice(0, 1);
    }
  };

  return (
    <Box sx={{ minWidth: 270 }}>
      <div className={styles.container}>
        <div className={styles.title}>Please check  your number!</div>
        <div className={styles.alertCheckEmail}>
          We have sent you a 6 digit verification code to your Mobile Number. Please enter the code bellow to verify Number.
        </div>
        <div className={styles.email}>
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '100%'},
            }}
            noValidate
            autoComplete="off"
          >
            <div>
              <TextField
                required
                id="outlined-required"
                label="Mobile Number"
                defaultValue="0779876543"
              />
            </div>
          </Box>
        </div>
        <div className={styles.digitInput}>
          <input type="number" className={styles.in} maxLength={1} onInput={handleInput}/>
          <input type="number" className={styles.in} maxLength={1} onInput={handleInput}/>
          <input type="number" className={styles.in} maxLength={1} onInput={handleInput}/>
          <input type="number" className={styles.in} maxLength={1} onInput={handleInput}/>
          <input type="number" className={styles.in} maxLength={1} onInput={handleInput}/>
          <input type="number" className={styles.in} maxLength={1} onInput={handleInput}/>
        </div>
        <div className={styles.signup_button}>
          <Button variant="contained"
            sx={{width: '80%', backgroundColor: '#FB8C00', marginBottom: '10px'}}
            className={styles.btn}>Verify</Button>
        </div>
        <div className={styles.code}>
          <div className={styles.desc}>Dont have a code?</div>
          <div className={styles.resend}>Resend code</div>
        </div>
        <div className={styles.return}>
          <Link href="/register" className={styles.sign}>&lt; Return to sign up</Link>
        </div>
      </div>
    </Box>
  )
}

export default MobileNumber