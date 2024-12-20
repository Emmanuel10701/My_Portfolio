import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";  // Import Link from react-scroll

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close, github, linkedin } from "../assets"; // Add linkedin import

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] ml-10 font-bold cursor-pointer flex ">
            Emmanuel &nbsp;
            <span className="sm:block hidden"> | Juma </span>
          </p>
        </Link>

        {/* Desktop Navigation */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
            >
              {/* Use Link from react-scroll for smooth scrolling */}
              <Link
                to={nav.id}  // The ID of the section to scroll to
                smooth={true}  // Enables smooth scrolling
                duration={500}  // Duration of the scroll in milliseconds
                offset={-70}  // Adjust scroll position if needed (e.g., for fixed nav)
                spy={true}  // Highlight active link when the section is in view
                onClick={() => setActive(nav.title)}  // Update active state on click
              >
                {nav.title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                >
                  {/* Use Link from react-scroll for smooth scrolling */}
                  <Link
                    to={nav.id}  // The ID of the section to scroll to
                    smooth={true}  // Enables smooth scrolling
                    duration={500}  // Duration of the scroll in milliseconds
                    offset={-70}  // Adjust scroll position if needed (e.g., for fixed nav)
                    spy={true}  // Highlight active link when the section is in view
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(nav.title);
                    }}
                  >
                    {nav.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Icons for all screens */}
        <div className="flex flex-row gap-4 ml-10 items-center">
          <a
            href="https://github.com/Emmanuel10701"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="GitHub" className="w-8 h-8 object-contain" />
          </a>
          <a
            href="https://www.linkedin.com/in/emmanuel-makau-40a12028b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="LinkedIn" className="w-8 h-8 object-contain" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
