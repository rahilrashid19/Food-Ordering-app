import { useState } from "react";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
  const [authText, setAuthText] = useState("SignIn");

  function toggleData(text) {
    if (text === "SignIn") {
      return "SignOut";
    } else {
      return "SignIn";
    }
  }

  return (
    <div className="header flex items-center justify-between px-6 py-4 bg-blue-500 text-white">
      <img
        className="logo h-10"
        src="https://walaan.com/storage/app/public/business/2023-05-29-647472b51447f.png"
        alt="logo"
      />
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
          <Link to="contact" className="hover:underline">
            Contact Us
          </Link>
        </li>
        <li className="hover:underline">Careers</li>
      </ul>

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
