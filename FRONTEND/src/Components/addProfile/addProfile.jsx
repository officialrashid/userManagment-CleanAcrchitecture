import React, { useEffect, useState } from 'react';
import { Box, Stack, Avatar, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setProfileImage } from '../../redux-toolkit/userProfileReducer';
import cloudinary from 'cloudinary-core';
import Axios from 'axios';
import axios from '../../axios/axios';
import { useNavigate } from 'react-router-dom';
import { addUserInfo } from '../../redux-toolkit/registerReducers';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// Create a Cloudinary instance
const cl = cloudinary.Cloudinary.new({ cloud_name: 'dz9pszn6y' });

function AddProfile() {
  const navigate = useNavigate();
  const body = useSelector((state) => state.register);
  const [image, setImage] = useState();
  const [user, setUser] = useState([]);
  const [prevUrl, setPrevUrl] = useState();

  useEffect(() => {
    setUser(body);
  }, []);

  const dispatch = useDispatch();
  const profileImage = useSelector((state) => state.userProfile.profileImage);
  const userData = useSelector((state) => state.register);

  const handleUpdatePhoto = () => {
    const formData = new FormData();
    formData.append('file', image);
    formData.append('upload_preset', 'ypnvfoyt');

    Axios.post('https://api.cloudinary.com/v1_1/dz9pszn6y/image/upload', formData)
      .then((response) => {
        const url = response.data.secure_url;
        if (url === prevUrl) {
          console.log('Image already exists');
          return false;
        } else {
          const newData = {
            url: response.data.secure_url,
            userId: userData.userInfo._id,
          };
          setPrevUrl(url);
          axios
            .post('/api/v1/user/updateProfile', newData)
            .then((response) => {
              console.log("updated profileeeeeeeeeeeeeeeee");
              dispatch(addUserInfo(response.data.response));
              toast.success('profile added successful!');
              navigate('/home');
            })
            .catch((error) => {
              console.log(error);
            });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Box marginLeft={45} sx={{ width: 300, height: 500, borderRadius: 2, marginTop: 15 }}>
      <Box sx={{ borderRadius: 2, boxShadow: 6, width: 500, height: 'auto', zIndex: 1 }}>
        <Stack spacing={2} alignItems="center">
          {image ? (
            <Avatar
              alt=""
              src={URL.createObjectURL(image)}
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
            <input
              type="file"
              id="upload-file"
              style={{ fontSize: '16px' }}
              onChange={(e) => setImage(e.target.files[0])}
            />
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
