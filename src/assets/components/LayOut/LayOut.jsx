import React, { useState, useEffect, useRef } from "react";
import Navbar from "../Navbar/Navbar";
import FooterOne from "../FooterOne/FooterOne";
import FooterTwo from "../FooterTwo/FooterTwo";
import { Outlet } from "react-router-dom";

export default function LayOut() {
  const navRef = useRef(null);
  const [navHeight, setNavHeight] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return (
      localStorage.getItem("theme") === "dark" ||
      window.matchMedia("(prefers-color-scheme: dark)").matches
    );
  });

  useEffect(() => {
    setNavHeight(navRef.current?.offsetHeight || 0);
  }, [navRef.current]);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <Navbar
        innerRef={navRef}
        toggleDarkMode={toggleDarkMode}
        isDarkMode={isDarkMode}
      />
      <Outlet
        style={{ paddingTop: `${navHeight}px`, marginTop: `30px` }}
        context={{ navHeight }}
      />
      <FooterOne />
      <FooterTwo />
    </>
  );
}
