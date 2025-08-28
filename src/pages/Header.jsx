import React, { useEffect, useState } from "react";
import logo from "../assets/sunriseLogo.webp";
import { Link } from "react-router-dom";
function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`px-4 sm:px-8 lg:px-16 xl:px-20 py-2 sm:py-4 fixed top-0 w-full transition-all duration-300 z-60
      ${isScrolled ? "bg-white/20 backdrop-blur-sm shadow-lg" : "bg-white"}`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-center ">
          {/* <div className="bg-black/5 h-24 w-24 absolute -z-40 rounded-full blur-sm"></div> */}
          <img
            src={logo}
            alt="Logo"
            className="h-10 w-auto sm:h-12 md:h-14 lg:h-16 xl:h-20"
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className="flex items-center gap-4">
          <Link className="font-medium cursor-pointer text-[#E42600]">
            LOGIN
          </Link>
          <i
            onClick={() => setIsOpen(true)}
            className="ri-menu-3-fill text-2xl cursor-pointer text-[#E42600]"
          ></i>
        </div>
      </div>

      <nav
        className={`fixed top-0 left-0 w-screen h-screen z-50 flex items-start justify-center sm:justify-start
        transform transition-transform duration-500 ease-in-out py-22
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <ul className="text-[#E42600] font-semibold flex flex-col justify-center items-center sm:items-start pl-4 gap-4 text-4xl sm:text-6xl">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/admission">Admission</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
        <div className="h-full w-full bg-white absolute top-0 -z-50"></div>
        <div
          className="bg-[#E42600] w-12 h-12 flex items-center justify-center rounded-full absolute right-8 sm:right-20 top-8 sm:top-10 cursor-pointer"
          onClick={() => setIsOpen(false)}
        >
          <i className="ri-close-large-fill font-[700] text-xl text-[#fff] hover:rotate-[90deg] transition-all ease-in-out duration-300"></i>
        </div>
      </nav>
    </div>
  );
}

export default Header;
