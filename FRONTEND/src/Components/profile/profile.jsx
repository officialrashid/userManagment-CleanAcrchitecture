import React, { useState, useEffect } from 'react';
import { Box, Stack, Typography, Button, List } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from '../../axios/axios';
import { useDispatch } from 'react-redux';
import {setLogout} from '../../redux-toolkit/logoutReducer'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Profile() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation(); // Access the location object
  const userDatas = useSelector((state) => state.register);
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    console.log(userDatas.userInfo,"::::::::::::::::::::::::::::;******************");
    const userId = userDatas.userInfo._id;
    console.log(userId,"l88888888888888888888888"); // Use location object
    if (userId) {
      axios
        .get(`/api/v1/user/getUser/${userId}`)
        .then((response) => {
          const userData = response.data.response;
          console.log(userData, 'userdata is coming and wonderful');
          setUser(userData);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [userDatas.userInfo._id]); // Update the dependency array

 

  if (!user) {
    return null; // Render loading state or return a spinner
  }

  return (
    <Box marginLeft={1} sx={{ width: 300, height: 500, borderRadius: 2, marginTop: 5 }}>
      <Box sx={{ borderRadius: 2, boxShadow: 6, width: 300, height: 'auto', zIndex: 1 }}>
        <Stack>
          {user.image ? (
            <Avatar alt="" src={user.image} sx={{ width: 80, height: 80, marginTop: -3, mx: 'auto' }} />
          ) : (
            <Avatar alt="" sx={{ width: 80, height: 80, marginTop: -3, mx: 'auto' }} />
          )}
          <Typography textAlign={'center'} marginTop={1} fontSize={16} fontWeight={500}>
            {user.name}
          </Typography>
          <Typography textAlign={'center'} marginTop={1} fontSize={16} fontWeight={300}>
            {user.email}
          </Typography>
          <Button
            variant="contained"
            sx={{
              width: 200,
              borderRadius: 2,
              alignContent: 'center',
              marginLeft: 6,
              marginTop: 3,
              backgroundColor: '#3C6FF5',
            }}
            onClick={() => navigate('/addProfile')}
          >
            Complete profile
          </Button>
          <Button
            variant="contained"
            sx={{
              width: 200,
              borderRadius: 2,
              alignContent: 'center',
              marginLeft: 6,
              marginTop: 3,
              backgroundColor: '#3C6FF5',
            }}
            onClick={() => {
              dispatch(setLogout());
              navigate('/login');
              toast.success('Logout successful!');
            }}
          >
            Logout
          </Button>

          <List />
          <List />
          <List />
          <List />
          <List />
        </Stack>
      </Box>
    </Box>
  );
}

export default Profile;
