import {createSlice} from '@reduxjs/toolkit'

const adminLoginSlice = createSlice({
    name: 'adminLogin', // Provide a name for the slice
    initialState: {
      email: '',
      password: '',
      isAdmin: '',
      AdminInfo: {}
    },
    reducers: {
      setLoginEmail: (state, action) => {
        state.email = action.payload;
      },
      setLoginPassword: (state, action) => {
        state.password = action.payload;
      },
      isAdmin: (state, action) => {
        console.log(action.payload, "lllllllllllaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
        state.isUser = action.payload;
      },
      addAdminInfo: (state, action) => {
        console.log(action.payload, "[[[[[[[[[[[[[[[[[[[[[[[[[[[");
        state.userInfo = action.payload;
      }
    },
  });
  
  export const { setLoginEmail, setLoginPassword,isAdmin,addAdminInfo } = adminLoginSlice.actions;

  
  export default adminLoginSlice.reducer;