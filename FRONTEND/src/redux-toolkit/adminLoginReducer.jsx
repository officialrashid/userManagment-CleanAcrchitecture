import {createSlice} from '@reduxjs/toolkit'

const adminLoginSlice = createSlice({
    name: 'adminLogin', // Provide a name for the slice
    initialState: {
      email: '',
      password: '',
    },
    reducers: {
      setLoginEmail: (state, action) => {
        state.email = action.payload;
      },
      setLoginPassword: (state, action) => {
        state.password = action.payload;
      },
    },
  });
  
  export const { setLoginEmail, setLoginPassword } = adminLoginSlice.actions;

  
  export default adminLoginSlice.reducer;