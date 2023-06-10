import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux'; // Add this line
import registerReducer from '../redux-toolkit/registerReducers';
import loginReducer from '../redux-toolkit/loginReducers';
import adminRegisterReducer from './adminRegisterReducer';
import adminLoginReducer from './adminLoginReducer';
import adminEditUserReducer from './adminEditUserReducer';
import adminEditSubmitReducer from './adminEditSubmitReducer';
import adminAddUserReducer from './adminAddUserReducer';
import userProfileReducer from './userProfileReducer';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    register: registerReducer,
    login: loginReducer,
    adminRegister: adminRegisterReducer,
    adminLogin: adminLoginReducer,
    adminEditUser: adminEditUserReducer,
    adminEditSubmit: adminEditSubmitReducer,
    adminAddUser: adminAddUserReducer,
    userProfile: userProfileReducer,
  })
);

const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);

export { store, persistor };
