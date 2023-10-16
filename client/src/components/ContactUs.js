import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./ContactUs.css";
import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import Theme from "./Themes/Theme";
import myimg from "./Themes/NatWestContact.jpg";

// const images = [
//   "https://wp-krypton.s3.amazonaws.com/wp-content/uploads/sites/3/2020/07/NatWest.jpg",
//   "https://www.indusind.com/iblogs/wp-content/uploads/Best-Car-Loan-Online-IndusInd-Bank.jpg",
// ];

const BoxxTheme = createTheme({
  palette: {
    primary: {
      main: "#FFEAE6", // Your desired background color
    },
    secondary: {
      main: "#ff69b4",
    },
  },
});

const BoxTheme = createTheme({
  palette: {
    primary: {
      main: "#F2EAF9", // Your desired background color
    },
    secondary: {
      main: "#ff69b4",
    },
  },
});

export default function Coursal() {
  return (
    <>
      <div>
        {/* <div
          id="carouselExampleControls"
          className="carousel slide"
          style={{ height: "75vh", position: "relative" }}
        >
          <div className="carousel-inner" style={{ height: "80%" }}>
            {images.map((imageUrl, index) => (
              <div
                className={`carousel-item ${index === 0 ? "active" : ""}`}
                key={index}
                style={{ width: "100%" }}
              >
                <img
                  className="d-block w-100"
                  src={imageUrl}
                  alt={`Image ${index + 1}`}
                  style={{ height: "80%", width: "50%" }}
                />
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div> */}
        <div className="">
          <img src={myimg} alt="poster" className="w-100" />
        </div>
        <div className="purple---div py-3">
          <h1 className="white-text" style={{ font: "bold" }}>
            Contact Us
          </h1>
          <h6 className="white-text">
            We’re here to help – get in touch with us using the contact details
            below
          </h6>
        </div>
        <div style={{ background: BoxxTheme.palette.primary.main }}>
          <ThemeProvider theme={BoxxTheme}>
            <div className=" container mx-auto d-flex flex-column py-4 ">
              <div className="pb-3">
                <h1
                  className="text-center"
                  style={{ color: Theme.palette.primary.main }}
                >
                  <strong>Get In Touch</strong>
                </h1>
              </div>
              <div className="container row">
                <div className="col-6">
                  <h4 style={{ color: "purple" }}>
                    Customer care phone number:-{" "}
                  </h4>
                  <h7>345 788 8444</h7>
                  <h7>345 788 8455</h7>
                </div>
                <div className="col-6">
                  <h4 style={{ color: "purple" }}>Registered Office</h4>
                  <h7>
                    Registered Office: 36 St Andrew Square, Edinburgh, United
                    Kingdom, EH2 2YB
                  </h7>
                </div>
              </div>
            </div>
          </ThemeProvider>
        </div>
        <div style={{ background: BoxTheme.palette.primary.main }}>
          <ThemeProvider theme={BoxTheme}>
            <div className="container mx-auto row">
              <div className="col-7 mt-1">
                <div className="p-3">
                  <h1 style={{ color: Theme.palette.primary.main }}>
                    <strong>Or mail us at ...</strong>
                  </h1>
                  <br></br>
                  <h3
                    style={{
                      color: Theme.palette.primary.main,
                      fontWeight: "bold",
                    }}
                  >
                    info@natwest.com
                  </h3>
                </div>
              </div>

              <div className="col-4 mt-1">
                <div className="rounded-circle mx-auto p-3">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-oA7tqRfg74M3FmHtNtB-EHFwEPTR7POEQg&usqp=CAU"
                    alt="Circle Image"
                    className="rounded-circle" // Use Bootstrap's rounded-circle class
                    style={{ height: "25vh" }}
                  />
                </div>
              </div>
            </div>
          </ThemeProvider>
        </div>
      </div>
      <div></div>
    </>
  );
}
