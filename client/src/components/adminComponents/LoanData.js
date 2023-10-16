import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./AdminLoans.css";
import emailjs from "emailjs-com";

export const LoanData = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loan, setLoan] = useState({});

  // const [done, setDone] = useState(false);
  // const [message, setMessage] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/loan/" + id);
        setLoan(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  console.log(loan);

  const sendEmail = (e) => {
    console.log(e);
    emailjs
      .send("service_tj2bosl", "template_6ke1y8s", e, "KOcaNmy3DZ-ljf5-x")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const approve = async () => {
    const obj = {
      approvedStatus: "Approved",
    };
    try {
      const response = await axios.put(
        "http://localhost:8080/loan/approvedStatus/" + id,
        obj
      );
      console.log(response.data);
      // alert("Loan Approved");
      navigate("/admin");
    } catch (e) {
      console.log(e);
    }
  };
  const reject = async () => {
    const obj = {
      approvedStatus: "Rejected",
    };
    try {
      const response = await axios.put(
        "http://localhost:8080/loan/approvedStatus/" + id,
        obj
      );
      console.log(response.data);
      // alert("Loan Approved");
      sendEmail(response.data.customer);
      navigate("/admin");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <div>
        <div className="purple-div mx-auto w-50">
          <h3 className="white-text" style={{ font: "bold", color: "white" }}>
            User Details
          </h3>
        </div>

        <div className="container mt-5">
          <table className="table table-bordered custom-table">
            <thead className="thead-light">
              <tr>
                <th className="text-center">User Attributes</th>
                <th className="text-center">User Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="purple-text text-center">Customer ID</td>
                <td className="purpletext text-center">{loan?.customer?.id}</td>
              </tr>
              <tr>
                <td className="purple-text text-center">Customer Name</td>
                <td className="purpletext text-center">
                  {loan?.customer?.customerName}
                </td>
              </tr>
              <tr>
                <td className="purple-text text-center">Phone Number</td>
                <td className="purpletext text-center">
                  {loan?.customer?.phoneNumber}
                </td>
              </tr>
              <tr>
                <td className="purple-text text-center">Aadhar Number</td>
                <td className="purpletext text-center">
                  {loan?.customer?.aadhar}
                </td>
              </tr>
              <tr>
                <td className="purple-text text-center">Date of Birth</td>
                <td className="purpletext text-center">
                  {loan?.customer?.dateOfBirth}
                </td>
              </tr>
              <tr>
                <td className="purple-text text-center">Address</td>
                <td className="purpletext text-center">
                  {loan?.customer?.address}
                </td>
              </tr>
              <tr>
                <td className="purple-text text-center">Email Address</td>
                <td className="purpletext text-center">
                  {loan?.customer?.email}
                </td>
              </tr>
              <tr>
                <td className="purple-text text-center">Account Number</td>
                <td className="purpletext text-center">
                  {loan?.customer?.accountNumber}
                </td>
              </tr>
              <tr>
                <td className="purple-text text-center">IFSC Code</td>
                <td className="purpletext text-center">
                  {loan?.customer?.ifsc}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <br></br>
        <br></br>
        <div className="purple-div mx-auto w-50">
          <h3 className="white-text" style={{ font: "bold", color: "white" }}>
            Loan Details
          </h3>
        </div>

        <div className="container mt-5">
          <table className="table table-bordered custom-table">
            <thead className="thead-light">
              <tr>
                <th className="text-center">Loan Attributes</th>
                <th className="text-center">Loan Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="purple-text text-center">Loan ID</td>
                <td className="purpletext text-center">{loan?.id}</td>
              </tr>
              <tr>
                <td className="purple-text text-center">Loan Type</td>
                <td className="purpletext text-center">{loan?.loanType}</td>
              </tr>
              <tr>
                <td className="purple-text text-center">Rate of Interest</td>
                <td className="purpletext text-center">
                  {loan?.rateOfInterest}%
                </td>
              </tr>
              <tr>
                <td className="purple-text text-center">Loan Date</td>
                <td className="purpletext text-center">{loan?.loanDate}</td>
              </tr>
              <tr>
                <td className="purple-text text-center">Age of User</td>
                <td className="purpletext text-center">{loan?.age}</td>
              </tr>
              <tr>
                <td className="purple-text text-center">Income</td>
                <td className="purpletext text-center">
                  ₹ {loan?.income} / month
                </td>
              </tr>
              <tr>
                <td className="purple-text text-center">Loan Amount</td>
                <td className="purpletext text-center">₹{loan?.loanAmount}</td>
              </tr>
              <tr>
                <td className="purple-text text-center">Documents</td>
                <td className="purpletext text-center">
                  <Link
                    to={loan?.docs}
                    target="_blank"
                  >
                    Documents
                  </Link>
                </td>
              </tr>
              <tr>
                <td className="purple-text text-center">Tenure</td>
                <td className="purpletext text-center">{loan?.tenure}</td>
              </tr>
              <tr>
                <td className="purple-text text-center">Reason for Loan</td>
                <td className="purpletext text-center">
                  {loan?.reasonForLoan}
                </td>
              </tr>
              <tr>
                <td className="purple-text text-center">Installment Amount</td>
                <td className="purpletext text-center">
                  ₹{loan?.installmentAmount}
                </td>
              </tr>
              <tr>
                <td className="purple-text text-center">Total Installments</td>
                <td className="purpletext text-center">
                  {loan?.totalNumberOfInstallments}
                </td>
              </tr>
              <tr>
                <td className="purple-text text-center">Installments Made</td>
                <td className="purpletext text-center">
                  {loan?.totalNumberOfInstallmentsDone}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <br></br>

        <div style={{ textAlign: "center" }}>
          <button
            class="purple-button-sb"
            style={{ display: "inline-block", marginRight: "30px" }}
            onClick={approve}
          >
            Loan Approved
          </button>
          <button
            class="purple-button-sb"
            style={{ display: "inline-block", marginLeft: "30px" }}
            onClick={reject}
          >
            Loan Rejected
          </button>
        </div>

        <br></br>
        <br></br>
      </div>
    </div>
  );
};
