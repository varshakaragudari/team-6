import React from "react";

import "./User.css";
import Home from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import PeopleIcon from "@mui/icons-material/People";
import PaymentsIcon from "@mui/icons-material/Payments";
import PaymentIcon from "@mui/icons-material/Payment";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import TableViewIcon from "@mui/icons-material/TableView";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <nav class="side col-md-2 d-none d-md-block sidebar vh-100 position-fixed py-5">
      <div class="sidebar-sticky">
        <ul class="nav flex-column">
          <li class="li-itm nav-item rounded ">
            <NavLink style={{ textDecoration: "none" }} to="">
              <div class="d-flex justify-content-left text-white nav-link">
                <Home />
                <h5 class="mx-2">Home</h5>
              </div>
            </NavLink>
          </li>
          <li class="li-itm nav-item rounded ">
            <NavLink style={{ textDecoration: "none" }} to="userprofile">
              <div class="d-flex justify-content-left text-white nav-link">
                <PersonIcon />
                <h5 class="mx-2">User Profile</h5>
              </div>
            </NavLink>
          </li>
          <li class="li-itm nav-item rounded ">
            <NavLink style={{ textDecoration: "none" }} to="loanstatus">
              <div class="d-flex justify-content-left text-white nav-link">
                <PeopleIcon />
                <h5 class="mx-2">Loan status</h5>
              </div>
            </NavLink>
          </li>
          <li class="li-itm nav-item rounded ">
            <NavLink style={{ textDecoration: "none" }} to="installmenthistory">
              <div class="d-flex justify-content-left text-white nav-link">
                <PaymentsIcon />
                <h5 class="mx-2">All Installments</h5>
              </div>
            </NavLink>
          </li>
          <li class="li-itm nav-item rounded ">
            <NavLink style={{ textDecoration: "none" }} to="newinstallment">
              <div class="d-flex justify-content-left text-white nav-link">
                <AddCircleIcon /> <h5 class="mx-2"> New Installment</h5>
              </div>
            </NavLink>
          </li>
          <li class="li-itm nav-item rounded ">
            <NavLink style={{ textDecoration: "none" }} to="helpdesk">
              <div class="d-flex justify-content-left text-white nav-link">
                <HelpCenterIcon />
                <h5 class="mx-2">Helpdesk</h5>
              </div>
            </NavLink>
          </li>
          <li class="li-itm nav-item rounded ">
            <NavLink style={{ textDecoration: "none" }} to="/loans">
              <div class="d-flex justify-content-left text-white nav-link">
                <TableViewIcon />
                <h5 class="mx-2">Apply For Loan</h5>
              </div>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
