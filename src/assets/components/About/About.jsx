// About.jsx
import React, { useEffect, useState } from "react";
import { Minus, Star } from "lucide-react";
import "./About.css";

export default function About() {
  const [navHeight, setNavHeight] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const navBarHeight = document.querySelector("nav")
      ? document.querySelector("nav").offsetHeight
      : 0;
    setNavHeight(navBarHeight);
    document.body.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
      <div className="about h-screen text-white m-auto flex flex-col justify-center align-middle items-center">
        <div className="header">
          <div className="text-center">
            <h2 className="pt-8 text-3xl lg:text-5xl md:text-4xl font-bold uppercase">
              About Component
            </h2>
          </div>

          <div className="lineHome flex flex-row items-center justify-center w-fit text-center m-auto">
            <Minus size={100} strokeWidth={1.75} />
            <Star size={50} strokeWidth={1.75} />
            <Minus size={100} strokeWidth={1.75} />
          </div>
          <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-4 mt-4 max-w-4xl w-full px-4">
            <div>
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
            <div>
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
