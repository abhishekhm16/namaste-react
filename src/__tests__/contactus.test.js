import ContactUs from "../components/ContactUs";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("testcases", () => {
  beforeAll(()=>{
    console.log("executes before all running test case")
  });

  beforeEach(()=>{
    console.log("executes before running each test case")
  });

  afterAll(()=>{
    console.log("executes after all running test case")
  });

  afterEach(()=>{
    console.log("executes after running each test case")
  });

  test("contact page is rendered properly", () => {
    render(<ContactUs />);
    //querying
    const inputbox = screen.getAllByRole("textbox");
    //Assertion
    // expect(inputbox.length).toBe(2);
    expect(inputbox.length).not.toBe(0);
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
