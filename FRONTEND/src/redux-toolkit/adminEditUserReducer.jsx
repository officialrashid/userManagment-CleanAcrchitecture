import {createSlice} from '@reduxjs/toolkit'

const adminEditUserSlice = createSlice({
    name: 'adminEditUser', // Provide a name for the slice
    initialState: {
      editUser:'',
    },
    reducers: {
      setEditUser: (state, action) => {
        state.editUser = action.payload;
      },
     
    },
  });
  
  export const {setEditUser} = adminEditUserSlice.actions;

  
  export default adminEditUserSlice.reducer;