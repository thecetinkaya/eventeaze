import { Brightness4, DarkMode, LightMode } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    const newTheme = isDarkTheme ? "light" : "dark";
    setIsDarkTheme(!isDarkTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme === "dark") {
      setIsDarkTheme(true);
    } else if (storedTheme === "light") {
      setIsDarkTheme(false);
    } else {
      const userPreference = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setIsDarkTheme(userPreference);
      localStorage.setItem("theme", userPreference ? "dark" : "light");
    }
  }, []);

  useEffect(() => {
    if (isDarkTheme) {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    } else {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    }
  }, [isDarkTheme]);

  return (
    <nav className="dark:bg-black bg-white shadow-md px-8 py-4 border-gray-200 sticky top-0 z-50">
      <div className="links flex items-center justify-between">
        <span className="logo text-2xl animate-gradient-change">EventEaze</span>
        <div className="flex items-center">
          <NavLink className="dark:text-white text-xl" to="/home">
            Home
          </NavLink>
          <div
            className="w-8 h-8 ml-2 flex justify-center items-center"
            onClick={() => toggleTheme()}
          >
            {isDarkTheme ? (
              <DarkMode className="text-white" />
            ) : (
              <LightMode className="text-black" />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
