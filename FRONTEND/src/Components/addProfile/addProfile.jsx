import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { Stack, Avatar } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setProfileImage } from '../../redux-toolkit/userProfileReducer';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddProfile() {
  const navigate = useNavigate();
  const body = useSelector((state) => state.register);
  const [image, setImage] = useState();
  useEffect(() => {
    console.log(body, 'useEffect body in profile ethiii');
  }, []);
  const dispatch = useDispatch();
  const profileImage = useSelector((state) => state.userProfile.profileImage);
  const userID = useSelector((state) => state.register.userID);

  const handleProfileImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      dispatch(setProfileImage(reader.result));
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleUpdatePhoto = () => {
    if (profileImage) {
      const formData = new FormData();
      formData.append('profileImage', profileImage);

      axios
        .post(`/api/v1/user/${userID}/updateProfileImage`, formData) // Replace with your API endpoint URL
        .then((response) => {
          // Handle success if needed
          navigate('/home'); // Navigate to the home page after successful update
        })
        .catch((error) => {
          // Handle error if needed
        });
    }
  };

  return (
    <Box marginLeft={45} sx={{ width: 300, height: 500, borderRadius: 2, marginTop: 15 }}>
      <Box sx={{ borderRadius: 2, boxShadow: 6, width: 500, height: 'auto', zIndex: 1 }}>
        <Stack spacing={2} alignItems="center">
          {profileImage ? (
            <Avatar
              alt=""
              src={profileImage}
              sx={{ width: 80, height: 80, marginTop: -3, mx: 'auto' }}
            />
          ) : (
            <Avatar
              alt=""
              src="/placeholder-image.jpg" // Replace with the path to your placeholder image
              sx={{ width: 80, height: 80, marginTop: -3, mx: 'auto' }}
            />
          )}

          <label htmlFor="upload-file" style={{ marginLeft: '120px', marginTop: '50px' }}>
            <input type="file" id="upload-file" style={{ fontSize: '16px' }} onChange={handleProfileImageChange} />
            <Button variant="contained" sx={{ marginTop: 10, marginLeft: 6 }} onClick={handleUpdatePhoto}>
              Update Photo
            </Button>
          </label>
        </Stack>
      </Box>
    </Box>
  );
}

export default AddProfile;
