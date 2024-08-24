"use client";

import Box from '@mui/material/Box';
import styles from './register.module.css';
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
import { useRouter } from 'next/navigation';
import FormHelperText from '@mui/material/FormHelperText';
import { handleSignup } from '../../../utils/regapi';
import { UserRole } from '../../../utils/interfaces/signIn_signUp';

const IOSSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />))
  (({ theme }) => ({
    width: 44,
    height: 21,
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

  const router = useRouter()

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowConfirmPassword = () => setShowConfirmPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

 
  const [email, setEmail] = useState("");
  const [emailError, setemailError] = useState(false);
  const [emailVerfication, setEmailVerfication] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setpasswordError] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setconfirmPasswordError] = useState(false);
  const [passwordMissMatch, setPasswordMissMatch] = useState(false);


  const handleNavigation = async () => {
    const userDetails = {
      "username": email,
      "password": password,
      "role": UserRole.Consigner
    }
    const data = await handleSignup(userDetails);
    if(data){
      router.push("/login")
    } else {
      alert("Email Exists")
    }
  }

  const handleSignupButton =() => {
    let hasError = false;

    // if(!userName){
    //   setuserNameError(true);
    //   hasError = true;
    // } else {
    //   setuserNameError(false);
    // }

    if(!email) {
      setemailError(true)
      hasError = true
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if(!(emailRegex.test(email))){
        setemailError(true)
        setEmailVerfication(true)
        hasError = true
      } else {
        setemailError(false)
        setEmailVerfication(false)
      }
    }

    if(!password){
      setpasswordError(true)
      hasError = true
    } else {
      setpasswordError(false)
    }

    if(!confirmPassword){
      setconfirmPasswordError(true)
      hasError = true
    } else {
      setconfirmPasswordError(false)
    }

    if(password === confirmPassword){
      setPasswordMissMatch(false)
    } else {
      setPasswordMissMatch(true)
      hasError = true
    }

    if(!hasError){
      handleNavigation()
    }
  }

  return (
    <Box sx={{ minWidth: 275 }}>
      <div className={styles.container}>
        <div className={styles.title}>Register</div>

        <div className={styles.input_feilds}>
          {/* <TextField
            color='warning'
            error={userNameError}
            required
            id="outlined-required"
            label="Username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            size="small"
            helperText={userNameError ? "Please enter user name" : ""}
            InputProps={{
              sx: { borderRadius: '60px'}
            }}
          /> */}
          <TextField
            color='warning'
            required
            error={emailError}
            type='email'
            id="outlined-required"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            size="small"
            helperText={emailVerfication ? "Please enter valid email address" : emailError ? "Please enter email address" : ""}
            InputProps={{
              sx: { borderRadius: '60px'}
            }}
          />
          <FormControl sx={{ m: 0, width: '30ch' }} variant="outlined" size="small">
            <InputLabel htmlFor="outlined-adornment-password" required color='warning'>Password</InputLabel>
            <OutlinedInput 
              color='warning'
              id="outlined-adornment-password"
              error={passwordError || passwordMissMatch}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
            {passwordError && (
              <FormHelperText error >
                Please enter a password.
              </FormHelperText>
            )}
            {passwordMissMatch && !passwordError && (
              <FormHelperText error>
                Passwords do not match.
              </FormHelperText>
            )}
          </FormControl>
          <FormControl sx={{ m: 0, width: '30ch' }} variant="outlined" size="small">
            <InputLabel htmlFor="outlined-adornment-confirm-password" required color='warning'>Confirm Password</InputLabel>
            <OutlinedInput
              color='warning'
              id="outlined-adornment-confirm-password"
              error={confirmPasswordError || passwordMissMatch}
              type={showConfirmPassword ? 'text' : 'password'}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
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
            {confirmPasswordError && (
              <FormHelperText error >
                Please confirm your password.
              </FormHelperText>
            )}
            {passwordMissMatch && !confirmPasswordError && (
              <FormHelperText error>
                Passwords do not match.
              </FormHelperText>
            )}
          </FormControl>
        </div>

        <div className={styles.remember_me}>
          <FormControlLabel
            control={<IOSSwitch sx={{ m: 2 }} />}
            label="Remember me"
          />
        </div>

        <div className={styles.signup_button}>
          <Button variant="contained"
            sx={{width: '100%', backgroundColor: '#FB8C00', marginBottom: '10px'}}
            className='hover:bg-orange-500 duration-400' onClick={handleSignupButton}>Sign up</Button>
        </div>

        <div className={styles.sign_in}>
          <div className={styles.desc}>Already have an account?</div>
          <Link href="/login" className={styles.sign}>Sign In</Link>
        </div>
      </div>
    </Box>
  )
}

export default RegisterBox;
