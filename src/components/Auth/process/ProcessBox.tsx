'use client'

import styles from './process.module.css'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { usePathname } from 'next/navigation';
import { styled } from '@mui/material/styles';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { StepIconProps } from '@mui/material/StepIcon';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    left: 'calc(-50% + 16px)',
    right: 'calc(50% + 16px)',
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: '#34C759',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: '#34C759',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderTopWidth: 3,
    borderRadius: 1,
  },
}));

const QontoStepIconRoot = styled('div')<{ ownerState: { active?: boolean } }>(
  ({ theme, ownerState }) => ({
    color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#eaeaf0',
    display: 'flex',
    height: 22,
    alignItems: 'center',
    ...(ownerState.active && {
      color: '#FB8C00',
    }),
    '& .QontoStepIcon-completedIcon': {
      color: '#34C759',
      zIndex: 1,
      fontSize: 30,
    },
    '& .QontoStepIcon-circle': {
      width: 25,
      height: 25,
      borderRadius: '50%',
      backgroundColor: 'currentColor',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  }),
);

function QontoStepIcon(props: StepIconProps & { stepNumber: number }) {
  const { active, completed, className, stepNumber } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <CheckCircleIcon className="QontoStepIcon-completedIcon" />
      ) : (
        <div className="QontoStepIcon-circle">
          <span style={{ color: '#fff', fontSize: '13px' }}>{stepNumber}</span>
        </div>
      )}
    </QontoStepIconRoot>
  );
}


const ProcessBox = ({ step, completion }) => {
  const path = usePathname();

  return (
    <div className={styles.container}>
      <Box sx={{ width: '100%' }}>
        <Stepper activeStep={completion} alternativeLabel connector={<QontoConnector />}>
          {step.map((label, index) => (
            <Step key={label.title}>
              <StepLabel StepIconComponent={(props) => <QontoStepIcon {...props} stepNumber={index + 1} />}>
                {label.title}
                <div className={styles.information} style={{ marginTop: '5px', marginBottom: '10px' }}>{label.semTitle}</div>
                <div className={styles.status} style={{
                  border: `1px solid ${label.pathName === path ? 'orange' : label.status ? 'rgb(3, 189, 3)' : 'rgb(199, 199, 199)'}`,
                  padding: '5px',
                  borderRadius: '8px',
                  color: label.pathName === path ? 'orange' : label.status ? 'rgb(3, 189, 3)' : 'rgb(199, 199, 199)',
                  display: 'inline-block',
                  fontSize: '12px'
                }}>
                  {label.pathName === path ? 'In Process' : label.status ? 'Completed' : 'Pending'}
                </div>
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
    </div>
  );
}

export default ProcessBox