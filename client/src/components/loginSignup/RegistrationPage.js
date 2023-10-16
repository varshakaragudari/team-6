import React, { useState } from "react";
import axios from "axios";
import "./RegistrationPage.css";
import { postSignInData } from "../../ReduxThunk/Action";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

export default function RegistrationPage({ OnSignupClick }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let user = useSelector((state) => state.data.currentUser);
  console.log(user);

  const [custid, setCustid] = useState(0);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    aadharNumber: "",
    dateOfBirth: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    zipCode: "",
    email: "",
    userName: "",
    password: "",
    confirmPassword: "",
  });

  const [alert, setAlert] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setMessage("Passwords do not match. Please re-enter.");
      setAlert(true);
      return;
    }

    // data object with the fields you want to send to the backend
    const data = {
      id: formData.id,
      accountNumber: formData.account_number,
      customerName: formData.firstName + " " + formData.lastName,
      phoneNumber: formData.phoneNumber,
      aadhar: formData.aadharNumber,
      dateOfBirth: formData.dateOfBirth,
      address:
        formData.addressLine1 +
        " " +
        formData.addressLine2 +
        " " +
        formData.city +
        " " +
        formData.state +
        " " +
        formData.zipCode,
      email: formData.email,
      userName: formData.userName,
      password: formData.password,
    };

    try {
      // Send a POST request to your Spring Boot backend
      const response = await axios.post(
        "http://localhost:9090/customers",
        data
      );

      // Check the response status
      if (response.status === 200) {
        console.log("Customer data saved successfully.");

        dispatch(postSignInData(data));
        // OnSignupClick();
        console.log(response.data);
        setCustid(response.data.id);
        setFormData({
          firstName: "",
          lastName: "",
          phoneNumber: "",
          aadharNumber: "",
          dateOfBirth: "",
          addressLine1: "",
          addressLine2: "",
          city: "",
          state: "",
          zipCode: "",
          email: "",
          userName: "",
          password: "",
          confirmPassword: "",
        });
        // setLogin(true);
        setMessage("Successfully Registered");
        setAlert(true);
      } else {
        setMessage("Error saving customer data.");
        setAlert(true);
        console.error("Error saving customer data.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <div className="container mx-auto my-5">
        {alert && message === "Successfully Registered" ? (
          <div
            class=" w-75 mx-auto alert alert-success alert-dismissible fade show d-flex justify-content-between"
            role="alert"
          >
            <div>
              <strong>{message}</strong> : {custid}
            </div>
            <button
              type="button"
              className="close btn btn-secondary btn-sm"
              data-dismiss="alert"
              aria-label="Close"
              onClick={() => {
                setMessage(false);
                navigate("/login");
              }}
            >
              Click Here
            </button>
          </div>
        ) : alert ? (
          <div
            class=" w-75 mx-auto alert alert-danger alert-dismissible fade show d-flex justify-content-between"
            role="alert"
          >
            <div>
              <strong>{message}</strong>
            </div>
            <button
              type="button"
              className="close btn btn-secondary btn-sm"
              data-dismiss="alert"
              aria-label="Close"
              onClick={() => {
                setAlert(false);
              }}
            >
              Click Here
            </button>
          </div>
        ) : (
          <div></div>
        )}
        <div className="container mx-auto align-items-center d-flex flex-column">
          <h2 className="text-center txt-color">Register</h2>

          <form
            onSubmit={handleSubmit}
            className="p-4 p-md-5 rounded-3 logform"
          >
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="firstName">First name</label>
                <input
                  type="text"
                  className="form-control"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder=""
                  required
                />
                <div className="invalid-feedback">
                  Valid first name is required.
                </div>
              </div>

              <div className="col-md-6 mb-3">
                <label htmlFor="lastName">Last name</label>
                <input
                  type="text"
                  className="form-control"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder=""
                  required
                />
                <div className="invalid-feedback">
                  Valid last name is required.
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="aadhar">Aadhar Number</label>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    name="aadharNumber"
                    value={formData.aadharNumber}
                    onChange={handleChange}
                    pattern="[0-9]{12}"
                    title="Your Aadhar Number must be a 12-digit number."
                    placeholder=""
                    required
                  />
                  <div className="invalid-feedback" style={{ width: "100%" }}>
                    Your Aadhar Number must be a 12-digit number.
                  </div>
                </div>
              </div>

              <div className="col-md-4 mb-3">
                <label>Enter DOB </label>
                <div
                  id="datepicker"
                  class="input-group date "
                  data-date-format="mm-dd-yyyy"
                >
                  <input
                    class="form-control"
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    readonly
                  />
                  <span class="input-group-addon">
                    <i class="glyphicon glyphicon-calendar"></i>
                  </span>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="email">Email Id</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                />
                <div className="invalid-feedback">
                  Please enter a valid email address for shipping updates.
                </div>
              </div>

              <div className="col-md-4 mb-3">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                  type="text"
                  className="form-control"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  pattern="[0-9]{10}"
                  title="Your Phone Number must be a 10-digit number."
                  placeholder=""
                  required
                />
                <div className="invalid-feedback">
                  Please enter a valid phone number.
                </div>
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                className="form-control"
                name="addressLine1"
                value={formData.addressLine1}
                onChange={handleChange}
                placeholder="House Number/street"
                required
              />
              <div className="invalid-feedback">Please enter your address.</div>
            </div>

            <div className="mb-3">
              <label htmlFor="address2">Address 2</label>
              <input
                type="text"
                className="form-control"
                name="addressLine2"
                value={formData.addressLine2}
                onChange={handleChange}
                placeholder="Apartment/Block"
              />
            </div>

            <div className="row">
              <div class="col-md-5 mb-3">
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  className="form-control"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder=""
                  required
                />
                <div className="invalid-feedback">City required.</div>
              </div>

              <div className="col-md-4 mb-3">
                <label htmlFor="state">State</label>
                <select
                  className="custom-select d-block w-100"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  required
                >
                  <option value="">Choose...</option>
                  <option>Arunachal Pradesh</option>
                  <option>Assam</option>
                  <option>Bihar</option>
                  <option>Chhattisgarh</option>
                  <option>Delhi</option>
                  <option>Goa</option>
                  <option>Gujarat</option>
                  <option>Haryana</option>
                  <option>Himachal Pradesh</option>
                  <option>Jharkhand</option>
                  <option>Karnataka</option>
                  <option>Kerala</option>
                  <option>Madhya Pradesh</option>
                  <option>Maharashtra</option>
                  <option>Manipur</option>
                  <option>Meghalaya</option>
                  <option>Mizoram</option>
                  <option>Nagaland</option>
                  <option>Odisha</option>
                  <option>Punjab</option>
                  <option>Rajasthan</option>
                  <option>Sikkim</option>
                  <option>Tamil Nadu</option>
                  <option>Telangana</option>
                  <option>Tripura</option>
                  <option>Uttar Pradesh</option>
                  <option>Uttarakhand</option>
                  <option>West Bengal</option>
                </select>
                <div className="invalid-feedback">
                  Please provide a valid state.
                </div>
              </div>

              <div className="col-md-3 mb-3">
                <label htmlFor="zip">Zip</label>
                <input
                  type="text"
                  className="form-control"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleChange}
                  placeholder=""
                  required
                />
                <div className="invalid-feedback">Zip code required.</div>
              </div>
            </div>
            <div className="col-md-9 mb-3">
              <label htmlFor="userName">Set Username</label>
              <input
                type="text"
                className="form-control"
                name="userName"
                value={formData.userName}
                onChange={handleChange}
                placeholder="Must start with a lowercase letter and contain no spaces"
                title="must start with a lowercase letter and contain no spaces"
                pattern="^[a-z][a-z0-9]*$"
                required
              />
              <div className="invalid-feedback">
                Please enter a valid UserName
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Must be atleast 8 characters, must have atleast 1 special character(!@#$) and 1 numerical value"
                title="Must be atleast 8 characters, must have atleast 1 special character(!@#$) and 1 numerical value"
                pattern="^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$"
                required
              />
              <div className="invalid-feedback">
                Please enter a valid password.
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="Confpassword">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Re-enter password"
              />
              <div className="invalid-feedback">
                Please enter a valid password.
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-lg w-100  mb-5"
              id="col"
              style={{
                backgroundColor: "#ad1982",
                color: "#ffffff",
                transition: "background-color 0.3s, color 0.3s",
              }}
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
