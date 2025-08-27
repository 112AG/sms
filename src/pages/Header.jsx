import React, { useEffect, useState } from "react";
import logo from "../assets/sunriseLogo.webp";
import { Link } from "react-router-dom";
function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

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
      className={`px-4 sm:px-8 lg:px-16 xl:px-20 py-2 sm:py-4 fixed top-0 w-full transition-all duration-300 z-40
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
          <Link className="font-medium cursor-pointer text-[#E42600]">LOGIN</Link>
          <i className="ri-menu-3-fill text-2xl cursor-pointer text-[#E42600]"></i>
        </div>
      </div>
    </div>
  );
}

export default Header;
