import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/logo.jpg';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="bg-white shadow-md">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={logo} className="h-10" alt="Logo" />
          </a>
          <div className="flex items-center md:order-2 space-x-3 rtl:space-x-reverse">
            <button
              onClick={toggleNavbar}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="navbar-user"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            <Link to="https://www.growwisemedia.com/contact">
              <button className="bg-black text-white font-bold py-2 px-4 rounded-lg hover:bg-gray-800 transition duration-200">
                Contact Us
              </button>
            </Link>
          </div>
          <div
            className={`items-center justify-between md:flex md:w-auto md:order-1 ${isOpen ? "block" : "hidden"}`}
            id="navbar-user"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
              <li>
                <Link to="/">
                  <span className="block py-2 px-3 text-black text-sm hover:bg-gray-100 md:hover:bg-transparent md:p-0">
                    Home
                  </span>
                </Link>
              </li>
              <li>
                <Link to="color">
                  <span className="block py-2 px-3 text-black text-sm hover:bg-gray-100 md:hover:bg-transparent md:p-0">
                    Palettes
                  </span>
                </Link>
              </li>
              <li>
                <Link to="duocolor">
                  <span className="block py-2 px-3 text-black text-sm hover:bg-gray-100 md:hover:bg-transparent md:p-0">
                    Duo
                  </span>
                </Link>
              </li>
              <li>
                <Link to="tricolor">
                  <span className="block py-2 px-3 text-black text-sm hover:bg-gray-100 md:hover:bg-transparent md:p-0">
                    Trio
                  </span>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <span className="block py-2 px-3 text-black text-sm hover:bg-gray-100 md:hover:bg-transparent md:p-0">
                    Quad
                  </span>
                </Link>
              </li>
              <li>
                <Link to="https://www.growwisemedia.com/web-design">
                  <span className="block py-2 px-3 text-black text-sm hover:bg-gray-100 md:hover:bg-transparent md:p-0">
                    Portfolio
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
