import React, { Suspense, lazy, useState } from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/Header";
import BodyComponent from "./components/Body";
import FooterComponent from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import ResturantDetails from "./components/ResturantDetails";
import Careers from "./components/Careers";
import ApplyHere from "./components/ApplyHere";
import Shimmer from "./components/Shimmer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";
import Cart from "./components/Cart";
import store from "./utils/store";
import { Provider } from "react-redux";

const Instamart = lazy(() => {
  return import("./components/Instamart");
});

const AppLayoutComponent = () => {
  const [user, setUser] = useState({
    name: "Rahil Rashid",
    email: "rahilrashid977@gmail.com",
    address: "Baramulla , Kashmir",
    phone: 7889748631,
  });
  return (
    <Provider store={store}>
      <UserContext.Provider
        value={{
          user: user,
          setUser: setUser,
        }}
      >
        <HeaderComponent />
        <Outlet />
        <FooterComponent />
      </UserContext.Provider>
    </Provider>
  );
};

const routes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayoutComponent />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <BodyComponent />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/careers",
        element: <Careers />,
        children: [
          {
            path: "apply", // we dont use backslashes here because its a relative path & if we use a backslash it will act as localhost:1234/apply , so we dont use
            element: <ApplyHere />,
          },
        ],
      },
      {
        path: "/resturant/:id",
        element: <ResturantDetails />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={routes} />);
