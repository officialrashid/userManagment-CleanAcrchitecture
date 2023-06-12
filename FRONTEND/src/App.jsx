import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignupPage from './Pages/SignupPage';
import LoginPage from './Pages/LoginPage';
import AdminSignupPage from './adminPages/adminSignupPage';
import AdminLoginPage from './adminPages/adminLoginPage';
import Home from './Pages/userHomePage';
import Profile from './Components/profile/profile';
import AdAddProfileComponent from './Pages/addProfile';
import AdminHomePage from './adminPages/adminHomePage';
import AdminEditUser from './adminPages/EditUserPage';
import AdminAddUser from './adminPages/adminAddUser';
import { useSelector, useDispatch } from 'react-redux';
import { isUser } from './redux-toolkit/registerReducers';

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.register.isUser);

  useEffect(() => {
    dispatch(isUser(user));
    console.log(user, ":::::::::::::::::::::;pppppppppppppppppp");
  }, [dispatch, user]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin" element={<AdminLoginPage />} />
        {/* <Route path="/adminLogin" element={<AdminLoginPage />} /> */}
        {user ? (
          <Route path="/home" element={<Home />} />
        ) : (
          <Route path="/home" element={<LoginPage />} />
        )}
        {user ? (
          <Route path="/addProfile" element={<AdAddProfileComponent />} />
        ) : (
          <Route path="/addProfile" element={<LoginPage />} />
        )}
        <Route path="/adminHome" element={<AdminHomePage />} />
        <Route path="/adminEditUser" element={<AdminEditUser />} />
        <Route path="/adminAddUser" element={<AdminAddUser />} />
      </Routes>
    </Router>
  );
}

export default App;
