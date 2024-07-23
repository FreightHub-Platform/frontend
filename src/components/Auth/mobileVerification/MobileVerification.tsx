'use client'

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import MobileNumber from './verification/MobileNumber';
import styles from './mobile.module.css'



const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'white',
  boxShadow: 24,
  borderRadius: '16px',
};

const MobileVerification = ({onVerificationSuccess, len}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleverify = () => {
    onVerificationSuccess()
  }

  return (
    <div>
      <Button disabled={!len} onClick={handleOpen} className={styles.hoverButton}>Verify</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
        <Box sx={style}>
          <MobileNumber succesVerification={handleverify}/>
        </Box>
      </Modal>
    </div>
  );
}

export default MobileVerification