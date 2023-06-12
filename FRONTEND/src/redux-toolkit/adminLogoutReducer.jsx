import { createSlice } from '@reduxjs/toolkit';

const adminLogoutSlice = createSlice({
  name: 'adminLogout',
  initialState: {},
  reducers: {
    setAdminLogout: (state, action) => {
      console.log("keriii");
      localStorage.removeItem('adminAccessToken');
      localStorage.removeItem('adminRefreshToken');
      return {}; // Return an empty object instead of `initialState`
    },
  },
});

export const { setAdminLogout } = adminLogoutSlice.actions;

export default adminLogoutSlice.reducer;