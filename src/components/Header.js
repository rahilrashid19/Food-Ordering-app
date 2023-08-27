import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useStatus from "../utils/useStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const HeaderComponent = () => {
  const [authText, setAuthText] = useState("SignIn");

  function toggleData(text) {
    if (text === "SignIn") {
      return "SignOut";
    } else {
      return "SignIn";
    }
  }

  const isOnline = useStatus();

  const cartItems = useSelector((store) => store.cart.items);

  const { user } = useContext(UserContext);

  return (
    <div className="header flex flex-col md:flex-row items-center justify-between px-4 md:px-6 py-4 bg-blue-500 text-white">
      <div className="md:mr-6">
        <Link to="/">
          <img
            className="logo w-20 md:w-auto"
            src="https://dcassetcdn.com/design_img/3700800/819300/22122319/pcesn2jqzsg9e5mkg79tfdhd4q_image.png"
            alt="logo"
          />
        </Link>
      </div>
      <ul className="md:flex space-x-4 mt-4 md:mt-0">
        <li>
          <Link to="/" className="hover:underline">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:underline">
            About Us
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:underline">
            Contact Us
          </Link>
        </li>
        <li>
          <Link to="/careers" className="hover:underline">
            Careers
          </Link>
        </li>
        <li>
          <Link to="/instamart" className="hover:underline">
            Instamart
          </Link>
        </li>
        <li>
          <Link to="/cart" className="hover:underline">
            Cart - {cartItems.length}
          </Link>
        </li>
      </ul>

      <h1 className="mt-4 md:mt-0">
        {isOnline ? user.name + " Is Online 🟢" : user.name + " Is Offline 🔴"}
      </h1>

      <button
        id="auth-button"
        className="mt-4 md:mt-0 sign-in bg-transparent hover:bg-white text-white hover:text-blue-500 border border-white px-4 py-2 rounded focus:outline-none"
        onClick={() => {
          const toggle = toggleData(authText);
          setAuthText(toggle);
        }}
      >
        {authText}
      </button>
    </div>
  );
};

export default HeaderComponent;
