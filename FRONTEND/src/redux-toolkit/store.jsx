// store.js
import { configureStore } from '@reduxjs/toolkit';
import registerReducer from '../redux-toolkit/registerReducers';
import loginReducer from '../redux-toolkit/loginReducers'
const store = configureStore({
  reducer: {
    register: registerReducer,
    login:loginReducer,
  },
});

export default store;
