import React, { useState, useEffect } from "react";
import FacebookIcon from "../assets/facebook.svg";
import TwitterIcon from "../assets/twitter.svg";
import InstagramIcon from "../assets/instagram.svg";
import LinkedInIcon from "../assets/linkedin.svg";

const Footer = () => {
  const [isFooterFixed, setIsFooterFixed] = useState(false);

  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.scrollY;

    if (scrollTop + windowHeight >= documentHeight) {
      setIsFooterFixed(true);
    } else {
      setIsFooterFixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <footer
      className={`bg-gray-800 text-white py-6 ${
        isFooterFixed ? "fixed bottom-0 w-full" : ""
      }`}
    >
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex space-x-4">
          <a
            href="https://www.facebook.com/login/"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            <img src={FacebookIcon} alt="Facebook" className="h-6 w-6" />
          </a>
          <a
            href="https://twitter.com/"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            <img src={TwitterIcon} alt="Twitter" className="h-6 w-6" />
          </a>
          <a
            href="https://www.instagram.com/accounts/login/"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            <img src={InstagramIcon} alt="Instagram" className="h-6 w-6" />
          </a>
          <a
            href="https://www.linkedin.com/feed/"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            <img src={LinkedInIcon} alt="LinkedIn" className="h-6 w-6" />
          </a>
        </div>
        <p className="mt-4 text-sm">
          &copy; {new Date().getFullYear()} Crave Cuisines. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
