// reducers/registerReducer.js
import { createSlice } from '@reduxjs/toolkit';

const registerSlice = createSlice({
  name: 'register',
  initialState: {
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  },
  reducers: {
    setName: (state, action) => {
        console.log(action.payload,"PPPPPPPPPPPPPP");
      state.name = action.payload;
      console.log(state.name,"bdssssssssssssss");
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPhone: (state, action) => {
      state.phone = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setConfirmPassword: (state, action) => {
      state.confirmPassword = action.payload;
    },
  },
});

export const {
  setName,
  setEmail,
  setPhone,
  setPassword,
  setConfirmPassword,
} = registerSlice.actions;

export default registerSlice.reducer;
