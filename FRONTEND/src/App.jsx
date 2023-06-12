import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
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

  const jwtToken = localStorage.getItem('userAccessToken');

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      if (!user) {
        // Clear the JWT token from local storage when logging out
        localStorage.removeItem('userAccessToken');
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [user]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin" element={<AdminLoginPage />} />
        {jwtToken ? (
          <>
            <Route path="/home" element={<Home />} />
            <Route path="/addProfile" element={<AdAddProfileComponent />} />
          </>
        ) : (
          <Navigate to="/login" replace />
        )}
        <Route path="/adminHome" element={<AdminHomePage />} />
        <Route path="/adminEditUser" element={<AdminEditUser />} />
        <Route path="/adminAddUser" element={<AdminAddUser />} />
      </Routes>
    </Router>
  );
}

export default App;
