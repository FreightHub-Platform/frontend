"use client"

import Box from '@mui/material/Box';
import styles from './register.module.css';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import AppleIcon from '@mui/icons-material/Apple';
import GoogleIcon from '@mui/icons-material/Google';
import TextField from '@mui/material/TextField';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { styled } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch, { SwitchProps } from '@mui/material/Switch';
import Button from '@mui/material/Button';
import { useState } from 'react';
import Link from 'next/link';

const IOSSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />))
  (({ theme }) => ({
    width: 44,
    height: 22,
    padding: 0,
    '& .MuiSwitch-switchBase': {
      padding: 0,
      margin: 2,
      transitionDuration: '300ms',
      '&.Mui-checked': {
        transform: 'translateX(24px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#FB8C00',
          opacity: 1,
          border: 0,
        },
        '&.Mui-disabled + .MuiSwitch-track': {
          opacity: 0.5,
        },
      },
      '&.Mui-focusVisible .MuiSwitch-thumb': {
        color: '#33cf4d',
        border: '6px solid #fff',
      },
      '&.Mui-disabled .MuiSwitch-thumb': {
        color:
          theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[600],
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
      },
    },
    '& .MuiSwitch-thumb': {
      boxSizing: 'border-box',
      width: 15,
      height: 16,
    },
    '& .MuiSwitch-track': {
      borderRadius: 22 / 2,
      backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
      opacity: 1,
      transition: theme.transitions.create(['background-color'], {
        duration: 500,
      }),
    },
}));


const RegisterBox = () => {


  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowConfirmPassword = () => setShowConfirmPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };


  return (
    <Box sx={{ minWidth: 275 }}>
      <div className={styles.container}>
        <div className={styles.title}>Register with</div>
        <div className={styles.icons}>
          <div className={styles.icon}>
            <FacebookRoundedIcon />
          </div>
          <div className={styles.icon}>
            <AppleIcon />
          </div>
          <div className={styles.icon}>
            <GoogleIcon />
          </div>
           
        </div>
        <p>or</p>
        <div className={styles.input_feilds}>
          <TextField
            required
            id="outlined-required"
            label="Username"
            size="small"
            InputProps={{
              sx: { borderRadius: '60px' }
            }}
          />
          <TextField
            required
            id="outlined-required"
            label="Email"
            size="small"
            InputProps={{
              sx: { borderRadius: '60px' }
            }}
          />
           <FormControl sx={{ m: 0, width: '30ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password *</InputLabel>
          <OutlinedInput
            required
            size="small"
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
            sx={{ borderRadius: '60px' }}
          />
        </FormControl>
        <FormControl sx={{ m: 0, width: '30ch' }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-confirm-password" >Confirm Password *</InputLabel>
        <OutlinedInput
          required
          size="small"
          id="outlined-adornment-confirm-password"
          type={showConfirmPassword ? 'text' : 'password'}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle confirm password visibility"
                onClick={handleClickShowConfirmPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Confirm Password"
          sx={{ borderRadius: '60px' }}
        />
      </FormControl>
        </div>
        <div className={styles.remember_me}>
          <FormControlLabel
          control={<IOSSwitch sx={{ m: 2 }} defaultChecked />}
          label="Remember me"
          />
        </div>
        <div className={styles.signup_button}>
          <Button variant="contained"
            sx={{width: '100%', backgroundColor: '#FB8C00', marginBottom: '10px'}}
            className={styles.btn}>Sign up</Button>
        </div>
        <div className={styles.sign_in}>
          <div className={styles.desc}>Already have an account?</div>
          <Link href="/login" className={styles.sign}>Sign In</Link>
        </div>
      </div>
    </Box>
  )
}

export default RegisterBox