import React, { useEffect } from "react";
import "./UserProfile.css";
import { useDispatch, useSelector } from "react-redux";
import { getLoginmydata } from "../../ReduxThunk/Action";

function UserProfile() {
  const UserData = useSelector((state) => state.data.currentUser);
  console.log(UserData);
  return (
    <div className="hello">
      {
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
                          <h6 className="f-w-600" style={{ color: "white" }}>
                            Name
                          </h6>
                          <h3>{UserData.customerName}</h3>
                          <h4>{UserData.userName}</h4>
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
                              <h5
                                className="f-w-600"
                                style={{ color: "purple" }}
                              >
                                Email
                              </h5>
                              <h6 className="text-muted f-w-400">
                                {UserData.email}
                              </h6>
                            </div>
                            <div className="col-sm-6">
                              <h5
                                className="f-w-600"
                                style={{ color: "purple" }}
                              >
                                Phone
                              </h5>
                              <h6 className="text-muted f-w-400">
                                {UserData.phoneNumber}
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
                              <h5
                                className="f-w-600"
                                style={{ color: "purple" }}
                              >
                                Customer ID
                              </h5>
                              <h6 className="text-muted f-w-400">
                                {UserData.id}
                              </h6>
                            </div>
                            <div className="col-sm-6">
                              <h5
                                className="f-w-600"
                                style={{ color: "purple" }}
                              >
                                Account Number
                              </h5>
                              <h6 className="text-muted f-w-400">
                                {UserData.accountNumber}
                              </h6>
                            </div>
                            <div className="col-sm-6">
                              <h5
                                className="f-w-600"
                                style={{ color: "purple" }}
                              >
                                IFSC Code
                              </h5>
                              <h6 className="text-muted f-w-400">
                                {UserData.ifsc}
                              </h6>
                            </div>
                            <div className="col-sm-6">
                              <h5
                                className="f-w-600"
                                style={{ color: "purple" }}
                              >
                                Date Of Birth
                              </h5>
                              <h6 className="text-muted f-w-400">
                                {UserData.dateOfBirth}
                              </h6>
                            </div>

                            <div className="col-sm-6">
                              <br></br>
                              <br></br>
                              <h5
                                className="f-w-600"
                                style={{ color: "purple" }}
                              >
                                Aadhar Number
                              </h5>
                              <h6 className="text-muted f-w-400">
                                {UserData.aadhar}
                              </h6>
                            </div>

                            <div className="col-sm-6">
                              <br></br>
                              <br></br>
                              <h5
                                className="f-w-600"
                                style={{ color: "purple" }}
                              >
                                Address
                              </h5>
                              <h6 className="text-muted f-w-400">
                                {UserData.address}
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
      }
    </div>
  );
}

export default UserProfile;
