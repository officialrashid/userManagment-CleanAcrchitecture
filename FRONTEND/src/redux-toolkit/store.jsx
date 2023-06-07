import { configureStore } from '@reduxjs/toolkit';
import registerReducer from '../redux-toolkit/registerReducers';
import loginReducer from '../redux-toolkit/loginReducers';
import adminRegisterReducer from './adminRegisterReducer';
import adminLoginReducer from './adminLoginReducer';
const store = configureStore({
  reducer: {
    register: registerReducer,
    login: loginReducer,
    adminRegister: adminRegisterReducer,
    adminLogin:adminLoginReducer,
  },
});

export default store;
