import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Video", path: "/Video" },
    { name: "Upload", path: "/Upload" },
    { name: "Sign In", path: "/Signin" },
  ];

  return (
    <div className="w-full bg-black  z-50  px-6 md:px-20 py-4 md:py-0 flex items-center justify-between fixed">
      <Link
        to="/"
        className="!text-yellow-300 !no-underline Goldman mt-3 text-3xl md:text-4xl lg:text-5xl font-extrabold transition duration-300 hover:drop-shadow-[0_0_10px_#facc15]"
      >
        GausejTech
      </Link>

      {/* Desktop Nav */}
      <ul className="hidden md:flex gap-6 items-center">
        {navLinks.map((item) => (
          <li key={item.name}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `relative group Goldman text-lg text-white transition duration-300 
                 ${isActive ? "!text-yellow-300" : "hover:!text-yellow-300"}`
              }
            >
              <span className="relative inline-block">
                {item.name}
                <span
                  className={`
                    absolute left-0 -bottom-1 h-[2px] bg-yellow-300 transition-all duration-500
                    ${
                      window.location.pathname === item.path
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }
                  `}
                ></span>
              </span>
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
      </button>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <ul className="absolute top-[80px] left-0 w-full bg-black flex flex-col flex-start gap-4 py-4 z-10 md:hidden">
          {navLinks.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `relative group Goldman text-lg text-white transition duration-300 
                   ${isActive ? "!text-yellow-300" : "hover:!text-yellow-300"}`
                }
                onClick={() => setIsOpen(false)} // close menu on click
              >
                <span className="relative inline-block">
                  {item.name}
                  <span
                    className={`
                      absolute left-0 -bottom-1 h-[2px] bg-yellow-300 transition-all duration-500
                      ${
                        window.location.pathname === item.path
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }
                    `}
                  ></span>
                </span>
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Header;
