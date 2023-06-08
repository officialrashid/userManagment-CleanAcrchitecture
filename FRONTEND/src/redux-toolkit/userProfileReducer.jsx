import { createSlice } from '@reduxjs/toolkit';

const addProfileSlice = createSlice({
  name: 'addProfile',
  initialState: {
    profileImage: '',
   
    // Add other profile details as needed
  },
  reducers: {
    setProfileImage: (state, action) => {
        
      state.profileImage = action.payload;
      console.log(state.profileImage,"koiiiiii");
    },
 
  },
});

export const { setProfileImage} = addProfileSlice.actions;

export default addProfileSlice.reducer;
