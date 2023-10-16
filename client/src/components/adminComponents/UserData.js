import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const UserData = () => {
  const { id } = useParams();

  const [customer, setCustomer] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:9090/customers/" + id)
      .then((res) => {
        setCustomer(res.data);
        console.log(res.data);
      })
      .catch((e) => console.log(e));
  }, []);

  console.log(customer);

  return (
    <div className="hello">
      {/* <h1 classNameName="text-indigo-600 m-12">Customer {id}</h1> */}

      <div>
        <br></br>
        <br></br>
        <br></br>

        <div className="page-content page-container" id="page-content">
          <div className="padding">
            <div className="row container d-flex justify-content-center">
              <div className="col-xl-6 col-md-12">
                <div className="card user-card-full">
                  <div className="row m-l-0 m-r-0">
                    <div
                      className="col-sm-4 bg-c-lite-green user-profile"
                      style={{ backgroundColor: "#3C1053" }}
                    >
                      <div className="card-block text-center text-white">
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <div className="m-b-25">
                          <img
                            src="https://img.icons8.com/bubbles/100/000000/user.png"
                            className="img-radius"
                            alt="User-Profile-Image"
                          ></img>
                        </div>
                        <h3 style={{ color: "white" }}>
                          {customer.customerName}
                        </h3>
                        <h4 style={{ color: "white" }}>{customer.userName}</h4>
                        <i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                      </div>
                    </div>
                    <div
                      className="col-sm-8"
                      style={{ backgroundColor: "white" }}
                    >
                      <div className="card-block">
                        <br></br>
                        <br></br>
                        <h3 className="m-b-50 p-b-10 b-b-default f-w-800">
                          User Profile
                        </h3>
                        <br></br>
                        <br></br>
                        <div className="row">
                          <div className="col-sm-6">
                            <h5 className="f-w-600" style={{ color: "purple" }}>
                              Email
                            </h5>
                            <h6 className="text-muted f-w-400">
                              {customer.email}
                            </h6>
                          </div>
                          <div className="col-sm-6">
                            <h5 className="f-w-600" style={{ color: "purple" }}>
                              Phone
                            </h5>
                            <h6 className="text-muted f-w-400">
                              {customer.phoneNumber}
                            </h6>
                          </div>
                        </div>
                        <br></br>
                        <br></br>

                        <div className="row">
                          <br></br>
                          <br></br>
                          <br></br>
                          <br></br>
                          <div className="col-sm-6">
                            <h5 className="f-w-600" style={{ color: "purple" }}>
                              Customer ID
                            </h5>
                            <h6 className="text-muted f-w-400">
                              {customer.id}
                            </h6>
                          </div>
                          <div className="col-sm-6">
                            <h5 className="f-w-600" style={{ color: "purple" }}>
                              Account Number
                            </h5>
                            <h6 className="text-muted f-w-400">
                              {customer.accountNumber}
                            </h6>
                          </div>
                          <div className="col-sm-6">
                            <h5 className="f-w-600" style={{ color: "purple" }}>
                              IFSC Code
                            </h5>
                            <h6 className="text-muted f-w-400">
                              {customer.ifsc}
                            </h6>
                          </div>
                          <div className="col-sm-6">
                            <h5 className="f-w-600" style={{ color: "purple" }}>
                              Date Of Birth
                            </h5>
                            <h6 className="text-muted f-w-400">
                              {customer.dateOfBirth}
                            </h6>
                          </div>

                          <div className="col-sm-6">
                            <br></br>
                            <br></br>
                            <h5 className="f-w-600" style={{ color: "purple" }}>
                              Aadhar Number
                            </h5>
                            <h6 className="text-muted f-w-400">
                              {customer.aadhar}
                            </h6>
                          </div>

                          <div className="col-sm-6">
                            <br></br>
                            <br></br>
                            <h5 className="f-w-600" style={{ color: "purple" }}>
                              Address
                            </h5>
                            <h6 className="text-muted f-w-400">
                              {customer.address}
                            </h6>
                          </div>
                          <br></br>
                          <br></br>
                          <br></br>
                          <br></br>
                          <br></br>
                          <br></br>
                          <br></br>
                        </div>
                        <ul className="social-link list-unstyled m-t-40 m-b-10">
                          <li>
                            <a
                              href="#!"
                              data-toggle="tooltip"
                              data-placement="bottom"
                              title=""
                              data-original-title="facebook"
                              data-abc="true"
                            >
                              <i
                                className="mdi mdi-facebook feather icon-facebook facebook"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#!"
                              data-toggle="tooltip"
                              data-placement="bottom"
                              title=""
                              data-original-title="twitter"
                              data-abc="true"
                            >
                              <i
                                className="mdi mdi-twitter feather icon-twitter twitter"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#!"
                              data-toggle="tooltip"
                              data-placement="bottom"
                              title=""
                              data-original-title="instagram"
                              data-abc="true"
                            >
                              <i
                                className="mdi mdi-instagram feather icon-instagram instagram"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br></br>
            <br></br>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserData;
