import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./LoanApplicationForm.css";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function LoanApplicationForm({ loandata }) {
  const navigate = useNavigate();

  const [income, setIncome] = useState(loandata?.minimumIncome_minimumRevenue);
  const [principal, setPrincipal] = useState(loandata?.minimumPrincipal);
  const [doc, setDoc] = useState("");
  const [age, setAge] = useState(loandata?.minimumAge);
  const [reason, setReason] = useState("");
  const [loanYears, setLoanYears] = useState(2);
  const [loanMonths, setLoanMonths] = useState(0);
  const [totalLoanMonths, setTotalLoanMonths] = useState(24);
  const [incomeErrorMessage, setIncomeErrorMessage] = useState("");
  const [principalErrorMessage, setPrincipalErrorMessage] = useState("");
  const [tenureErrorMessage, setTenureErrorMessage] = useState("");
  const [reasonErrorMessage, setReasonErrorMessage] = useState("");
  const [docErrorMessage, setDocErrorMessage] = useState("");
  const [ageErrorMessage, setAgeErrorMessage] = useState("");
  const [ageTouched, setAgeTouched] = useState(false);
  const [reasonTouched, setReasonTouched] = useState(false);
  const [incomeTouched, setIncomeTouched] = useState(false);
  const [principalTouched, setPrincipalTouched] = useState(false);
  const [docTouched, setDocTouched] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    setIsFormValid(
      !ageErrorMessage &&
        !incomeErrorMessage &&
        !principalErrorMessage &&
        !tenureErrorMessage &&
        !reasonErrorMessage &&
        !docErrorMessage &&
        ageTouched &&
        reasonTouched &&
        incomeTouched &&
        principalTouched &&
        docTouched
    );
  }, [
    ageErrorMessage,
    incomeErrorMessage,
    principalErrorMessage,
    tenureErrorMessage,
    reasonErrorMessage,
    docErrorMessage,
    ageTouched,
    reasonTouched,
    incomeTouched,
    principalTouched,
    docTouched,
  ]);

  let user = useSelector((state) => state.data.currentUser);
  console.log(user);

  const handleAgeChange = (event) => {
    const ageInput = event.target.value;
    setAgeTouched(true);
    if (ageInput === "") {
      setAge("");
    } else {
      const age = parseInt(ageInput);
      setAge(age);
      validateAge(age);
    }
  };

  const handleYearsChange = (event) => {
    const years = parseInt(event.target.value);
    setLoanYears(years);
    const months = loanMonths;
    setTotalLoanMonths(years * 12 + months);
    validateTenure(years * 12 + loanMonths);
  };

  const handleMonthsChange = (event) => {
    const inputMonths = parseInt(event.target.value);
    setLoanMonths(inputMonths);
    const months = totalLoanMonths;
    if (inputMonths === 0) {
      setTotalLoanMonths(months - 6);
    } else {
      setTotalLoanMonths(months + parseInt(event.target.value));
    }
    validateTenure(totalLoanMonths + inputMonths);
  };

  const handleIncomeChange = (event) => {
    const incomeInput = event.target.value;
    setIncomeTouched(true);
    if (incomeInput === "") {
      setIncome("");
    } else {
      const userIncome = parseInt(incomeInput);
      if (userIncome < loandata?.minimumIncome_minimumRevenue) {
        setIncomeErrorMessage("Income too less.");
      } else {
        setIncomeErrorMessage("");
      }
      setIncome(userIncome);
    }
  };

  const handlePrincipalChange = (event) => {
    const principalInput = event.target.value;
    setPrincipalTouched(true);
    if (principalInput === "") {
      setPrincipal("");
    } else {
      const userPrincipal = parseInt(principalInput);
      if (
        userPrincipal < parseInt(loandata?.minimumPrincipal) ||
        userPrincipal > parseInt(loandata?.maximumPrincipal)
      ) {
        setPrincipalErrorMessage(
          "Principal not in the given range. Please input according to the range mentioned in loan information."
        );
      } else {
        setPrincipalErrorMessage("");
      }
      setPrincipal(userPrincipal);
    }
  };

  const validateAge = (age) => {
    const minAge = parseInt(loandata?.minimumAge);
    const maxAge = parseInt(loandata?.maximumAge);
    if (age < loandata?.minimumAge || age > loandata?.maximumAge) {
      setAgeErrorMessage(
        `Your age should be between ${minAge} and ${maxAge} years.`
      );
    } else {
      setAgeErrorMessage("");
    }
  };

  const validateTenure = (totalMonths) => {
    const minTenure = parseInt(loandata?.minimumTenure);
    const maxTenure = parseInt(loandata?.maximumTenure);
    if (totalMonths < minTenure || totalMonths > maxTenure) {
      setTenureErrorMessage(
        `Loan tenure should be between ${minTenure} and ${maxTenure} months.`
      );
    } else {
      setTenureErrorMessage("");
    }
  };

  const handleDocChange = (event) => {
    const doc = event.target.value;
    setDocTouched(true);
    if (doc === "") {
      setDocErrorMessage("PLease enter a link to your access your documents");
    } else {
      setDocErrorMessage("");
    }
    setDoc(doc);
  };

  const handleReasonChange = (event) => {
    const reason = event.target.value;
    setReasonTouched(true);
    if (reason === "") {
      setReasonErrorMessage("PLease state a reason before proceeding.");
    } else {
      setReasonErrorMessage("");
    }
    setReason(reason);
  };

  const postData = async () => {
    console.log("postdata called");
    try {
      const loan = {
        customer: user,
        loanType: loandata?.loanType,
        rateOfInterest: loandata?.interestRate,
        loanDate: new Date(),
        age: age,
        income: income,
        loanAmount: principal,
        docs: doc,
        reasonForLoan: reason,
        tenure: totalLoanMonths / 12,
        installmentAmount:
          (principal +
            (principal * loandata?.interestRate * (totalLoanMonths / 12)) /
              100) /
          totalLoanMonths,
        totalNumberOfInstallments: totalLoanMonths,
        totalNumberOfInstallmentsDone: 0,
        approvedStatus: "Pending",
      };
      console.log(loan);
      const response = await axios.post("http://localhost:8080/loan", loan);
      console.log("Application submitted successfully.", response.data);
    } catch (error) {
      console.error(
        "Error submitting loan application. Check if your spring boot app is running or there is a CORS problem."
      );
    }
  };

  const handleSubmitWhenFormValid = () => {
    console.log("handlesubmitwhenformvalid called");
    if (isFormValid) {
      toast.info(
        ({ closeToast }) => (
          <div className="submission-confirmation-message">
            Are you sure you want to submit?
            <br />
            <button
              type="button"
              className="confirm-button"
              onClick={() => {
                closeToast();
                postData();
                navigate("/user");
              }}
            >
              Yes, submit.
            </button>
            <button
              className="cancel-button"
              onClick={() => {
                closeToast();
              }}
            >
              No, take me back!
            </button>
          </div>
        ),
        {
          position: toast.POSITION.TOP_CENTER,
          autoClose: false,
          closeButton: true,
          hideProgressBar: false,
          className: "submission-confirmation-toast",
        }
      );
    } else {
      toast.info(
        ({ closeToast }) => (
          <div className="submission-confirmation-message">
            <p>Invalid details!</p>
          </div>
        ),
        {
          position: toast.POSITION.TOP_CENTER,
          autoClose: false,
          closeButton: true,
          hideProgressBar: false,
          className: "submission-confirmation-toast",
        }
      );
    }
  };

  return (
    <div className="loan-application-form-container">
      <h1 className="apply-for-loan">
        <b>Apply for loan</b>
      </h1>
      <div className="form-content-container">
        <div className="mx-auto w-75 application-form-container">
          <form>
            <label className="input-label">How old are you (in years)? </label>
            <div className="input-container">
              <input
                className="input-field"
                type="text"
                placeholder="Enter your age..."
                value={age}
                onChange={handleAgeChange}
              ></input>
              {ageErrorMessage && ageTouched && (
                <div className="validation-message">{ageErrorMessage}</div>
              )}
            </div>
            <label className="input-label">Why do you need the loan? </label>
            <div className="input-container">
              <input
                className="input-field"
                type="text"
                placeholder='Type your answer, for e.g., "I need the loan for buying a phone."'
                value={reason}
                onChange={handleReasonChange}
              />
              {reasonErrorMessage && reasonTouched && (
                <div className="validation-message">{reasonErrorMessage}</div>
              )}
            </div>
            <label className="input-label">
              How much do you earn (per annum)?{" "}
            </label>
            <div className="input-container">
              <div className="currency-container">
                <span className="currency-symbol">₹</span>
                <input
                  className="input-field currency-input"
                  type="text"
                  placeholder="Type your annual income..."
                  value={income}
                  onChange={handleIncomeChange}
                />
                {incomeErrorMessage && incomeTouched && (
                  <div className="validation-message">{incomeErrorMessage}</div>
                )}
              </div>
            </div>
            <label className="input-label">
              How much would you like to borrow?{" "}
            </label>
            <div className="input-container">
              <div className="currency-container">
                <span className="currency-symbol">₹</span>
                <input
                  className="input-field currency-input"
                  type="text"
                  placeholder="Enter amount..."
                  value={principal}
                  onChange={handlePrincipalChange}
                />
                {principalErrorMessage && principalTouched && (
                  <div className="validation-message">
                    {principalErrorMessage}
                  </div>
                )}
              </div>
            </div>
            <label className="input-label">
              How long would you like to repay?{" "}
            </label>
            <div className="input-container">
              <div className="loan-period-container">
                <select
                  className="loan-period-select"
                  value={loanYears}
                  onChange={handleYearsChange}
                >
                  <option value="0">0 years</option>
                  <option value="1">1 year</option>
                  <option value="2">2 years</option>
                  <option value="3">3 years</option>
                  <option value="4">4 years</option>
                  <option value="5">5 years</option>
                  <option value="6">6 years</option>
                  <option value="7">7 years</option>
                  <option value="8">8 years</option>
                  <option value="9">9 years</option>
                  <option value="10">10 years</option>
                </select>
                <select
                  className="loan-period-select"
                  value={loanMonths}
                  onChange={handleMonthsChange}
                >
                  <option value="0">0 months</option>
                  <option value="6">6 months</option>
                </select>
                {tenureErrorMessage && (
                  <div className="validation-message">{tenureErrorMessage}</div>
                )}
                <span>That accounts to {totalLoanMonths} months.</span>
              </div>
            </div>
            <label className="input-label">
              Kindly paste a google doc link of your income proof below.
            </label>
            <div className="input-container">
              <input
                className="input-field"
                type="text"
                placeholder="Paste link..."
                value={doc}
                onChange={handleDocChange}
              />
              {docErrorMessage && docTouched && (
                <div className="validation-message">{docErrorMessage}</div>
              )}
            </div>
            <button
              className="submission-button"
              type="button"
              onClick={handleSubmitWhenFormValid}
            >
              Submit Loan Application
            </button>
            <br />
          </form>
        </div>
        <div className="information-summary-container">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSddrcl66OPBEhJrVKowV17rk6-JTS56vgD4A&usqp=CAU"
            alt="Alert"
            width={"30px"}
          />
          <h4
            style={{
              color: "#5A287D",
              display: "inline",
              margin: "10px",
              marginTop: "10px",
            }}
          >
            <b>Check the eligibility below before applying</b>
          </h4>
          <br />
          <br />
          <ul className="summary-list">
            <li>
              <div className="alert alert-success" role="alert">
                Age range: {loandata?.minimumAge} - {loandata?.maximumAge} years
              </div>
            </li>
            <li>
              <div className="alert alert-primary" role="alert">
                Amount range: ₹{loandata?.minimumPrincipal} - ₹
                {loandata?.maximumPrincipal}
              </div>
            </li>
            <li>
              <div className="alert alert-danger" role="alert">
                Tenure range: {loandata?.minimumTenure} -{" "}
                {loandata?.maximumTenure} months
              </div>
            </li>
            <li>
              <div className="alert alert-warning" role="alert">
                Interest rate: {loandata?.interestRate}% p.a.
              </div>
            </li>
            <li>
              <div className="alert alert-info" role="alert">
                Processing fee: {loandata?.processingFee}%
              </div>
            </li>
          </ul>
          <div className="fact-container">
            <h3>
              <b>You should also know...</b>
            </h3>
            <p style={{ fontSize: "15px" }}>
              The rate you pay depends on your circumstances and loan amount and
              may differ from the Representative APR. We will never offer you a
              rate exceeding 29.9% p.a. (fixed), regardless of loan size.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoanApplicationForm;
