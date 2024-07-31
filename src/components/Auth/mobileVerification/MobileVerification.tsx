'use client'

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import styles from './mobile.module.css'
import * as React from 'react';

import MobileNumber from './verification/MobileNumber';

import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { sendMobileNumber } from '../../../utils/loginapi';
import Cookies from 'js-cookie';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'white',
  boxShadow: 24,
  borderRadius: '16px',
};

const MobileVerification = ({onVerificationSuccess, len, mobileNumber}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [success, setSuccess] = useState(false)

  function removeLeadingZero(mobileNumber: string): string {
    if (mobileNumber.startsWith('0')) {
      return mobileNumber.substring(1);
    }
    return mobileNumber;
  }

  const handleVerifyOpen = async () => {
    
    const tempMobileNumber = removeLeadingZero(mobileNumber);

    try {
      const data = await sendMobileNumber(tempMobileNumber, Cookies.get('jwt'))
      if (data) {
        handleOpen()
      }
    } catch (error) {
      console.error('Error fetching consigner data:', error);
    }
  }

  const handleverify = (value) => {
    if (value) {
      setSuccess(true)
      handleNotificationClick()
      onVerificationSuccess()
      handleClose()
    } else {
      handleNotificationClick()
    }
    
  }

  const [openNotification, setNotificationOpen] = useState(false);

  const handleNotificationClick = () => {
    setNotificationOpen(true);
  };

  const handleNotificationClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setNotificationOpen(false);
  };

  return (
    <div>
      <Button disabled={!len} onClick={handleVerifyOpen} className={styles.hoverButton}>Verify</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
        <Box sx={style}>
          <MobileNumber Verification={handleverify} mNumber={mobileNumber} />
        </Box>
      </Modal>

      <Snackbar open={openNotification} autoHideDuration={4000} onClose={handleNotificationClose}>
        <Alert
          onClose={handleNotificationClose}
          severity={success ? 'success' : 'error'}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {success ? 'Mobile verification success!' : 'Mobile verification failed, Please try again!'}
          
        </Alert>
      </Snackbar>
      
    </div>
  );
}

export default MobileVerification