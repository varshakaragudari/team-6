import React from "react";
import "./LoanInformation.css";

function LoanInformation({ loandata }) {
  return (
    <div className="loan-information-container">
      <div className="d-flex justify-content-center">
        <div className="h-100 p-5 text-black bg-light loan-definition">
          <h1 className="display-5 fw-bold lh-1 mb-3 natwest-text-color">
            What is a {loandata?.loanType} loan?
          </h1>
          <p>{loandata?.content}</p>
          <br />
          <h2 className="fw-bold natwest-text-color">
            What do you need to know about this loan?
          </h2>
          <ul className="loan-information-list">
            <li>
              Your age should be in between {loandata?.minimumAge} and{" "}
              {loandata?.maximumAge}.
            </li>
            <li>
              According to your income, you can take a minimum{" "}
              {loandata?.loanType} loan of amount ₹{loandata?.minimumPrincipal}{" "}
              and maximum of ₹{loandata?.maximumPrincipal}. But keep in mind
              that the maximum loan you can take depends on your income.
            </li>
            <li>
              You can take out a {loandata?.loanType} loan for minimum tenure of{" "}
              {loandata?.minimumTenure} months and a maximum tenure of{" "}
              {loandata?.maximumTenure} months.
            </li>
            <li>
              The interest rate of {loandata?.loanType} loan is{" "}
              {loandata?.interestRate}% per annum.
            </li>
            <li>
              Natwest will charge a processing fee of {loandata?.processingFee}%
              which will be included in monthly installments.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default LoanInformation;
