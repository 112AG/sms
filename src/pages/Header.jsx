import React, { useEffect, useState } from "react";

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
      className={`px-4 sm:px-8 lg:px-16 xl:px-20 py-4 sm:py-6  fixed top-0 w-full transition-all duration-300 z-40
      ${isScrolled ? "bg-white/20 backdrop-blur-sm shadow-lg" : "bg-white"}`}
    >
      <div className="flex items-center justify-between">
        <h1 className="text-xl sm:text-2xl font-bold text-[#195010]">LOGO</h1>
        <div className="flex items-center gap-4">
          <p className="font-medium cursor-pointer text-[#195010]">LOGIN</p>
          <i className="ri-menu-3-fill text-2xl cursor-pointer text-[#195010]"></i>
        </div>
      </div>
    </div>
  );
}

export default Header;
