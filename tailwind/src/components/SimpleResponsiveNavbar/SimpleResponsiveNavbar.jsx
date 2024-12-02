import React, { useState } from "react";

const SimpleResponsiveNavbar = () => {
  const [navbarVisible, setNavbarVisible] = useState(false);

  const handleNavbarOpen = () => {
    setNavbarVisible(true);
    // Prevent body scrolling when mobile menu is open
    document.body.style.overflow = "hidden";
  };

  const handleNavbarClose = () => {
    setNavbarVisible(false);
    // Restore body scrolling when mobile menu is closed
    document.body.style.overflow = "auto";
  };

  return (
    <header className="p-4 bg-indigo-600 text-xl text-gray-300 relative">
      <nav className="w-[90%] mx-auto flex md:flex-row flex-col md:gap-0 gap-6 justify-between items-center">
        <h1 className="text-3xl font-bold">
          <a href="/">Brand Logo</a>
        </h1>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden absolute left-2 z-50">
          <button
            className={`border bg-red-500 py-1 px-2 absolute left-2 ${
              navbarVisible
                ? "opacity-0 pointer-events-none"
                : "opacity-100 pointer-events-auto"
            }`}
            onClick={handleNavbarOpen}
          >
            Open
          </button>
          <button
            className={`border bg-green-500 py-1 px-2 absolute left-2 ${
              !navbarVisible
                ? "opacity-0 pointer-events-none"
                : "opacity-100 pointer-events-auto"
            }`}
            onClick={handleNavbarClose}
          >
            Close
          </button>
        </div>

        {/* Navigation Menu */}
        <ul
          className={`
            md:flex md:flex-row flex-col items-center font-medium gap-6
            fixed md:relative
            top-0 left-0 right-0 bottom-0
            md:top-auto md:left-auto
            bg-indigo-600 
            w-full h-full
            md:w-auto md:h-auto
            transform transition-transform duration-300 ease-in-out
            ${navbarVisible ? "translate-x-0" : "translate-x-full"}
            md:translate-x-0
            flex items-center justify-center
            z-40
          `}
        >
          <li className="md:my-0 my-4">
            <a href="#" className="hover:text-white">
              Home
            </a>
          </li>
          <li className="md:my-0 my-4">
            <a href="#" className="hover:text-white">
              About
            </a>
          </li>
          <li className="md:my-0 my-4">
            <a href="#" className="hover:text-white">
              Contact
            </a>
          </li>
          <li className="md:my-0 my-4">
            <a href="#" className="hover:text-white">
              Pricing
            </a>
          </li>
          <li className="md:my-0 my-4">
            <a href="#" className="hover:text-white">
              Explore
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default SimpleResponsiveNavbar;
