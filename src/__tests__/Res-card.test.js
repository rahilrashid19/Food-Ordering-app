import { screen, render } from "@testing-library/react";
import ResturantCardComponent from "../components/ResturantCard";
import { RES_DETAILS } from "../mocks/resDetails";
import "@testing-library/jest-dom";

test("restaurant card should render correctly", () => {
  render(<ResturantCardComponent {...RES_DETAILS} />);

  const resDetails = screen.getByText(/stars/i);

  expect(resDetails).toBeInTheDocument();
});
