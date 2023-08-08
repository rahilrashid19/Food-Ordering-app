import { useState } from "react";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
  const [authText, setAuthText] = useState("SingIn");

  function toggleData(text) {
    if (text === "SignIn") {
      return "SignOut";
    } else {
      return "SignIn";
    }
  }

  return (
    <div className="header">
      <img
        src="https://walaan.com/storage/app/public/business/2023-05-29-647472b51447f.png"
        alt="logo"
      />
      <ul>
        <li>
          {" "}
          <Link to="/">Home</Link>{" "}
        </li>
        <li>
          {" "}
          <Link to="/about"> About Us</Link>
        </li>
        <li>
          {" "}
          <Link to="contact"> Contact Us</Link>{" "}
        </li>
        <li>Careers</li>
      </ul>

      <button
        id="auth-button"
        className="sign-in"
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

/**
 *  there are 2 types of exports
 * one is named export where we directly export the function using export keyword , and while importing the same in another component we need to use {}
 *
 * second is default export which by which we can export only one thing and we dont need {} while importing
 *  */
