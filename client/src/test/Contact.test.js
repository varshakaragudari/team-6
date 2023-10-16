import React from "react";
import { render } from "@testing-library/react";
import ContactUs from "../components/ContactUs"; // Adjust the path to the actual location of Coursal.js

describe("Coursal component", () => {
  it("renders without crashing", () => {
    render(<ContactUs />);
  });

  it('displays the "Contact Us" header', () => {
    const { getByText } = render(<ContactUs />);
    expect(getByText("Contact Us")).toBeInTheDocument();
  });

  it("displays contact information", () => {
    const { getByText } = render(<ContactUs />);
    expect(getByText("Customer care phone number:-")).toBeInTheDocument();
    expect(getByText("345 788 8444")).toBeInTheDocument();
    expect(getByText("345 788 8455")).toBeInTheDocument();
  });

  it("displays the registered office address", () => {
    const { getByText } = render(<ContactUs />);
    expect(
      getByText(
        "Registered Office: 36 St Andrew Square, Edinburgh, United Kingdom, EH2 2YB"
      )
    ).toBeInTheDocument();
  });

  it("displays the email address", () => {
    const { getByText } = render(<ContactUs />);
    expect(getByText("info@natwest.com")).toBeInTheDocument();
  });

  // Add more test cases to cover other parts of the Coursal component
});
