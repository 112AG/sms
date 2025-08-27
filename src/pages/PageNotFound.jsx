import React from 'react';
import logo from "../assets/sunriseLogo.webp";
import { Link } from 'react-router-dom';

function PageNotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0F0F0F] text-white px-4">
      {/* Logo */}
      <img
        src={logo}
        alt="Logo"
        className="h-34 w-auto mb-6"
        loading="lazy"
        decoding="async"
      />

      {/* 404 Text */}
      <h1 className="text-7xl font-extrabold text-[#E42600] drop-shadow-lg">
        404
      </h1>
      <h2 className="text-2xl md:text-3xl font-semibold mt-4">
        Oops! Page Not Found
      </h2>
      <p className="text-center text-gray-300 mt-2 max-w-md">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>

      <Link
        to="/"
        className="mt-8 bg-[#E42600] hover:bg-[#ff4d26] text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 shadow-lg"
      >
        Go Back Home
      </Link>
    </div>
  );
}

export default PageNotFound;
