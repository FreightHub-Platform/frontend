'use client'

import styles from './process.module.css'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { useState } from 'react';
import { usePathname } from 'next/navigation';


const ProcessBox = () => {

  const path = usePathname();

  const [business, setBusiness] = useState(false);
  const [contact, setcontact] = useState(true);
  const [location, setlocation] = useState(false);

  const steps = [
    {
      title: 'Business',
      semTitle: 'Business Information',
      pathName: '/business_information',
      status: business
    },
    {
      title: 'Contact',
      semTitle: 'Contact Information',
      pathName: '/contact_information',
      status: contact
    },
    {
      title: 'Location',
      semTitle: 'Location Information',
      pathName: '/location_information',
      status: location
    }
  ];

  return (
    <div className={styles.container}>
      <Box sx={{ width: '100%' }}>
        <Stepper activeStep={1} alternativeLabel>
          {steps.map((label) => (
            <Step key={label.title}>
              <StepLabel>{label.title}</StepLabel>
              <div className={styles.information} style={{marginLeft: '7vw', marginTop: '5px', marginBottom: '10px'}}>{label.semTitle}</div>
              <div className={styles.status} style={{
                border: `1px solid ${label.pathName === path ? 'orange' : label.status ? 'rgb(3, 189, 3)' : 'rgb(199, 199, 199)'}`,
                padding: '5px',
                borderRadius: '8px',
                color: label.pathName === path ? 'orange' : label.status ? 'rgb(3, 189, 3)' : 'rgb(199, 199, 199)',
                display: 'inline-block',
                marginLeft: '7vw',
                fontSize: '12px'
              }}>
                {
                  label.pathName === path ? 'In Process' : label.status ? 'Completed' : 'Pending'
                }
              </div>
            </Step>  
          ))}
        </Stepper>
      </Box>
    </div>
  )
}

export default ProcessBox