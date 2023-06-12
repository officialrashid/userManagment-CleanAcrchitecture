import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import { useDispatch, useSelector } from "react-redux";
import { setLoginEmail, setLoginPassword } from "../../redux-toolkit/loginReducers";
import { isUser,addUserInfo } from "../../redux-toolkit/registerReducers";
import { useNavigate } from "react-router-dom";
import axios from "../../axios/axios";
import React, { useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [errors, setErrors] = useState({}); // Move this line inside the component

  const body = useSelector((state) => state.login);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("login handle called");
      axios.post("/api/v1/user/login", body).then((response) => {
        console.log(response.data, "9999999999");
        if (response.data.status==true) {
          
          localStorage.setItem('userAccessToken', response?.data?.accessToken)
          localStorage.setItem('userRefreshToken', response?.data?.refreshToken)
          dispatch(isUser(response?.data?.accessToken))
          dispatch(addUserInfo(response?.data?.userInfo))
            toast.success('Login successful!');
          navigate("/home");
        } else {
            toast.error('Incorrect Email or password check it!');
          navigate("/login");
        }
      });
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!body.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(body.email)) {
      newErrors.email = "Email is invalid";
      isValid = false;
    }

    if (!body.password.trim()) {
      newErrors.password = "Password is required";
      isValid = false;
    } else if (body.password.length < 6) {
      newErrors.password = "Password should be at least 6 characters long";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };


    return (
        <Container component="main" maxWidth="md"   >
            <Box
                sx={{
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Box
                    component="img"
                    sx={{
                        height: 233,
                        width: 350, marginLeft: 80,
                        maxHeight: { xs: 233, md: 167 },
                        maxWidth: { xs: 350, md: 250 },
                    }}
                    alt=""
                    src="https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/login-register/img-4.svg"
                />
                <Typography component="h1" variant="h5" sx={{ fontSize: 12, fontWeight: 500, color: "blue", marginBottom: 4 }}>
                    Welcome back!
                </Typography>
                <Typography component="h1" variant="h5" sx={{ fontSize: 24, fontWeight: 1000 }}>
                    Member login
                </Typography>
               
                <Divider >Or Continue with</Divider>
                <Box component="form" sx={{ paddingLeft: 20 }} onSubmit={handleLoginSubmit}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        
                        sx={{ width: "70%" }}
                        onChange={(e) => dispatch(setLoginEmail(e.target.value))}
                        error={!!errors.email}
                        helperText={errors.email}
                    />

                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                     
                        sx={{ width: "70%" }}
                        onChange={(e) => dispatch(setLoginPassword(e.target.value)) }
                        error={!!errors.password}
                        helperText={errors.password}
                    />

                    <Button type="submit" fullWidth variant="contained" sx={{ mt: 5, mb: 2, height: 60, width: "70%", backgroundColor: '#131392' }}  >
                        Login
                    </Button>
                    <Grid container justifyContent="space-around"
                        alignItems="center">

                        <Link href="" variant="body2" sx={{marginLeft:-18}} onClick={()=> navigate('/')} >
                            {"Don't have an account? Sign Up"}
                        </Link>

                    </Grid>
                </Box>
            </Box>
            <Box
                component="img"
                sx={{
                    height: 250,
                    width: 350,
                    maxHeight: { xs: 250, md: 167 },
                    maxWidth: { xs: 350, md: 250 },
                }}
                alt=""
                src="https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/login-register/img-3.svg"
            />
         

        </Container>
    );
}