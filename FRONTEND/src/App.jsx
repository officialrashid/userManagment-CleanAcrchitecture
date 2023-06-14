import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import SignupPage from "./Pages/SignupPage";
import LoginPage from "./Pages/LoginPage";
import AdminSignupPage from "./adminPages/adminSignupPage";
import AdminLoginPage from "./adminPages/adminLoginPage";
import Home from "./Pages/userHomePage";
import Profile from "./Components/profile/profile";
import AdAddProfileComponent from "./Pages/addProfile";
import AdminHomePage from "./adminPages/adminHomePage";
import AdminEditUser from "./adminPages/EditUserPage";
import AdminAddUser from "./adminPages/adminAddUser";
import { useSelector, useDispatch } from "react-redux";
import { isUser } from "./redux-toolkit/registerReducers";
import {isAdmin} from "./redux-toolkit/adminLoginReducer"
function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.register.isUser);
  const admin = useSelector((state)=>state.adminLogin.isAdmin)
  const [addjwtToken, setJwtToken] = useState("");
  const [addAdminjwtToken, setAdminJwtToken] = useState("");

  useEffect(() => {
    dispatch(isUser(user));
    dispatch(isAdmin(admin))
    const jwtToken = localStorage.getItem("userAccessToken");
    const adminjwtToken = localStorage.getItem("adminAccessToken");
    setJwtToken(jwtToken);
    setAdminJwtToken(adminjwtToken);
  }, [dispatch, user,admin]);

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      if (!user) {
        localStorage.removeItem("userAccessToken");
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [user]);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={addjwtToken ? <Navigate to="/home" /> : <SignupPage />}
        />
        <Route
          path="/login"
          element={addjwtToken ? <Navigate to="/home" /> : <LoginPage />}
        />
        <Route
          path="/admin"
          element={
            addAdminjwtToken ? (
              <Navigate to="/adminHome" />
            ) : (
              <AdminLoginPage />
            )
          }
        />

        <Route
          path="/home"
          element={!addjwtToken ? <Navigate to="/login" /> : <Home />}
        />

        <Route
          path="/addProfile"
          element={
            addjwtToken ? (
              <AdAddProfileComponent />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        <Route
          path="/adminHome"
          element={
            addAdminjwtToken ? <AdminHomePage /> : <Navigate to="/admin" />
          }
        />
        <Route
          path="/adminEditUser"
          element={
            addAdminjwtToken ? (
              <AdminEditUser />
            ) : (
              <Navigate to="/admin" />
            )
          }
        />
        <Route
          path="/adminAddUser"
          element={
            addAdminjwtToken ? (
              <AdminAddUser />
            ) : (
              <Navigate to="/admin" />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
