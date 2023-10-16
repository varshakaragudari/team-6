import React, { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import { useDispatch } from "react-redux";
import { postLoginInData } from "../../ReduxThunk/Action";
import "./LoginPage.css"; // Import the CSS file
import { Link, useNavigate } from "react-router-dom";

export default function LoginPage({
  adminLogin,
  setAdminLogin,
  login,
  onLoginClick,
  OnSignupClick,
  setLogin,
}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let user = useSelector((state) => state.data.currentUser);
  console.log(user);

  const [formData, setFormData] = useState({
    userId: "",
    userName: "",
    password: "",
  });

  const [alert, setAlert] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const checkLogin = () => {
    onLoginClick();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    console.log(formData.userId);
    console.log(formData.password);
    if (
      formData &&
      formData.userId === "Admin" &&
      formData.userName === "Admin" &&
      formData.password === "Admin"
    ) {
      setAdminLogin(true);
      navigate("/admin");
    } else {
      try {
        // Make a GET request to retrieve user details based on userId

        // const response = await axios.get(
        //   `http://localhost:8081/customers/${formData.userId}`
        // );
        // const user = response.data;

        // if (user && user.password === formData.password) {
        //   dispatch(postLoginInData(response.data));
        //   checkLogin();
        //   setMessage("Successfully Logged In");
        //   setAlert(true);
        // }
        // else {
        //   setMessage("Incorrect username or password");
        //   setAlert(true);
        // }

        let jwtform = {
          userName: formData.userName,
          password: formData.password,
        };

        const response = await axios.post(
          "http://localhost:9090/authenticate",
          jwtform
        );
        console.log(response);
        if (response.status === 200) {
          try {
            const res = await axios.get(
              "http://localhost:9090/customers/" + formData.userId
            );
            console.log(res);
            dispatch(postLoginInData(res.data));
            checkLogin();
            setMessage("Successfully Logged In");
            setAlert(true);
          } catch (e) {
            console.log(e);
            setMessage("Incorrect UserID");
            setAlert(true);
          }
        }
      } catch (error) {
        setMessage("Error in UserName or Password");
        setAlert(true);
      }
    }
  };

  return (
    <div>
      {/* <header className="p-3 bg-color text-white">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start navheight">
            
          </div>
        </div>
      </header> */}

      <div className="container mx-auto my-5">
        {alert && message === "Successfully Logged In" ? (
          <div
            class=" w-75 mx-auto alert alert-success alert-dismissible fade show d-flex justify-content-between"
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
                setMessage(false);
                navigate("/loans");
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
        <div className="row d-flex justify-content-center">
          <div className="col-3 text-center">
            <img
              className="mt-5"
              src="https://www.natwest.com/content/dam/natwest/personal/fraud-and-security/olb-banners/nw-security-banner-vishing-194x443.gif"
              alt="Security Banner"
            />
          </div>

          <div className="col-6">
            <h2 className="text-center txt-color">Online Banking Services</h2>

            <form
              onSubmit={handleSubmit}
              className="p-4 p-md-5 rounded-3 logform"
            >
              <div className="form mb-3">
                <label className="body" htmlFor="floatingInput">
                  User Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="userName"
                  value={formData.userName}
                  onChange={handleChange}
                  placeholder=""
                />
              </div>
              <div className="form mb-3">
                <label className="body" htmlFor="floatingInput">
                  User ID
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="userId"
                  value={formData.userId}
                  onChange={handleChange}
                  placeholder=""
                />
              </div>

              <div className="form mb-3">
                <label className="body" htmlFor="floatingPassword">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder=""
                />
              </div>

              <div className="mb-3">
                <p className="body">
                  Only individuals who have a NatWest account and authorised
                  access to Online Banking should proceed beyond this point. For
                  the security of customers, any unauthorised attempt to access
                  customer bank information will be monitored and may be subject
                  to legal action.
                </p>
              </div>

              {/* #ffffff */}
              {/* #ad1982 */}

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
                Log in
              </button>

              <div className="text-center body">
                Not a registered user?{" "}
                <Link to="/register" className="link">
                  Register
                </Link>
              </div>
              <div className="text-center body">
                <Link to="/" className="link">
                  Forgot Your Credentials
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
