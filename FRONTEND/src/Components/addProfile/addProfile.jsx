import * as React from 'react';
import Box from '@mui/material/Box';
import { Stack, Typography, Button, List } from '@mui/material';
import Avatar from '@mui/material/Avatar';

function AddProfile() {
  return (
    <Box marginLeft={45} sx={{ width: 300, height: 500, borderRadius: 2, marginTop: 15 }}>
      <Box sx={{ borderRadius: 2, boxShadow: 6, width: 500, height: 'auto', zIndex: 1 }}>
        <Stack spacing={2} alignItems="center">
          <Avatar alt="" src="" sx={{ width: 80, height: 80, marginTop: -3, mx: 'auto' }} />

          <label htmlFor="upload-file" style={{marginLeft:'110px',marginTop:'50px'}} >
            <input type="file" id="upload-file" style={{fontSize:'15px'}} />
            
          </label>

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

export default AddProfile;
