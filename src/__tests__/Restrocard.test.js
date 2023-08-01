import RestaurantCard from "../components/RestaurantCard";
import { render, screen } from "@testing-library/react";
import Testdata from "../utils/Testdata.json";
import "@testing-library/jest-dom";

// using mock card data for testing instead of live API
it("restrocard is rendered with prop data ", () => {
  render(<RestaurantCard resData={Testdata} />);

  const nameofhotel = screen.getByText("Domino's Pizza");
  expect(nameofhotel).toBeInTheDocument();
});
