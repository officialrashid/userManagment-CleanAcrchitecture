import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignupPage from './Pages/SignupPage';
import LoginPage from './Pages/LoginPage';
import AdminSignupPage from './adminPages/adminSignupPage';
import AdminLoginPage from './adminPages/adminLoginPage';
import Home from './Pages/userHomePage';
import Profile from './Components/profile/profile'
import AdAddProfileComponent from './Pages/addProfile';
import AdminHomePage from './adminPages/adminHomePage';
import AdminEditUser from './adminPages/EditUserPage';
import AdminAddUser from './adminPages/adminAddUser';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin" element={<AdminSignupPage />} />
        <Route path="/adminLogin" element={<AdminLoginPage />} />
        <Route path="/home" element={<Home />} />
        <Route path='/addProfile' element={<AdAddProfileComponent />} />
        <Route path='/adminHome' element={<AdminHomePage />} />
        <Route path='/adminEditUser' element={<AdminEditUser />} />
        <Route path='/adminAddUser' element={<AdminAddUser />} />
      </Routes>
    </Router>
  );
}

export default App;
