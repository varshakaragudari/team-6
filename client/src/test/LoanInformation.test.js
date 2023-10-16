import React from "react";
import { render } from "@testing-library/react";
import LoanInformation from "../components/loanFormComponents/LoanInformation";

describe("LoanInformation Component", () => {
  const mockLoanData = {
    loanType: "Personal",
    content: "This is a personal loan.",
    minimumAge: 18,
    maximumAge: 65,
    minimumPrincipal: 5000,
    maximumPrincipal: 50000,
    minimumTenure: 6,
    maximumTenure: 60,
    interestRate: 10,
    processingFee: 2,
  };

  it("renders loan information correctly", () => {
    const { getByText } = render(<LoanInformation loandata={mockLoanData} />);
    expect(
      getByText(`What is a ${mockLoanData.loanType} loan?`)
    ).toBeInTheDocument();
    expect(getByText(mockLoanData.content)).toBeInTheDocument();
    expect(
      getByText(
        `Your age should be in between ${mockLoanData.minimumAge} and ${mockLoanData.maximumAge}.`
      )
    ).toBeInTheDocument();
    expect(
      getByText(
        `According to your income, you can take a minimum ${mockLoanData.loanType} loan of amount ₹${mockLoanData.minimumPrincipal} and maximum of ₹${mockLoanData.maximumPrincipal}. But keep in mind that the maximum loan you can take depends on your income.`
      )
    ).toBeInTheDocument();
    expect(
      getByText(
        `You can take out a ${mockLoanData.loanType} loan for minimum tenure of ${mockLoanData.minimumTenure} months and a maximum tenure of ${mockLoanData.maximumTenure} months.`
      )
    ).toBeInTheDocument();
    expect(
      getByText(
        `The interest rate of ${mockLoanData.loanType} loan is ${mockLoanData.interestRate}% per annum.`
      )
    ).toBeInTheDocument();
    expect(
      getByText(
        `Natwest will charge a processing fee of ${mockLoanData.processingFee}% which will be included in monthly installments.`
      )
    ).toBeInTheDocument();
  });
});
