import React, { useState, useEffect } from 'react';
import { Box, Stack, Typography, Button, List } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from '../../axios/axios';
import { setLogout } from '../../redux-toolkit/logoutReducer';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { isUser } from '../../redux-toolkit/registerReducers';

function Profile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userDatas = useSelector((state) => state.register);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userId = userDatas.userInfo._id;
    if (userId) {
      axios
        .get(`/api/v1/user/getUser/${userId}`)
        .then((response) => {
          const userData = response.data.response;
          setUser(userData);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [userDatas.userInfo._id]);

  if (!user) {
    return null;
  }

  const handleLogout = () => {
    dispatch(isUser(null));
    dispatch(setLogout());
    navigate('/login');
    toast.success('Logout successful!');
  };

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
            onClick={handleLogout}
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
