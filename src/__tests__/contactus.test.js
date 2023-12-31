import ContactUs from "../components/ContactUs";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("testcases", () => {
  test("contact page is rendered properly", () => {
    render(<ContactUs />);
    //querying
    const inputbox = screen.getAllByRole("textbox");
    //Assertion
    expect(inputbox.length).toBe(2);
  });

  test("contact page has submit button", () => {
    render(<ContactUs />);

    const button = screen.getByText("Submit");
    expect(button).toBeInTheDocument();
  });

  it("contact page render only ", () => {
    render(<ContactUs />);
  });
});
