import React from "react";
import Sidebar from "./adminComponents/Sidebar";
import { Route, Routes } from "react-router-dom";
import AdminHome from "./adminComponents/AdminHome";
import UsersList from "./adminComponents/UsersList";
import { LoansList } from "./adminComponents/LoansList";
import { Installments } from "./adminComponents/Installments";
import UserData from "./adminComponents/UserData";
import { LoanData } from "./adminComponents/LoanData";
import { NewLoans } from "./adminComponents/NewLoans";

const AdminDashboard = () => {
  return (
    <div className="container-fluid" style={{ minHeight: "63.7vh" }}>
      <div className="row">
        <Sidebar />
        <div className="col-md-2"></div>
        <div className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
          <Routes>
            <Route path="/" element={<AdminHome />} />
            <Route path="users" element={<UsersList />} />
            <Route path="users/:id" element={<UserData />} />
            <Route path="loans" element={<LoansList />} />
            <Route path="loans/:id" element={<LoanData />} />
            <Route path="newloans" element={<NewLoans />} />
            <Route path="installments" element={<Installments />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
