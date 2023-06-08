// reducers/registerReducer.js
import { createSlice } from '@reduxjs/toolkit';

const editSubmitSlice = createSlice({
  name: 'editSubmit',
  initialState: {
    name: '',
    email: '',
    phone: '',
   
  },
  reducers: {
    setEditName: (state, action) => {
        console.log(action.payload,"PPPPPPPPPPPPPP");
      state.name = action.payload;
      console.log(state.name,"bdssssssssssssss");
    },
    setEditEmail: (state, action) => {
      state.email = action.payload;
    },
    setEditPhone: (state, action) => {
      state.phone = action.payload;
    },

  },
});

export const {
    setEditName,
    setEditEmail,
    setEditPhone,

} = editSubmitSlice.actions;

export default editSubmitSlice.reducer;
