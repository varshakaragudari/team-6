import React from "react";
import { render } from "@testing-library/react";
import HomeComponent from "../components/HomeComponent"; // Adjust the path to the actual location of HomeComponent.js

describe("HomeComponent", () => {
  it("renders without crashing", () => {
    render(<HomeComponent />);
  });

  //   it('displays Coursal component', () => {
  //     const { getByText } = render(<HomeComponent />);
  //     expect(getByText('Coursal Component Content')).toBeInTheDocument();
  //   });

  //   it('displays GetMoney component', () => {
  //     const { getByText } = render(<HomeComponent />);
  //     expect(getByText('Get Money Quickly')).toBeInTheDocument(); // You can use a text from GetMoney component
  //   });

  //   it('displays Categories component', () => {
  //     const { getByText } = render(<HomeComponent />);
  //     expect(getByText('Popular Categories')).toBeInTheDocument(); // You can use a text from Categories component
  //   });

  //   it('displays FAQs component with data', () => {
  //     const { getByText } = render(<HomeComponent />);
  //     expect(getByText('Get a free quote')).toBeInTheDocument(); // You can use a question from the FAQ data
  //     expect(getByText('Apply in 10 minutes')).toBeInTheDocument(); // You can use another question from the FAQ data
  //   });

  //   // Add more test cases as needed for other parts of the HomeComponent component
});
