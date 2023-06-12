import React,{useState} from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import {useDispatch,useSelector} from 'react-redux'
import {adminAddUserName,adminAddUserEmail,adminAddUserPhone,
  adminAddUserPassword,adminAddUserConfirmPassword} from '../../redux-toolkit/adminAddUserReducer'
  import axios from "../../axios/axios";
  import {useNavigate} from 'react-router-dom'
  import {
    isUser,
    addUserInfo,
  } from "../../redux-toolkit/registerReducers";
  import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function adminAddUser() {
  const [errors, setErrors] = useState({}); 
  const navigate = useNavigate()
  const body = useSelector((state) => state.adminAddUser)
  const dispatch = useDispatch()
 const handleAdminAddUser = (e) =>{
     
  e.preventDefault()
  if(validateForm()){
    console.log('admin add user calling');
    axios.post('/api/v1/admin/adminAddUser',body).then((response)=>{
        console.log(response,"admin add dataaaaaaa");
        if (response?.data?.status === true) {
          localStorage.setItem('userAccessToken', response?.data?.accessToken)
          localStorage.setItem('userRefreshToken', response?.data?.refreshToken)
          dispatch(isUser(response?.data?.accessToken))
          dispatch(addUserInfo(response?.data?.userInfo))
          toast.success('Registration successful!');
          navigate('/adminHome')
        }else if(response?.data?.message === 'Email already exists'){
          toast.warn('email already exists!please try another email')
        } 
        
      
    })
  }

 }
 const validateForm = () => {
  let isValid = true;
  const newErrors = {};

  if (!body.name.trim()) {
    newErrors.name = "Name is required";
    isValid = false;
  }

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

  if (!body.confirmPassword.trim()) {
    newErrors.confirmPassword = "Confirm Password is required";
    isValid = false;
  } else if (body.confirmPassword !== body.password) {
    newErrors.confirmPassword = "Passwords do not match";
    isValid = false;
  }

  if (!body.phone.trim()) {
    newErrors.phone = "Phone is required";
    isValid = false;
  } else if (!/^\d{10}$/.test(body.phone)) {
    newErrors.phone = "Phone is invalid";
    isValid = false;
  }

  setErrors(newErrors);
  return isValid;
};
  return (
    <div>
         <Container component="main" maxWidth="md">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginLeft: 10,
            
          }}
        >
          <Box
            component="img"
            sx={{
              height: 233,
              width: 350,
              marginLeft: 80,
              maxHeight: { xs: 233, md: 167 },
              maxWidth: { xs: 350, md: 250 },
            }}
            alt=""
            src="https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/login-register/img-4.svg"
          />
          <Typography
            variant="h1"
            component="h5"
            sx={{
              fontSize: 16,
              fontWeight: 500,
              color: "blue",
              alignItems: "center",
              textAlign: "center",
              marginRight: 10,
            }}
          >
            welcom
          </Typography>

          <Typography
            variant="h1"
            component="h"
            sx={{
              fontSize: 30,
              fontWeight: 400,
              color: "#05264e",
              alignItems: "center",
              marginTop: 2,
              marginRight: 10,
            }}
          >
            ADD USER
          </Typography>
          <Divider sx={{ marginRight: 10 }}>Or Continue with</Divider>
          <Box component="form" sx={{ paddingLeft: 20 }} onSubmit={handleAdminAddUser}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoComplete="name"
              autoFocus
              sx={{ width: "60%" }}
              onChange={(e)=>dispatch(adminAddUserName(e.target.value))}
              error={!!errors.name}
              helperText={errors.name}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              sx={{ width: "60%" }}
              onChange={(e)=>dispatch(adminAddUserEmail(e.target.value))}
              error={!!errors.email}
              helperText={errors.email}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="phone"
              label="phone"
              name="phone"
              autoComplete="phone"
              autoFocus
              sx={{ width: "60%" }}
              onChange={(e) => dispatch(adminAddUserPhone(e.target.value))}
              error={!!errors.phone}
              helperText={errors.phone}
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
              sx={{ width: "60%" }}
              onChange={(e) => dispatch(adminAddUserPassword(e.target.value))}
              error={!!errors.password}
              helperText={errors.password}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="confirmPassword"
              label="confirmPassword"
              type="confirmPassword"
              id="confirmPassword"
              autoComplete="current-password"
              sx={{ width: "60%" }}
              onChange={(e)=>dispatch(adminAddUserConfirmPassword(e.target.value))}
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword}
            />
            <Stack direction="row" spacing={2}>
              <Button type="submit" variant="contained" fullWidth  sx={{ mt: 5, mb: 2, height: 60, width: "60%", backgroundColor: '#131392' }}>
                Add User
              </Button>
            </Stack>
          
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
    </div>
  )
}

export default adminAddUser
