import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Admin.css";
import Home from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import PaymentsIcon from "@mui/icons-material/Payments";
import PaymentIcon from "@mui/icons-material/Payment";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import { NavLink } from "react-router-dom";
import Badge from "@mui/material/Badge";

const Sidebar = () => {
  const [loans, setLoans] = useState([]);
  const [pending, setPending] = useState(1);

  useEffect(() => {
    axios
      .get("http://localhost:8080/loan")
      .then((res) => {
        setLoans(res.data);
        console.log(res.data);
      })
      .catch((e) => console.log(e));
  }, []);

  const countArr = loans.filter((l) => l.approvedStatus === "Pending");
  const count = countArr.length;

  console.log(count);

  return (
    <nav className="side col-md-2 d-none d-md-block sidebar vh-100 position-fixed py-5">
      <div className="sidebar-sticky">
        <ul className="nav flex-column">
          <li className="li-itm nav-item rounded ">
            <NavLink style={{ textDecoration: "none" }} to="">
              <div className="d-flex justify-content-left text-white nav-link">
                <Home />
                <h5 className="mx-2">Home</h5>
              </div>
            </NavLink>
          </li>
          <li className="li-itm nav-item rounded ">
            <NavLink style={{ textDecoration: "none" }} to="users">
              <div className="d-flex justify-content-left text-white nav-link">
                <PeopleIcon />
                <h5 className="mx-2">Users</h5>
              </div>
            </NavLink>
          </li>
          <li className="li-itm nav-item rounded ">
            <NavLink style={{ textDecoration: "none" }} to="loans">
              <div className="d-flex justify-content-left text-white nav-link">
                <PaymentsIcon />
                <h5 className="mx-2">Loans</h5>
              </div>
            </NavLink>
          </li>
          <li className="li-itm nav-item rounded ">
            <NavLink style={{ textDecoration: "none" }} to="installments">
              <div className="d-flex justify-content-left text-white nav-link">
                <PaymentIcon />
                <h5 className="mx-2">Installements</h5>
              </div>
            </NavLink>
          </li>

          <li className="li-itm nav-item rounded ">
            <NavLink style={{ textDecoration: "none" }} to="newloans">
              <div className="d-flex justify-content-left text-white nav-link">
                <LibraryAddIcon />
                <Badge badgeContent={count} color="primary">
                  <h5 className="mx-2">New Loans</h5>
                </Badge>
              </div>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
