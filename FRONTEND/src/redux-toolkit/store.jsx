// store.js
import { configureStore } from '@reduxjs/toolkit';
import registerReducer from '../redux-toolkit/registerReducers';

const store = configureStore({
  reducer: {
    register: registerReducer,
  },
});

export default store;
