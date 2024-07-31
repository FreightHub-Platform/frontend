'use client'

import styles from './mobileNumber.module.css'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from 'next/link';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { verifyMobileNumber } from '../../../../utils/loginapi';
import Cookies from 'js-cookie';


const MobileNumber = ({Verification, mNumber}) => {

  const [inputs, setInputs] = useState(Array(5).fill(''));

  const handleInput = (index, e) => {
    const value = e.target.value;
    if (value.length > 1) {
      e.target.value = value.slice(0, 1);
    }
    const newInputs = [...inputs];
    newInputs[index] = e.target.value;
    setInputs(newInputs);
  };

  function removeLeadingZero(mobileNumber: string): string {
    if (mobileNumber.startsWith('0')) {
      return mobileNumber.substring(1);
    }
    return mobileNumber;
  }

  const handleSubmit = async () => {

    const tempMnumber = removeLeadingZero(mNumber);
    
    const enteredCode = inputs.join('');
    const value = await verifyMobileNumber(tempMnumber, enteredCode,  Cookies.get('jwt'))
    console.log(value)
    if (value) {
      Verification(true);
    } else {
      Verification(false);
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
                defaultValue={mNumber}
              />
            </div>
          </Box>
        </div>
        <div className={styles.digitInput}>
        {inputs.map((input, index) => (
          <input
            key={index}
            type="number"
            className={styles.in}
            maxLength={1}
            value={input}
            onInput={(e) => handleInput(index, e)}
          />
        ))}
        </div>
        <div className={styles.signup_button}>
          <Button variant="contained"
            sx={{width: '80%', backgroundColor: '#FB8C00', marginBottom: '10px'}}
            className={styles.btn} onClick={handleSubmit}>Verify</Button>
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