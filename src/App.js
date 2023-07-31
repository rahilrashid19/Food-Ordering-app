import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/Header";
import BodyComponent from "./components/Body";
import FooterComponent from "./components/Footer";

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
      <BodyComponent />
      <FooterComponent />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayoutComponent />);
