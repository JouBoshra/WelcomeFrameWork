import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";
import { NavLink, Link } from "react-router-dom";
export default function Navbar({ toggleDarkMode, isDarkMode, innerRef }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsScrollingDown(true);
      } else {
        setIsScrollingDown(false);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const navbarToggle = document.querySelector(
      '[data-collapse-toggle="navbar-sticky"]'
    );

    const handleToggle = () => {
      setIsOpen(!isOpen);
    };

    if (navbarToggle) {
      navbarToggle.addEventListener("click", handleToggle);
    }

    return () => {
      if (navbarToggle) {
        navbarToggle.removeEventListener("click", handleToggle);
      }
    };
  }, [isOpen]);

  return (
    <>
      <nav
        ref={innerRef}
        className={`dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 ${
          isScrollingDown ? "navbar-wave" : ""
        }`}
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-8">
          <Link
            to={""}
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="sm:text-2xl md:text-xl xl:text-3xl 2xl:text-3xl  text-white uppercase text-2xl self-center font-semibold whitespace-nowrap dark:text-white">
              START FRAMEWORK
            </span>
          </Link>

          <div className="Navbar-st flex items-center md:order-last lg:order-last">
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded={isOpen ? "true" : "false"}
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
            <button
              onClick={toggleDarkMode}
              className="ml- p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg focus:outline-none focus:ring-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
              <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
            </button>
          </div>
          <div
            id="navbar-sticky"
            className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
              isOpen ? "navbar-open navbar-transition" : "navbar-transition"
            }`}
          >
            <ul className="flex items-start flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-[#2C3D4F] md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-[#2C3D4F] dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <NavLink
                  to={"/About"}
                  className="font-extrabold block py-2 px-3 text-white rounded md:p-1 dark:text-white dark:border-gray-700"
                >
                  ABOUT
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/Portfolio"}
                  className="font-extrabold block py-2 px-3 text-white rounded  md:p-1  dark:border-gray-700"
                >
                  PORTFOLIO
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"Contact"}
                  className="font-extrabold block py-2 px-3 text-white rounded  md:p-1  dark:text-white dark:border-gray-700"
                >
                  CONTACT
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
