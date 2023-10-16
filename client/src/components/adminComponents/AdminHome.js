import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BarChart } from "@mui/x-charts/BarChart";

const AdminHome = () => {
  const [loans, setLoans] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [installments, setInstallments] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/loan")
      .then((res) => {
        setLoans(res.data);
        console.log(res.data);
      })
      .catch((e) => console.log(e));

    axios
      .get("http://localhost:9090/customers")
      .then((res) => {
        setCustomers(res.data);
        console.log(res.data);
      })
      .catch((e) => console.log(e));

    axios
      .get("http://localhost:8080/installments")
      .then((res) => {
        setInstallments(res.data);
        console.log(res.data);
      })
      .catch((e) => console.log(e));
  }, []);

  const tc = customers.length;

  const pr = loans.filter((l) => l.approvedStatus === "Pending");
  const pc = pr.length;
  const rr = loans.filter((l) => l.approvedStatus === "Rejected");
  const rc = rr.length;
  const ar = loans.filter((l) => l.approvedStatus === "Approved");
  const ac = ar.length;

  const bData = [0, 0, 0, 0, 0, 0];
  const pData = [0, 0, 0, 0, 0, 0];

  for (let i = 0; i < loans.length; i++) {
    if (loans[i].loanType === "Education")
      pData[0] += loans[i].loanAmount / 1000;
    else if (loans[i].loanType === "Vehicle")
      pData[1] += loans[i].loanAmount / 1000;
    else if (loans[i].loanType === "Medical")
      pData[2] += loans[i].loanAmount / 1000;
    else if (loans[i].loanType === "Personal")
      pData[3] += loans[i].loanAmount / 1000;
    else if (loans[i].loanType === "Housing")
      pData[4] += loans[i].loanAmount / 1000;
    else if (loans[i].loanType === "Gold")
      pData[5] += loans[i].loanAmount / 1000;
    else if (loans[i].loanType === "ShortB")
      bData[0] += loans[i].loanAmount / 1000;
    else if (loans[i].loanType === "LongB")
      bData[1] += loans[i].loanAmount / 1000;
    else if (loans[i].loanType === "RealEstate")
      bData[2] += loans[i].loanAmount / 1000;
    else if (loans[i].loanType === "Startup")
      bData[3] += loans[i].loanAmount / 1000;
    else if (loans[i].loanType === "Working capital")
      bData[4] += loans[i].loanAmount / 1000;
    else if (loans[i].loanType === "GBAcquisitionold")
      bData[5] += loans[i].loanAmount / 1000;
  }

  const xLabels1 = [
    "Education",
    "Vehicle",
    "Medical",
    "Personal",
    "Housing",
    "Gold",
  ];
  const xLabels2 = [
    "ShortB",
    "LongB",
    "RealEstate",
    "Startup",
    "Capital",
    "BAcquisition",
  ];

  const pendingLoans = loans.filter(
    (loan) => loan.approvedStatus === "Pending"
  );
  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
        <h1 className="h2">Admin Dashboard</h1>
      </div>

      {/* 4boxes */}
      <div className="row container d-flex justify-content-around mx-auto my-5">
        <div className="col-md-2 col-4 shadow-lg bg-body rounded p-3 text-center">
          <h5>Total Customers</h5>
          <h1 className="display-2 text-primary">{tc}</h1>
        </div>
        <div className="col-md-2 col-4 shadow-lg bg-body rounded p-3 text-center">
          <h5>Loans Approved</h5>
          <h1 className="display-2 text-success">{ac}</h1>
        </div>
        <div className="col-md-2 col-4 shadow-lg bg-body rounded p-3 text-center">
          <h5>Loans Pending</h5>
          <h1 className="display-2 text-warning">{pc}</h1>
        </div>
        <div className="col-md-2 col-4 shadow-lg bg-body rounded p-3 text-center">
          <h5>Loans Rejected</h5>
          <h1 className="display-2 text-danger">{rc}</h1>
        </div>
      </div>
      <div className="row container d-flex justify-content-around mx-auto mb-5">
        <div className="col-md-5 col-12 shadow-lg bg-body rounded p-3">
          <BarChart
            width={500}
            height={400}
            series={[{ data: pData, label: "Loan Amount(k)", id: "pvId" }]}
            xAxis={[{ data: xLabels1, scaleType: "band" }]}
          />
        </div>
        <div className="col-md-5 col-12 shadow-lg bg-body rounded p-3">
          <BarChart
            width={500}
            height={400}
            series={[{ data: bData, label: "Loan Amount(k)", id: "pvId" }]}
            xAxis={[{ data: xLabels2, scaleType: "band" }]}
          />
        </div>
      </div>

      <h3>New Loans</h3>
      <table className="table table-hover table-responsive">
        <thead className="table-dark">
          <tr>
            <th scope="col">S.No.</th>
            <th scope="col">CustomerID</th>
            <th scope="col">Customer</th>
            <th scope="col">Type</th>
            <th scope="col">Amount</th>
            <th scope="col">Tenure</th>
            <th scope="col">LoanID</th>
            <th scope="col">Status</th>
            {/* <th scope="col">Approve/Reject</th> */}
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {pendingLoans.map((loan, id) => {
            return (
              <tr>
                <th scope="row">{id + 1}</th>
                <td>{loan.customer.id}</td>
                <td>{loan.customer.customerName}</td>
                <td>{loan.loanType}</td>
                <td>{loan.loanAmount}</td>
                <td>{loan.tenure}</td>
                <td>{loan.id}</td>

                <td>
                  <button
                    type="button"
                    class="btn btn-sm"
                    style={{
                      color: "#FFC107",
                      borderColor: "#FFC107",
                      fontWeight: 700,
                    }}
                  >
                    {loan.approvedStatus}
                  </button>
                </td>
                {/* <td>
                  <Link to={`../loans/${loan.id}`}>
                    <button type="button" class="btn btn-sm btn-secondary">
                      Approve/Reject
                    </button>
                  </Link>
                </td> */}
              </tr>
            );
          })}
        </tbody>
      </table>
      <h3>Recent Installment Received</h3>
      <table className="table table-hover table-responsive">
        <thead className="table-dark">
          <tr>
            <th scope="col">S.No.</th>
            <th scope="col">LoanID</th>
            <th scope="col">CustomerID</th>
            <th scope="col">Amount Paid</th>
            <th scope="col">Amount Left</th>
            <th scope="col">Date</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {installments.map((i, id) => {
            return (
              <tr>
                <th scope="row">{id + 1}</th>
                <td>{i.loanId}</td>
                <td>{i.customerId}</td>
                <td>{i.amountToBePaid}</td>
                <td>{i.amountLeft}</td>
                <td>{i.installmentDate}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default AdminHome;
