"use client";
import Cookies from "js-cookie";
import styles from "./login.module.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { styled } from "@mui/material/styles";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch, { SwitchProps } from "@mui/material/Switch";
import Button from "@mui/material/Button";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import FormHelperText from "@mui/material/FormHelperText";
import { handleSignin } from "../../../utils/loginapi";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const IOSSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 44,
  height: 21,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(24px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.mode === "dark" ? "#2ECA45" : "#FB8C00",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 15,
    height: 16,
  },
  "& .MuiSwitch-track": {
    borderRadius: 22 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

const LoginBox = ({ onLinkClick }) => {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setemailError] = useState(false);
  const [password, setPassword] = useState("");
  const [strongPassword, setStrongPassword] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [emailVerification, setEmailVerification] = useState(false);
  const [emailWrong, setEmailWrong] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
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
      const strongPassword = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      if(/*!strongPassword.test(password)*/ false){
        setPasswordError(true);
        setStrongPassword(true);
        hasError = true;
      } else {
        setPasswordError(false);
        setStrongPassword(false)
      }
      
    }

    if (!hasError) {
      onLinkClick();
      handleNavigation();
      // router.push("/business_information")
    }
  };

  const handleNavigation = async () => {
    try {
      // Call handleSignin and await the result
      const userDetails = { username: email, password: password };
      const data = await handleSignin(userDetails);

      // Dissect the data
      const { completion, role, verifyStatus } = data;
      localStorage.setItem("id", data.id);
      localStorage.setItem("jwt", data.token);
      Cookies.set("jwt", data.token, { expires: 1 });


      if (role == "consigner") {
        switch (completion) {
          case 0:
            router.push("/business_information");
            break;
          case 1:
            router.push("/contact_information");
            break;
          case 2:
            router.push("/location_information");
            break;
          case 3:
            if (verifyStatus == "pending") {
              router.push("/regcomplete"); //meka hariyata hadannone
            } else if (verifyStatus == "verified") {
              router.push("consigner/orders");
              // router.push('/consigner/dashboard');
            } else {
              router.push("/rejected");
            }
            break;
        }
      } else if (role == "admin") {
        router.push("/admin/dashboard");
      } else if (role == "review_board") {
        router.push('/review/consigners');
      } else if (role == "fleet_owner") {
        // router.push('/fleet_owner/dashboard');
        console.log("fleet_owner");
      } else {
        setEmailWrong(true);
        handleClick();
        // router.push('/login');
      }
    } catch (error) {
      // Handle error case
      setEmailWrong(true);
      handleClick();
      console.error("Sign-in error:", error);
      // Optionally, show an error message to the user
    }
  };

  return (
    <div className="flex flex-col">
      <div className="border-2 border-orange-500 w-[400px] p-5 rounded-lg shadow-xl">
        <p className="text-orange-500 font-bold text-2xl mb-2 text-center">
          Sign in to Your account
        </p>
        <p className="mb-10 text-slate-500 text-lg text-center">
          Enter your email and password to sign in
        </p>
        <div className="flex flex-col gap-6">
          <TextField
            value={email}
            error={emailError}
            size="small"
            onChange={(e) => setEmail(e.target.value)}
            color="warning"
            required
            id="outlined-required"
            label="Email"
            helperText={
              emailVerification
                ? "Please enter valid email address"
                : emailError
                ? "Please enter email address"
                : ""
            }
            InputProps={{
              sx: { borderRadius: "60px" },
            }}
          />
          <FormControl sx={{ m: 0 }} variant="outlined" size="small">
            <InputLabel
              htmlFor="outlined-adornment-password"
              required
              color="warning"
            >
              Password
            </InputLabel>
            <OutlinedInput
              color="warning"
              id="outlined-adornment-password"
              error={passwordError}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type={showPassword ? "text" : "password"}
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
              sx={{ borderRadius: "60px" }}
            />
            {strongPassword ? (<FormHelperText error>Please enter a strong password.</FormHelperText>) : passwordError ? (
              <FormHelperText error>Please enter a password.</FormHelperText>
            ) : ""}
            {emailWrong && (
              <FormHelperText error>
                Incorrect email or password.
              </FormHelperText>
            )}
          </FormControl>
        </div>
        <div>
          <FormControlLabel
            control={<IOSSwitch sx={{ m: 2 }} />}
            label="Remember me"
          />
        </div>
        <div className="flex justify-center mb-3">
          <button
            className="hover:bg-orange-500 duration-400 hover:shadow-md bg-orange-400 px-6 py-2 rounded-md w-full text-white"
            onClick={handleSignIn}
          >
            SIGN IN
          </button>
        </div>
        <div className="flex gap-1 justify-center">
          <div className={styles.desc}>Don&apos;t have an account?</div>
          <Link href="/register" className={styles.sign} onClick={onLinkClick}>
            Sign up
          </Link>
        </div>
      </div>
      <div>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose} // Positioning at the top
        >
          <Alert
            onClose={handleClose}
            severity="error"
            variant="filled"
            sx={{ width: "100%" }}
          >
            Please Check Your Credentials
          </Alert>
        </Snackbar>
      </div>
    </div>
  );
};

export default LoginBox;
