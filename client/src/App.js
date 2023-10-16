import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import { Provider } from "react-redux";
import store from "./ReduxThunk/Store";
// import LoanTypes from "./components/LoanTypes";
import AdminDashboard from "./components/AdminDashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegistrationPage from "./components/loginSignup/RegistrationPage";
import LoginPage from "./components/loginSignup/Login";
import { LoanForm } from "./components/LoanForm";
import LoanTypes from "./components/LoanTypes";

import UserDashboard from "./components/UserDashboard";
import HomeComponent from "./components/HomeComponent";
import Navbar from "./components/Navbar";
import Fotter from "./components/Fotter";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";

function App() {
  const [login, setLogin] = useState(true);
  const [signup, setSignUp] = useState(true);

  const [adminLogin, setAdminLogin] = useState(false);

  function onLoginClick() {
    setLogin(!login);
  }

  function OnSignupClick() {
    setLogin(!login);
    setSignUp(!signup);
  }

  return (
    <BrowserRouter>
      <Provider store={store}>
        <Navbar
          adminLogin={adminLogin}
          setAdminLogin={setAdminLogin}
          login={login}
          onLoginClick={onLoginClick}
          OnSignupClick={OnSignupClick}
          setLogin={setLogin}
        />
      </Provider>
      <Routes>
        <Route path="" element={<HomeComponent />} />
        {/* <Route path="register" element={<RegistrationPage />} />
        <Route path="login" element={<LoginPage />} /> */}
        <Route
          path="loans"
          element={!login ? <LoanTypes /> : <HomeComponent />}
        />
        <Route path="about" element={<AboutUs />} />
        <Route path="contact" element={<ContactUs />} />
        <Route
          path="admin/*"
          element={adminLogin ? <AdminDashboard /> : <HomeComponent />}
        />

        <Route
          path="loans/:id"
          element={
            <Provider store={store}>
              <LoanForm />
            </Provider>
          }
        />

        <Route
          path="user/*"
          element={
            !login ? (
              <Provider store={store}>
                <UserDashboard />
              </Provider>
            ) : (
              <HomeComponent />
            )
          }
        />
        <Route
          path="/signUp"
          element={
            <Provider store={store}>
              <RegistrationPage
                login={login}
                onLoginClick={onLoginClick}
                OnSignupClick={OnSignupClick}
                setLogin={setLogin}
              />
            </Provider>
          }
        />

        <Route
          path="/login"
          element={
            <Provider store={store}>
              <LoginPage
                adminLogin={adminLogin}
                setAdminLogin={setAdminLogin}
                login={login}
                onLoginClick={onLoginClick}
                OnSignupClick={OnSignupClick}
                setLogin={setLogin}
              />
            </Provider>
          }
        />
      </Routes>
      <Fotter />
    </BrowserRouter>
  );
}

export default App;
