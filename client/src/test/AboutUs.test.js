import React from "react";
import { render } from "@testing-library/react";
import AboutUs from "../components/AboutUs"; // Adjust the path to the actual location of AboutUs.js

describe("AboutUs", () => {
  it("renders without crashing", () => {
    render(<AboutUs />);
  });

  it('displays "Who We Are" section', () => {
    const { getByText } = render(<AboutUs />);
    expect(getByText("Who We Are")).toBeInTheDocument();
    expect(
      getByText(/We are a relationship bank for a digital world/)
    ).toBeInTheDocument();
  });

  it('displays "Loans" section', () => {
    const { getByText } = render(<AboutUs />);
    expect(getByText("Loans")).toBeInTheDocument();
    expect(
      getByText(/We as a relationship bank provide the services/)
    ).toBeInTheDocument();
  });

  it('displays "Services We Provide" section', () => {
    const { getByText } = render(<AboutUs />);
    expect(getByText("Services We Provide")).toBeInTheDocument();
    expect(
      getByText(/We provide services in almost all loan types/)
    ).toBeInTheDocument();
  });

  it('displays "Our Approach" section', () => {
    const { getByText } = render(<AboutUs />);
    expect(getByText("Our Approach")).toBeInTheDocument();
    expect(
      getByText(
        /There is so much more to our bank beyond our financial products and services/
      )
    ).toBeInTheDocument();
  });

  // Add more test cases as needed for other parts of the AboutUs component
});
