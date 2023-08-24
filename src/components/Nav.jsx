import React, { useState } from "react";
import headerLogo from "../assets/images/header-logo.svg";
import hamburger from "../assets/icons/hamburger.svg";
import { navLinks } from "../constants/index";
const Nav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <header className="padding-x padding-y absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label} className="hover:bg-red-500">
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray hover:text-white"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24">
          <a href="/" className="hover:bg-red-500 hover:text-white">
            Sign in
          </a>
          <span>/</span>
          <a href="/" className="hover:bg-red-500 hover:text-white">
            Explore now
          </a>
        </div>
        <div className="hidden max-lg:block">
          <img
            src={hamburger}
            alt="hamburger icon"
            width={25}
            height={25}
            onClick={toggleNav}
          />
          <ul
            className={`${
              isNavOpen ? "block" : "hidden"
            } max-lg:block-1 block justify-center items-center gap-16 pt-1 fixed `}
          >
            {navLinks.map((item) => (
              <li key={item.label} className="hover:bg-red-500">
                <a
                  href={item.href}
                  className="font-montserrat leading-normal text-lg text-slate-gray hover:text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
