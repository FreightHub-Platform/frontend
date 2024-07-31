"use client"

import styles from './login.module.css'
import Box from '@mui/material/Box';
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
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

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

const LoginBox = () => {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setemailError] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [emailVerification, setEmailVerification] = useState(false);
  const [emailWrong, setEmailWrong] = useState(false)
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleSignIn = () => {
    let hasError = false;

    if (!email) {
      setemailError(true);
      hasError = true;
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setemailError(true);
        setEmailVerification(true);
        hasError = true;
      } else {
        setemailError(false);
        setEmailVerification(false);
      }
    }

    if (!password) {
      setPasswordError(true);
      hasError = true;
    } else {
      setPasswordError(false);
    }

    if (!hasError) {
      handleClick();
      setEmailWrong(true);
      // Uncomment and adjust the following lines as needed
      // if (email === "admin@gmail.com") {
      //   router.push("/admin/dashboard");
      // } else {
      //   router.push("/business_information");
      // }
    }
  };

  return (
    <Box sx={{ minWidth: 275 }}>
      <div className={styles.container}>
        <div className={styles.title}>Sign in to Your account</div>
        <p>Enter your email and password to sign in</p>
        <div className={styles.input_feilds}>
          <TextField
            value={email}
            error={emailError}
            size="small"
            onChange={(e) => setEmail(e.target.value)}
            color='warning'
            required
            id="outlined-required"
            label="Email"
            helperText={emailVerification ? "Please enter valid email address" : emailError ? "Please enter email address" : ""}
            InputProps={{
              sx: { borderRadius: '60px' }
            }}
          />
          <FormControl sx={{ m: 0, width: '30ch' }} variant="outlined" size="small">
            <InputLabel htmlFor="outlined-adornment-password" required color='warning'>Password</InputLabel>
            <OutlinedInput 
              color='warning'
              id="outlined-adornment-password"
              error={passwordError}
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
            {emailWrong && (
              <FormHelperText error >
                Incorrect email or password.
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
            className={styles.btn} onClick={handleSignIn}>Sign in</Button>
        </div>
        <div className={styles.sign_in}>
          <div className={styles.desc}>Don't have an account?</div>
          <Link href="/register" className={styles.sign}>Sign up</Link>
        </div>
      </div>
      <div>
        <Snackbar 
          open={open} 
          autoHideDuration={6000} 
          onClose={handleClose}// Positioning at the top
        >
          <Alert
            onClose={handleClose}
            severity="error"
            variant="filled"
            sx={{ width: '100%' }}
          >
            This is a success Alert inside a Snackbar!
          </Alert>
        </Snackbar>
        
      </div>
    </Box>
  );
}

export default LoginBox;
