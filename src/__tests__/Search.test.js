import { fireEvent, render, screen } from "@testing-library/react";
import BodyComponent from "../components/Body";
import "@testing-library/jest-dom";
import { MOCKS } from "../mocks/resList";
import { act } from "react-dom/test-utils";
import { StaticRouter } from "react-router-dom/server";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCKS);
    },
  });
});

it("should render body component with search", async () => {
  await act(async () => {
    render(
      <StaticRouter>
        <BodyComponent />
      </StaticRouter>
    );
  });

  const btn = screen.getByRole("button", { name: "Search" });

  const searchInput = screen.getByTestId("search-input");

  fireEvent.change(searchInput, { target: { value: /burger/i } });

  fireEvent.click(btn);

  const shimmer = screen.getAllByTestId("shimmer");

  expect(shimmer.length).toBe(2);
});
