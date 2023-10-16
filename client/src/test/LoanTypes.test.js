import React from "react";
import { render } from "@testing-library/react";
import LoanTypes from "../components/LoanTypes"; // Adjust the path to the actual location of LoanTypes.js
import { MemoryRouter } from "react-router-dom";

describe("LoanTypes component", () => {
  it("renders without crashing", () => {
    render(
      <MemoryRouter>
        <LoanTypes />
      </MemoryRouter>
    );
  });

  it("displays individual loans", () => {
    const { getByText } = render(
      <MemoryRouter>
        <LoanTypes />
      </MemoryRouter>
    );

    // You can use the `getByText` function to check if specific content is present
    expect(getByText("Individual Loans")).toBeInTheDocument();
    expect(getByText("Educational")).toBeInTheDocument();
    expect(getByText("Housing")).toBeInTheDocument();
    expect(getByText("Vehicle Loan")).toBeInTheDocument();
    expect(getByText("Medical")).toBeInTheDocument();
    expect(getByText("Gold Loan")).toBeInTheDocument();
    expect(getByText("Personal Loans")).toBeInTheDocument();
  });

  it("displays business loans", () => {
    const { getByText } = render(
      <MemoryRouter>
        <LoanTypes />
      </MemoryRouter>
    );

    // You can use the `getByText` function to check if specific content is present
    expect(getByText("Business Loans")).toBeInTheDocument();
    expect(getByText("Small Term")).toBeInTheDocument();
    expect(getByText("Long Term")).toBeInTheDocument();
    expect(getByText("Commercial Real Estate")).toBeInTheDocument();
    expect(getByText("Startup loan")).toBeInTheDocument();
    expect(getByText("Working capital loan")).toBeInTheDocument();
    expect(getByText("Business Acquisition Loans")).toBeInTheDocument();
  });

  it("displays FAQs", () => {
    const { getByText } = render(
      <MemoryRouter>
        <LoanTypes />
      </MemoryRouter>
    );

    // You can use the `getByText` function to check if specific FAQ content is present
    expect(
      getByText("What do I need to apply for a loan online?")
    ).toBeInTheDocument();
    expect(getByText("When Could I get my loan?")).toBeInTheDocument();
    expect(
      getByText("Can I apply for a loan in the mobile app?")
    ).toBeInTheDocument();
    expect(getByText("What can't I use a loan for ?")).toBeInTheDocument();
    expect(getByText("Can I repay my loan early?")).toBeInTheDocument();
    expect(
      getByText("Is a loan best way for me to borrow money?")
    ).toBeInTheDocument();
    expect(
      getByText("Can I borrow for more than one purpose?")
    ).toBeInTheDocument();
    expect(getByText("What is a loan ?")).toBeInTheDocument();
  });
});
