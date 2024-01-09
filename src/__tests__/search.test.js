import Body from "../components/Body";
import { fireEvent, render, screen } from "@testing-library/react";
import { MOCK_DATA } from "../utils/mockdataReslist.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import { waitFor } from '@testing-library/react';  // Import waitFor
import "@testing-library/jest-dom";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

it("Should Search Res List for burger text input", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const searchBtn = screen.getByRole("button", { name: "Search" });
  const searchInput = screen.getByTestId("Inputbox");

  fireEvent.change(searchInput, { target: { value: "burger" } });
  fireEvent.click(searchBtn);

  await waitFor(() => {
    const cardsAfterSearch = screen.queryAllByTestId("resCard");
    expect(cardsAfterSearch.length).toBe(0);
  });
});