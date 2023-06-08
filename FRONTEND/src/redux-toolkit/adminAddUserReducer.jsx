// reducers/registerReducer.js
import { createSlice } from '@reduxjs/toolkit';

const adminAddUserSlice = createSlice({
  name: 'adminAddUser',
  initialState: {
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  },
  reducers: {
    adminAddUserName: (state, action) => {
        console.log(action.payload,"PPPPPPPPPPPPPP");
      state.name = action.payload;
      console.log(state.name,"bdssssssssssssss");
    },
    adminAddUserEmail: (state, action) => {
      state.email = action.payload;
    },
    adminAddUserPhone: (state, action) => {
      state.phone = action.payload;
    },
    adminAddUserPassword: (state, action) => {
      state.password = action.payload;
    },
    adminAddUserConfirmPassword: (state, action) => {
      state.confirmPassword = action.payload;
    },
  },
});

export const {
    adminAddUserName,
    adminAddUserEmail,
    adminAddUserPhone,
    adminAddUserPassword,
    adminAddUserConfirmPassword,
} = adminAddUserSlice.actions;

export default adminAddUserSlice.reducer;
