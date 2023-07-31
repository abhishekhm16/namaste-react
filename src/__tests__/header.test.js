import { Provider } from "react-redux";
import Header from "../components/Header";
import { fireEvent, render, screen } from "@testing-library/react";
import appstore from "../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

describe("header component test cases", () => {
  it("header is rendered with login button", () => {
    render(
      <BrowserRouter>
        <Provider store={appstore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const loginbutton = screen.getByRole("button", { name: "login" });

    fireEvent.click(loginbutton);
    const logoutbutton = screen.getByRole("button", { name: "logout" });

    expect(logoutbutton).toBeInTheDocument();
  });
});
