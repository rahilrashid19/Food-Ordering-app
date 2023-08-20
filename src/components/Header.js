import { useState } from "react";
import { Link } from "react-router-dom";
import useStatus from "../utils/useStatus";

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

  return (
    <div className="header flex items-center justify-between px-6 py-4 bg-blue-500 text-white">
      <Link to="/">
        {" "}
        <img
          className="logo "
          src="https://dcassetcdn.com/design_img/3700800/819300/22122319/pcesn2jqzsg9e5mkg79tfdhd4q_image.png"
          alt="logo"
        />
      </Link>
      <ul className="flex space-x-4">
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
        <Link to="/careers" className="hover:underline">
          Careers
        </Link>
      </ul>

      <h1>{isOnline ? "User Is Online 🟢" : "User Is Offline 🔴"}</h1>

      <button
        id="auth-button"
        className="sign-in bg-transparent hover:bg-white text-white hover:text-blue-500 border border-white px-4 py-2 rounded focus:outline-none"
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
