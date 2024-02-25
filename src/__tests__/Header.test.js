import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../components/Header";
import { Provider } from "react-redux";
import store from "../utils/store";
import { StaticRouter } from "react-router-dom/server";
import "@testing-library/jest-dom";

// test case
test("should render Header Component", () => {
  // render the component
  render(
    <Provider store={store}>
      <StaticRouter>
        <Header />
      </StaticRouter>
    </Provider>
  );

  // querying
  const button = screen.getByRole("button");

  // assertion
  expect(button).toBeInTheDocument();
});

test("should load cart with 0 items", () => {
  render(
    <Provider store={store}>
      <StaticRouter>
        <Header />
      </StaticRouter>
    </Provider>
  );

  const cartItems = screen.getByText(/cart - 0/i);

  expect(cartItems).toBeInTheDocument();
});

it("should change login button to logout on click", () => {
  render(
    <Provider store={store}>
      <StaticRouter>
        <Header />
      </StaticRouter>
    </Provider>
  );

  const SignIn = screen.getByRole("button");

  fireEvent.click(SignIn);

  const SignOut = screen.getByRole("button");

  expect(SignOut).toBeInTheDocument();
});
