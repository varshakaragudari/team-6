import React, { useState, useEffect } from "react";
import "./EMICalculator.css";

function EMICalculator({ loandata }) {
  const [loanAmount, setLoanAmount] = useState(10000);
  const [loanYears, setLoanYears] = useState(2);
  const [loanMonths, setLoanMonths] = useState(0);
  const [totalLoanMonths, setTotalLoanMonths] = useState(24);
  const [emi, setEmi] = useState(0);
  const [totalRepayment, setTotalRepayment] = useState(0);
  const [aprMessageVisible, setAprMessageVisible] = useState(true);

  const calculateEMI = () => {
    const tenure = totalLoanMonths / 12;
    const emiValue =
      (loanAmount + (loanAmount * loandata?.interestRate * tenure) / 100) /
      totalLoanMonths;
    setEmi(emiValue.toFixed(2));
  };

  const calculateTotalRepayment = () => {
    const tenure = totalLoanMonths / 12;
    const totalRepaymentValue =
      loanAmount + (loanAmount * loandata?.interestRate * tenure) / 100;
    setTotalRepayment(totalRepaymentValue);
  };

  useEffect(() => {
    calculateEMI();
    calculateTotalRepayment();
  }, [loanAmount, loanMonths, loanYears]);

  const handleAmountChange = (event) => {
    setLoanAmount(event.target.value);
  };

  const handleSliderChange = (event) => {
    setLoanAmount(event.target.value);
  };

  const handleIncrement = () => {
    if (loanAmount + 5000 <= loandata?.maximumPrincipal) {
      setLoanAmount(loanAmount + 5000);
    }
  };

  const handleDecrement = () => {
    if (loanAmount - 5000 <= loandata?.maximumPrincipal) {
      setLoanAmount(loanAmount - 5000);
    }
  };

  const handleYearsChange = (event) => {
    const years = parseInt(event.target.value);
    setLoanYears(years);
    const months = loanMonths;
    setTotalLoanMonths(years * 12 + months);
  };

  const handleMonthsChange = (event) => {
    const inputMonths = parseInt(event.target.value);
    setLoanMonths(inputMonths);
    const months = totalLoanMonths;
    if (inputMonths == 0) {
      setTotalLoanMonths(months - 6);
    } else {
      setTotalLoanMonths(months + parseInt(event.target.value));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="container">
      <div className="container-inner">
        <div className="emi-calculator-container">
          <h1 className="Heading">
            <b>{loandata?.loanType} loan calculator</b>
          </h1>
          <form onSubmit={handleSubmit}>
            <div>
              <div>
                <label className="loan-borrow-label">
                  <b>How much would you like to borrow?</b>
                </label>
              </div>
              <div className="input-loan-amt">
                <div className="input-loan-amt-container">
                  <span className="currency-sign">₹</span>
                  <input
                    type="text"
                    value={loanAmount}
                    onChange={handleAmountChange}
                  />
                </div>
              </div>
              <div className="slider-container">
                <div className="button-container" onClick={handleDecrement}>
                  <img
                    className="img-btn"
                    src="https://png.pngtree.com/png-vector/20190411/ourmid/pngtree-vector-minus-icon-png-image_925716.jpg"
                    alt="dec-btn"
                  />
                </div>
                <input
                  className="loan-amount-slider"
                  type="range"
                  min={loandata?.minimumPrincipal}
                  max={loandata?.maximumPrincipal}
                  step="5000"
                  value={loanAmount}
                  onChange={handleSliderChange}
                />
                <div className="button-container" onClick={handleIncrement}>
                  <img
                    className="img-btn"
                    src="https://png.pngtree.com/png-vector/20190419/ourmid/pngtree-vector-add-icon-png-image_956621.jpg"
                    alt="inc-btn"
                  />
                </div>
              </div>
              {aprMessageVisible && (
                <div className="apr-message">
                  <div class="alert alert-secondary custom-alert" role="alert">
                    <button
                      type="button"
                      class="btn-close btn-close-white"
                      data-bs-theme="light"
                      aria-label="Close"
                      onClick={() => setAprMessageVisible(false)}
                    />
                    Representative <h4 className="inline-heading">7.1%</h4> APR
                    <br />
                    The Representative APR changes based on the amount you
                    borrow.
                  </div>
                </div>
              )}
            </div>
            <div>
              <div>
                <label className="loan-borrow-label">
                  <b>How long would you like to repay?</b>
                </label>
              </div>
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
              </div>
            </div>
          </form>
        </div>
        <div className="emi-data-container">
          <h2 className="emi-data-container-heading">
            <b>Representative example</b>
          </h2>
          <div className="table-container">
            <div className="table-row">
              <div className="table-column">
                <span className="emi-data-heading">Borrowing</span>
                <span className="emi-data-data">₹{loanAmount}</span>
              </div>
              <div className="table-column">
                <span className="emi-data-heading">Over</span>
                <span className="emi-data-data">{totalLoanMonths} months</span>
              </div>
            </div>
            <div className="table-row">
              <div className="table-column">
                <span className="emi-data-heading">Monthly repayment</span>
                <span className="emi-data-data">₹{emi}</span>
              </div>
              <div className="table-column">
                <span className="emi-data-heading">Total repayment</span>
                <span className="emi-data-data">₹{totalRepayment}</span>
              </div>
            </div>
            <div className="table-row">
              <div className="table-column">
                <span className="emi-data-heading">Representative</span>
                <span className="emi-data-data">7.1% APR</span>
              </div>
              <div className="table-column">
                <span className="emi-data-heading">Interest rate</span>
                <span className="emi-data-data">{loandata?.interestRate}%</span>
              </div>
            </div>
          </div>
          <p className="apply-button">
            <img
              width={"30px"}
              style={{ marginRight: "10px" }}
              src="data:image/jpeg;base64,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"
              alt="caution-logo"
            />
            The interest rate provided is fixed. Also kindly check your
            eligibility before applying for loan.
          </p>
        </div>
      </div>
    </div>
  );
}

export default EMICalculator;
