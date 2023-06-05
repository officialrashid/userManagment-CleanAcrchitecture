import {createSlice} from '@reduxjs/toolkit'

const loginSlice = createSlice({
    name: 'login', // Provide a name for the slice
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
  
  export const { setLoginEmail, setLoginPassword } = loginSlice.actions;
  
  export default loginSlice.reducer;
  