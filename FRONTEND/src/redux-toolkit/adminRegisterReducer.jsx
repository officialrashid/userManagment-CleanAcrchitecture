import { createSlice } from '@reduxjs/toolkit';

const adminRegisterSlice = createSlice({
  name: 'adminRegister',
  initialState: {
    email: '',
    password: '',
  },
  reducers: {
    adminSetEmail: (state, action) => {
      state.email = action.payload;
    },
    adminSetPassword: (state, action) => {
      state.password = action.payload;
    },
  },
});

export const { adminSetEmail, adminSetPassword } = adminRegisterSlice.actions;
export default adminRegisterSlice.reducer;
