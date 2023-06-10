import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useSelector, useDispatch } from "react-redux";
import { setEditName, setEditEmail, setEditPhone } from "../../redux-toolkit/adminEditSubmitReducer";
import { useNavigate } from 'react-router-dom';
import axios from "../../axios/axios";

function adminEditUser() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const body = useSelector((state) => state.adminEditUser);
  const userId = body.editUser._id;
  let editBody = useSelector((state) => state.adminEditSubmit);


  const handleEditSubmit = (e) => {
    e.preventDefault();
   
      const updatedUser = {
        _id: userId,
        ...editBody,
      };

      axios.put('/api/v1/admin/adminEditUser', updatedUser).then((response) => {
        
          navigate('/adminHome');
        
      
      });
    
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
            welcome
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
            Edit User
          </Typography>

          <Box component="form" sx={{ paddingLeft: 20 }} onSubmit={handleEditSubmit}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoComplete="name"
              defaultValue={body.editUser.name}
              autoFocus
              sx={{ width: "60%" }}
              onChange={(e) => dispatch(setEditName(e.target.value))}
            
              
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              defaultValue={body.editUser.email}
              autoFocus
              sx={{ width: "60%" }}
              onChange={(e) => dispatch(setEditEmail(e.target.value))}
             
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="phone"
              label="phone"
              name="phone"
              autoComplete="phone"
              defaultValue={body.editUser.phone}
              autoFocus
              sx={{ width: "60%" }}
              onChange={(e)=>dispatch(setEditPhone(e.target.value))}
              
            
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="id"
              label="id"
              name="id"
              autoComplete="id"
              defaultValue={body.editUser._id}
              autoFocus
              sx={{ width: "60%" ,visibility:'hidden'}}
            
            />

            <Stack direction="row" spacing={2}>
              <Button
                variant="contained"
                fullWidth
                type="submit"
                sx={{
                  mt: 5,
                  mb: 2,
                  height: 60,
                  width: "60%",
                  backgroundColor: "#131392",
                  
                }}
              >
                Edit User
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
  );
}

export default adminEditUser;
