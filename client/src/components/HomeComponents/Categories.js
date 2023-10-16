import React from "react";
import { ThemeProvider } from "@mui/material";
import Theme from "../Themes/Theme";

export default function Categories() {
  return (
    <ThemeProvider theme={Theme}>
      <div className="container marketing my-5">
        <div
          className="row shadow-lg bg-white rounded"
          style={{ backgroundColor: "purple" }}
        >
          <h1
            className="text-center mt-5"
            style={{ color: Theme.palette.primary.main }}
          >
            <strong>Loans We Provide</strong>
          </h1>

          <div className="col-lg-6  text-center ">
            <br></br>
            <br></br>
            <img
              className="rounded-circle mx-auto"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf_qFkdDuglTB_q1aBCd54ykTKkSHP04T4fg&usqp=CAU"
              alt="Generic placeholder image"
              width="140"
              height="140"
            />
            <h2 style={{ color: Theme.palette.primary.main }}>Personal Loan</h2>
            <br></br>
            <p>
              Whether it's planned events like weddings, vacations, or home
              renovations, or unexpected emergencies such as medical procedures,
              our Personal Loan makes life easier. With a seamless online
              application process, we ensure quick and hassle-free access to
              funds, making it the ideal credit option for you.
            </p>
            {/* <p><a className="btn text-white" href="#" role="button" style={{ backgroundColor: Theme.palette.primary.main }}>View details</a></p> */}
            <br></br>
            <br></br>
          </div>
          <div className="col-lg-6  text-center mt-1">
            <br></br>
            <br></br>
            <img
              className="rounded-circle mx-auto"
              src="https://www.idfcfirstbank.com/content/dam/idfcfirstbank/images/blog/finance/how-to-get-a-business-loan-717x404.jpg"
              alt="Generic placeholder image"
              width="140"
              height="140"
            />
            <h2 style={{ color: Theme.palette.primary.main }}>Business Loan</h2>
            <br></br>
            <p>
              For every business, funding is a key concern and a requisite for
              scaling up. But getting loans is not that simple, especially for
              small businesses. This is where Natwest Bank MyBusiness promises
              to support. Our financial services are aimed at helping you
              overcome financial constraints and realise your business goals.
            </p>
            {/* <p><a className="btn text-white" href="#" role="button" style={{ backgroundColor: Theme.palette.primary.main }}>View details</a></p> */}
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
