import React from "react";
import Navbar from "./Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";

describe("Navbar component", () => {
  it("renders without crashing", () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );
  });

  it("contains navigation links", () => {
    const { getByText } = render(
      <Router>
        <Navbar />
      </Router>
    );

    expect(getByText("Pondeo")).toBeInTheDocument();
    expect(getByText("Product")).toBeInTheDocument();
    expect(getByText("About Us")).toBeInTheDocument();
    expect(getByText("Contact")).toBeInTheDocument();
  });

  it("contains buttons for login and free trial", () => {
    const { getByLabelText } = render(
      <Router>
        <Navbar />
      </Router>
    );

    expect(getByLabelText("Login")).toBeInTheDocument();
    expect(getByLabelText("Start Free Trial")).toBeInTheDocument();
  });

  it("contains language selection flags", async () => {
    const { getByAltText } = render(
      <Router>
        <Navbar />
      </Router>
    );

    // Click on the British flag to trigger the appearance of the Swedish and Spanish flags
    fireEvent.click(getByAltText("British Flag"));

    // Wait for both the Swedish and Spanish flags to appear
    await waitFor(() => {
      expect(getByAltText("Swedish Flag")).toBeInTheDocument();
      expect(getByAltText("Spanish Flag")).toBeInTheDocument();
    });

    // Now check for all language flags
    expect(getByAltText("British Flag")).toBeInTheDocument();
    expect(getByAltText("Swedish Flag")).toBeInTheDocument();
    expect(getByAltText("Spanish Flag")).toBeInTheDocument();
  });
});
