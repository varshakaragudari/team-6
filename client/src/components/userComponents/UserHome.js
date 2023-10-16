import axios from "axios";
import React, { useState, useEffect } from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { useDispatch, useSelector } from "react-redux";
import { LoanStatus } from "./LoanStatus";
import { InstallmentHistory } from "./InstallmentHistory";
import { PieChart } from "@mui/x-charts/PieChart";

const UserHome = () => {
  const [loans, setLoans] = useState([]);
  const [Installment, setInstallment] = useState([]);

  const user = useSelector((state) => state.data.currentUser);
  console.log(user);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/loan/byCustomerId/${user.id}`
        );
        setLoans(response.data);
        console.log("Response from API:", response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    const fetchData2 = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/installments/byCustomerId/${user.id}`
        );
        setInstallment(response.data);
        console.log("Response from API:", response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
    fetchData2();
  }, []);

  // const pr = loans.filter((l) => l.approvedStatus === "Pending");
  // const pc = pr.length;
  // const rr = loans.filter((l) => l.approvedStatus === "Rejected");
  // const rc = rr.length;
  const ar = loans.filter((l) => l.approvedStatus === "Approved");
  const ac = ar.length;

  let totalLoan = 0;
  let totalInterest = 0;
  let totalPaid = 0;
  let totalLeft = 0;
  let icountleft = 0;
  for (let i = 0; i < loans.length; i++) {
    totalLoan += loans[i].loanAmount;
    totalInterest +=
      (loans[i].loanAmount * loans[i].tenure * loans[i].rateOfInterest) / 100;
    totalLeft +=
      (loans[i].totalNumberOfInstallments -
        loans[i].totalNumberOfInstallmentsDone) *
      loans[i].installmentAmount;
    icountleft +=
      loans[i].totalNumberOfInstallments -
      loans[i].totalNumberOfInstallmentsDone;
  }

  for (let i = 0; i < Installment.length; i++) {
    totalPaid += Installment[i].amountToBePaid;
  }

  // const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
  // const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
  // const xLabels = [
  //   "Page A",
  //   "Page B",
  //   "Page C",
  //   "Page D",
  //   "Page E",
  //   "Page F",
  //   "Page G",
  // ];
  return (
    <>
      <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
        <h1 class="h2">User Dashboard</h1>
      </div>

      {/* 4boxes */}
      <div class="row container d-flex justify-content-around mx-auto my-5">
        <div class="col-md-2 col-4 shadow-lg bg-body rounded p-3 text-center">
          <h5>Loans Applied</h5>
          <h1 class="display-2 text-primary">{loans.length}</h1>
        </div>
        <div class="col-md-2 col-4 shadow-lg bg-body rounded p-3 text-center">
          <h5>Loans Approved</h5>
          <h1 class="display-2 text-success">{ac}</h1>
        </div>
        <div class="col-md-2 col-4 shadow-lg bg-body rounded p-3 text-center">
          <h5>Installments Paid</h5>
          <h1 class="display-2 text-warning">{Installment.length} </h1>
        </div>
        <div class="col-md-2 col-4 shadow-lg bg-body rounded p-3 text-center">
          <h5>Installments Left</h5>
          <h1 class="display-2 text-danger">{icountleft}</h1>
        </div>
      </div>
      <div class="row container d-flex justify-content-around mx-auto mb-5">
        <div class="col-md-5 col-12 p-3">
          <PieChart
            series={[
              {
                data: [
                  {
                    id: 0,
                    value: totalLoan,
                    label: "Principal",
                    color: "#5A287D",
                  },
                  {
                    id: 1,
                    value: totalInterest,
                    label: "Interest",
                    color: "#3C1053",
                  },
                  // { id: 2, value: 20, label: "series C" },
                ],
                innerRadius: 30,
                outerRadius: 100,
                paddingAngle: 5,
                cornerRadius: 5,
                startAngle: -180,
                endAngle: 180,
                // cx: 150,
                // cy: 150,
              },
            ]}
            width={400}
            height={200}
          />
        </div>
        <div class="col-md-5 col-12 p-3">
          <PieChart
            series={[
              {
                data: [
                  {
                    id: 0,
                    value: totalLeft,
                    label: "Left",
                    color: "#5A287D",
                  },
                  {
                    id: 1,
                    value: totalPaid,
                    label: "Paid",
                    color: "#3C1053",
                  },
                  // { id: 2, value: 20, label: "series C" },
                ],
                innerRadius: 30,
                outerRadius: 100,
                paddingAngle: 5,
                cornerRadius: 5,
                startAngle: -180,
                endAngle: 180,
                // cx: 150,
                // cy: 150,
              },
            ]}
            width={400}
            height={200}
          />
        </div>
      </div>

      <h3>Your Loans</h3>
      <table className="table table-hover table-responsive">
        <thead className="table-dark">
          <tr>
            <th scope="col">LoanID</th>
            <th scope="col">Type</th>
            <th scope="col">Amount</th>
            <th scope="col">Tenure</th>
            <th scope="col">Installment</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {loans &&
            loans.map((loanData, index) => (
              <tr key={index}>
                <th scope="row">{loanData.id}</th>
                <td>{loanData.loanType}</td>
                <td>{loanData.loanAmount}</td>
                <td>{loanData.tenure}</td>
                <td>{loanData.installmentAmount}</td>{" "}
                <td>
                  <button
                    type="button"
                    class="btn btn-sm"
                    style={{
                      color: `${
                        loanData.approvedStatus === "Approved"
                          ? "#28A745"
                          : loanData.approvedStatus === "Rejected"
                          ? "#CA2535"
                          : "#FFC107"
                      }`,
                      fontWeight: 700,
                    }}
                  >
                    {loanData.approvedStatus}
                  </button>{" "}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <h3>Recent Installments Done</h3>
      <InstallmentHistory />
    </>
  );
};

export default UserHome;
