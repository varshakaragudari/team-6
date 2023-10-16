import Accordion from "react-bootstrap/Accordion";
import "./LoanTypes.css";
import "font-awesome/css/font-awesome.min.css";

import React, { useState } from "react";

import SchoolIcon from "@mui/icons-material/School";
import HouseIcon from "@mui/icons-material/House";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import PersonIcon from "@mui/icons-material/Person";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";

import StoreIcon from "@mui/icons-material/Store";
import BusinessIcon from "@mui/icons-material/Business";
import ApartmentIcon from "@mui/icons-material/Apartment";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import MoneyIcon from "@mui/icons-material/Money";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import { Link, Routes } from "react-router-dom";

function LoanTypes() {
  const bodyStyle = {
    backgroundColor: "#5A287D", // Light purple background color for accordion bodies
    color: "white", // Text color for accordion bodies
  };

  const aboutUsStyle = {
    backgroundColor: "#5A287D", // Purple background color for the "About Us" section
    color: "white", // Text color for the "About Us" section
    padding: "0px", // Add padding for spacing
    textAlign: "center", // Center align the content
    margin: 0 /* Remove default margin */,
  };

  return (
    <div>
      <br></br>

      <div className="d-flex flex-column">
        <div className="container mx-auto shadow-lg bg-body rounded my-5">
          <div className="container p-3">
            <h3 style={{ color: "#5A287D" }}>Individual Loans</h3>
          </div>
          <div className="row container mx-auto pb-4">
            <div className="col-md-2 col-4  p-2">
              <Link
                className="a justify-content-center d-flex align-items-center flex-column py-3"
                to={"education"}
              >
                <SchoolIcon style={{ color: "#5A287D" }} fontSize="large" />
                <h6>Educational</h6>
              </Link>
            </div>
            <div className="col-md-2 col-4  p-2">
              <Link
                className="a justify-content-center d-flex align-items-center flex-column py-3"
                to={"housing"}
              >
                <HouseIcon style={{ color: "#5A287D" }} fontSize="large" />
                <h6>Housing</h6>
              </Link>
            </div>
            <div className="col-md-2 col-4  p-2">
              <Link
                className="a justify-content-center d-flex align-items-center flex-column py-3"
                to={"vehicle"}
              >
                <DirectionsCarIcon
                  style={{ color: "#5A287D" }}
                  fontSize="large"
                />
                <h6>Vehicle Loan</h6>
              </Link>
            </div>
            <div className="col-md-2 col-4  p-2">
              <Link
                className="a justify-content-center d-flex align-items-center flex-column py-3"
                to={"medical"}
              >
                <LocalHospitalIcon
                  style={{ color: "#5A287D" }}
                  fontSize="large"
                />
                <h6>Medical</h6>
              </Link>
            </div>
            <div className="col-md-2 col-4  p-2">
              <Link
                className="a justify-content-center d-flex align-items-center flex-column py-3"
                to={"gold"}
              >
                <CurrencyRupeeIcon
                  style={{ color: "#5A287D" }}
                  fontSize="large"
                />
                <h6>Gold Loan</h6>
              </Link>
            </div>
            <div className="col-md-2 col-4  p-2">
              <Link
                className="a justify-content-center d-flex align-items-center flex-column py-3"
                to={"personal"}
              >
                <PersonIcon style={{ color: "#5A287D" }} fontSize="large" />
                <h6>Personal Loans</h6>
              </Link>
            </div>
          </div>
        </div>
        <div className="container mx-auto shadow-lg bg-body rounded my-5">
          <div className="container p-3">
            <h3 style={{ color: "#5A287D" }}>Business Loans</h3>
          </div>
          <div className="row container mx-auto pb-4">
            <div className="col-md-2 col-4  p-2">
              <Link
                className="a justify-content-center d-flex align-items-center flex-column py-3"
                to={"smallbusiness"}
              >
                <StoreIcon style={{ color: "#5A287D" }} fontSize="large" />
                <h6>Small Term</h6>
              </Link>
            </div>
            <div className="col-md-2 col-4  p-2">
              <Link
                className="a justify-content-center d-flex align-items-center flex-column py-3"
                to={"longbusiness"}
              >
                <BusinessIcon style={{ color: "#5A287D" }} fontSize="large" />
                <h6>Long Term</h6>
              </Link>
            </div>
            <div className="col-md-2 col-4  p-2">
              <Link
                className="a justify-content-center d-flex align-items-center flex-column py-3"
                to={"realestate"}
              >
                <ApartmentIcon style={{ color: "#5A287D" }} fontSize="large" />
                <h6>Commercial Real Estate</h6>
              </Link>
            </div>
            <div className="col-md-2 col-4  p-2">
              <Link
                className="a justify-content-center d-flex align-items-center flex-column py-3"
                to={"startup"}
              >
                <AddBusinessIcon
                  style={{ color: "#5A287D" }}
                  fontSize="large"
                />
                <h6>Startup loan</h6>
              </Link>
            </div>
            <div className="col-md-2 col-4  p-2">
              <Link
                className="a justify-content-center d-flex align-items-center flex-column py-3"
                to={"workingcapital"}
              >
                <MoneyIcon style={{ color: "#5A287D" }} fontSize="large" />
                <h6>Working capital loan</h6>
              </Link>
            </div>
            <div className="col-md-2 col-4  p-2">
              <Link
                className="a justify-content-center d-flex align-items-center flex-column py-3"
                to={"businessacquisition"}
              >
                <BusinessCenterIcon
                  style={{ color: "#5A287D" }}
                  fontSize="large"
                />
                <h6>Business Acquisition Loans</h6>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <br></br>
      {/* <button className="#5A287D-button">User Dashboard</button> */}

      <h1 style={{ color: "#5A287D", margin: "40px" }}>FAQ's</h1>
      <br></br>
      <div style={{ paddingLeft: "40px", paddingRight: "40px" }}>
        <Accordion
          defaultActiveKey={[""]}
          alwaysOpen
          className="custom-accordion"
        >
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <p style={{ color: "#5A287D", fontWeight: "bold" }}>
                What do I need to apply for a loan online?
              </p>
            </Accordion.Header>

            <Accordion.Body style={bodyStyle}>
              You need: your Online Banking log-in details, your addresses for
              the last three years and your income, spending and employment
              info.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <p style={{ color: "#5A287D", fontWeight: "bold" }}>
                When Could I get my loan?
              </p>
            </Accordion.Header>
            <Accordion.Body style={bodyStyle}>
              You could get your money the same day if: you apply online ,
              you've been accepted , you sign your documents by 5.45pm Monday to
              Friday (excluding bank holidays). It might take a bit longer if we
              need to get in touch with you for more info.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              <p style={{ color: "#5A287D", fontWeight: "bold" }}>
                Can I apply for a loan in the mobile app?
              </p>
            </Accordion.Header>
            <Accordion.Body style={bodyStyle}>
              Yes and it's very simple. All you need to do is: Log in to our
              mobile app. Tap 'Apply' in the bottom right hand corner. And go to
              'Loans'. Follow the information on the page and we will guide you
              to complete your loan application. Our mobile app is available to
              customers with compatible iOS and Android devices.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              <p style={{ color: "#5A287D", fontWeight: "bold" }}>
                What can't I use a loan for ?
              </p>
            </Accordion.Header>
            <Accordion.Body style={bodyStyle}>
              We’re responsible lenders who care about doing the right thing by
              you. This includes keeping you and your money safe and making sure
              you only borrow what you can afford to pay back. So, you can’t use
              your loan for some things, including: buying property, a static
              caravan, or land, a deposit for property, a static caravan, or
              land, household bills, rent or mortgage payments, car tax,
              Business, late payments, tax avoidance schemes, court or
              solicitors’ fees, gambling.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>
              <p style={{ color: "#5A287D", fontWeight: "bold" }}>
                Can I repay my loan early?
              </p>
            </Accordion.Header>
            <Accordion.Body style={bodyStyle}>
              It’s important to remember that if you repay your loan early, you
              will be charged an early repayment fee. The amount you will be
              charged will be equal to 58 days’ interest on the amount you repay
              early (28 days’ interest if the period of the loan is one year or
              less). If there is less than 58 days (or 28 days if applicable)
              remaining on the loan, the calculation will be based on the actual
              number of days remaining. This is in addition to your outstanding
              loan amount and any outstanding interest.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>
              <p style={{ color: "#5A287D", fontWeight: "bold" }}>
                Is a loan best way for me to borrow money?
              </p>
            </Accordion.Header>
            <Accordion.Body style={bodyStyle}>
              As well as loans, we offer credit cards and overdrafts. So, which
              is best for you? Our Borrowing Options guide will help you figure
              out what type of lending will suit you best.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6">
            <Accordion.Header>
              <p style={{ color: "#5A287D", fontWeight: "bold" }}>
                Can I borrow for more than one purpose?
              </p>
            </Accordion.Header>
            <Accordion.Body style={bodyStyle}>
              Yes. For example, you might want to use your loan to consolidate
              your debt (rolling all your debt payments into one) while also
              improving your home. As responsible lenders, we ask you why you
              want to borrow money from us. Please choose the option you’ll
              spend most of your loan on.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="7">
            <Accordion.Header>
              <p style={{ color: "#5A287D", fontWeight: "bold" }}>
                What is a loan ?
              </p>
            </Accordion.Header>
            <Accordion.Body style={bodyStyle}>
              A loan is a simple way for you to borrow money. You could borrow
              between £1,000 and £50,000 from us (depending on what you want the
              money for). With a loan, you get all your loan money in your bank
              account at once. You then pay it back each month, plus interest.
              You can take from one to 10 years to pay us back – depending on
              what you need the loan for. So, why come to us for a loan? We
              think our loans are the best (and it‘s not just us saying that).
              Defaqto gives us the maximum five stars. What’s more, you can
              apply in minutes. And could get money in your account the same
              day.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <br></br>
      <br></br>

      {/* <div style={aboutUsStyle}>
        <h2>Contact Us</h2>
        <p>
          We are a loan bank providing financial solutions to meet your needs.
        </p>

        <div>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i
              className="fa fa-facebook  fa-2x"
              style={{ marginRight: "40px", color: "white" }}
            ></i>
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i
              className="fa fa-instagram  fa-2x"
              style={{ marginRight: "40px", color: "white" }}
            ></i>
          </a>
          <a href="mailto:LoanPayment@gmail.com">
            <i className="fa fa-envelope  fa-2x" style={{ color: "white" }}></i>
          </a>
        </div>
      </div> */}
    </div>
  );
}

export default LoanTypes;
