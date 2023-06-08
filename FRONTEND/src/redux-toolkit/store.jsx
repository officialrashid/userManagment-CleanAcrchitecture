import { configureStore } from '@reduxjs/toolkit';
import registerReducer from '../redux-toolkit/registerReducers';
import loginReducer from '../redux-toolkit/loginReducers';
import adminRegisterReducer from './adminRegisterReducer';
import adminLoginReducer from './adminLoginReducer';
import adminEditUserReducer from './adminEditUserReducer';
import adminEditSubmitReducer from './adminEditSubmitReducer';
import adminAddUserReducer from './adminAddUserReducer';
import userProfileReducer from './userProfileReducer';
const store = configureStore({
  reducer: {
    register: registerReducer,
    login: loginReducer,
    adminRegister: adminRegisterReducer,
    adminLogin:adminLoginReducer,
    adminEditUser:adminEditUserReducer,
    adminEditSubmit:adminEditSubmitReducer,
    adminAddUser:adminAddUserReducer,
    userProfile:userProfileReducer,
  },
});

export default store;
