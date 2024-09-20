import React, { useState } from "react";
import { Link } from "react-router-dom";

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
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-xl font-medium text-black">
              GRWWMCOLORS
            </span>
          </a>
          <div className="flex items-center md:order-2 space-x-3 rtl:space-x-reverse">
            <button
              type="button"
              className="flex text-sm rounded-full focus:ring-4 focus:ring-gray-300"
              id="user-menu-button"
              aria-expanded="false"
              data-dropdown-toggle="user-dropdown"
              data-dropdown-placement="bottom"
            >
              <span className="sr-only">Open user menu</span>
              <img
                className="w-8 h-8 rounded-full"
                src="https://images-platform.99static.com//syUUBXWPuntRp-CG7bhwjByZIMg=/0x0:1080x1080/fit-in/500x500/99designs-contests-attachments/127/127807/attachment_127807231"
                alt="user photo"
              />
            </button>

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
                    Color Palette
                  </span>
                </Link>
              </li>
              <li>
                <Link to="duocolor">
                  <span className="block py-2 px-3 text-black text-sm hover:bg-gray-100 md:hover:bg-transparent md:p-0">
                    Duo Colors
                  </span>
                </Link>
              </li>
              <li>
                <Link to="tricolor">
                  <span className="block py-2 px-3 text-black text-sm hover:bg-gray-100 md:hover:bg-transparent md:p-0">
                    Tri Colors Combo
                  </span>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <span className="block py-2 px-3 text-black text-sm hover:bg-gray-100 md:hover:bg-transparent md:p-0">
                    Support
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
