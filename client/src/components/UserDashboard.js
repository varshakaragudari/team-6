import React, { useEffect } from "react";
import Sidebar from "./userComponents/Sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserHome from "./userComponents/UserHome"; // Change to 'import UserHome from "./userComponents/UserHome";'
import UserProfile from "./userComponents/UserProfile"; // Change to 'import UserProfile from "./userComponents/UserProfile";'
import { NewInstallment } from "./userComponents/NewInstallment";
import { LoanStatus } from "./userComponents/LoanStatus";
import { InstallmentHistory } from "./userComponents/InstallmentHistory";
import { Helpdesk } from "./userComponents/Helpdesk";
import { Provider } from "react-redux";
import store from "../ReduxThunk/Store";
import { useDispatch, useSelector } from "react-redux";
import { getLoanDataByCustomerId } from "../ReduxThunk/Action";
import LoanInfo from "./userComponents/LoanInfo";

const UserDashboard = () => {
  const user = useSelector((state) => state.data.currentUser);
  console.log(user);

  return (
    <div class="container-fluid" style={{ minHeight: "63.7vh" }}>
      <div class="row">
        <Sidebar />
        <div class="col-md-2"></div>
        <div class="col-md-9 ml-sm-auto col-lg-10 p-3">
          <Routes>
            <Route path="/" element={<UserHome />} />
            <Route
              path="userprofile"
              element={
                <Provider store={store}>
                  <UserProfile />
                </Provider>
              }
            />
            <Route path="newinstallment" element={<NewInstallment />} />
            <Route
              path="loanstatus"
              element={
                <Provider store={store}>
                  <LoanStatus />
                </Provider>
              }
            />
            <Route
              path="loanstatus/:id"
              element={
                <Provider store={store}>
                  <LoanInfo />
                </Provider>
              }
            />
            <Route path="helpdesk" element={<Helpdesk />} />
            <Route path="installmenthistory" element={<InstallmentHistory />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
