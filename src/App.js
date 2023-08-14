import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/Header";
import BodyComponent from "./components/Body";
import FooterComponent from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import ResturantDetails from "./components/ResturantDetails";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

/*
planning for the App

1. Header Component
   - Logo
   -Navbar
   -cart
   search bar

2. Body Component
   - Resturant Card
     - Resturant Image
     - Resturant Name
     - Resturant rating
     -cusines

3. Footer Component
    - Links

*/

const AppLayoutComponent = () => {
  return (
    <>
      <HeaderComponent />
      <Outlet />
      <FooterComponent />
    </>
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
        path: "/resturant/:id",
        element: <ResturantDetails />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={routes} />);
