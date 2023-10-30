import { useState } from "react";
import logo from "../../assets/logo.jpg";
import LogoSection from "./LogoSection";
import NavList from "./NavList";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section dir="rtl" className="bg-white">
      <nav className="container pt-5 pb-5 mx-auto lg:flex lg:justify-between lg:items-center max-w-6xl ">
        <div className="flex items-center justify-between">
          <LogoSection />

          <div className="flex lg:hidden pl-5">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-gray-500  hover:text-gray-600  focus:outline-none focus:text-gray-600 "
              aria-label="toggle menu"
            >
              {!isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        <NavList isOpen={isOpen} />
      </nav>
    </section>
  );
};

export default NavBar;
