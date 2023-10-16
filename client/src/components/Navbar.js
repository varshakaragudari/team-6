import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  useMediaQuery,
  ThemeProvider,
} from "@mui/material";
import Theme from "./Themes/Theme";
import { useDispatch, useSelector } from "react-redux";
import { Logout } from "../ReduxThunk/Action"; // Import getmydata and getLoginmydata from Action.js
import MyImage from "./Themes/natwestLogo.svg";
import { Link, NavLink, Route, useNavigate } from "react-router-dom";
// import RouteMapping from "../RouteMapping";
// import { Provider } from "react-redux";
// import store from "../ReduxThunk/Store";
import "../App.css";
// import LoginPage from "./loginSignup/Login"; // Correct the path as needed
// import RegistrationPage from "./loginSignup/RegistrationPage";
// import AdminDashboard from "./AdminDashboard";

import FingerprintIcon from "@mui/icons-material/Fingerprint";

export default function Navbar({
  adminLogin,
  setAdminLogin,
  login,
  onLoginClick,
  OnSignupClick,
  setLogin,
}) {
  useEffect(() => {
    console.log(adminLogin);
  }, [adminLogin]);

  // console.log(RouteMapping)

  const navigate = useNavigate();

  let loanData = {};

  const [anchorEl, setAnchorEl] = useState(null);
  // const isMediumScreen = useMediaQuery("(max-width: 960px)");
  const isSmallScreen = useMediaQuery("(max-width: 625px)");

  const dispatch = useDispatch();

  let user = useSelector((state) => state.data.currentUser);
  console.log(user);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const logout = () => {
    if (adminLogin) {
      setAdminLogin(false);
    } else {
      dispatch(Logout());
      console.log(user);
      console.log("inside the Logout", user.length);
      setLogin(!login);
    }
    navigate("/");
  };

  return (
    <div style={{ position: "sticky", top: "0", zIndex: "100" }}>
      <ThemeProvider theme={Theme}>
        <AppBar position="static">
          <Toolbar className="container my-2 d-flex justify-content-between">
            <Link to="/">
              <img className="my-element" src={MyImage} alt="Natwest Logo" />
            </Link>
            <div className="d-flex justify-content-center">
              <MenuItem>
                <NavLink to="about" style={{ color: "white" }}>
                  ABOUT US
                </NavLink>
              </MenuItem>
              <MenuItem>
                <NavLink to="contact" style={{ color: "white" }}>
                  CONTACT US
                </NavLink>
              </MenuItem>
              {!isSmallScreen && !login && (
                <>
                  <MenuItem>
                    <NavLink to="user" style={{ color: "white" }}>
                      USER DASHBOARD
                    </NavLink>
                  </MenuItem>
                </>
              )}

              {!isSmallScreen && adminLogin && (
                <>
                  <MenuItem>
                    <NavLink to="admin" style={{ color: "white" }}>
                      ADMIN DASHBOARD
                    </NavLink>
                  </MenuItem>
                </>
              )}

              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleMenuOpen}
              >
                <FingerprintIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          {!adminLogin && login && (
            <NavLink to="/signUp" className="hover-underline">
              <MenuItem onClick={handleMenuClose} style={{ color: "purple" }}>
                Sign Up
              </MenuItem>
            </NavLink>
          )}

          {!adminLogin && login && (
            <NavLink to="/login" className="hover-underline">
              <MenuItem onClick={handleMenuClose} style={{ color: "purple" }}>
                Login
              </MenuItem>
            </NavLink>
          )}

          {!login && user && user.length != 0 && (
            <div key={user.id}>
              <MenuItem
                onClick={() => {
                  setAnchorEl(null);
                }}
                className="hover-underline"
              >
                ID : {user.id}
              </MenuItem>
              <MenuItem
                onClick={() => {
                  setAnchorEl(null);
                }}
                className="hover-underline"
              >
                Name : {user.customerName}
              </MenuItem>
              <MenuItem
                onClick={() => {
                  setAnchorEl(null);
                }}
                className="hover-underline"
              >
                Account Number : {user.accountNumber}
              </MenuItem>
            </div>
          )}

          {!login && (
            <MenuItem
              onClick={() => {
                setAnchorEl(null);
                logout();
              }}
              className="hover-underline"
            >
              Logout
            </MenuItem>
          )}
          {adminLogin && (
            <MenuItem
              onClick={() => {
                setAnchorEl(null);
                logout();
              }}
              className="hover-underline"
            >
              Admin Logout
            </MenuItem>
          )}
        </Menu>
      </ThemeProvider>
    </div>
  );
}
