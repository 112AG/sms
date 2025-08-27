import React, { useState } from "react";
import { HeroData } from "../utils/data.js";
function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleRight = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === HeroData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleLeft = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? HeroData.length - 1 : prevIndex - 1
    );
  };
  return (
    <div className="pt-12 sm:pt-20 lg:pt-24 xl:pt-28">
      <div className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] overflow-hidden relative flex items-center">
        {/* Slides */}
      {HeroData.map((data, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-700 ${
            idx === currentIndex ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          {/* Background Image */}
          <div className="h-full w-full relative">
            <div className="bg-black/40 absolute inset-0"></div>
            <img
              src={data.img}
              alt={data.Heading}
              className="object-cover object-center h-full w-full"
            />
          </div>

          {/* Text Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10 px-4">
            <h1 className="text-3xl sm:text-5xl font-bold">{data.Heading}</h1>
            <p className="mt-2 text-lg sm:text-xl">{data.subHeading}</p>
          </div>
        </div>
      ))}

      {/* Left Arrow */}
      <div
        onClick={handleLeft}
        className="
          h-10 w-10 text-lg
          sm:h-12 sm:w-12 sm:text-xl
          md:h-14 md:w-14 md:text-2xl
          lg:h-16 lg:w-16 lg:text-3xl
          xl:h-20 xl:w-20 xl:text-4xl
          text-[#E42600] rounded-full font-[800]
          flex items-center justify-center
          absolute left-4 top-1/2 -translate-y-1/2
          cursor-pointer shadow-md hover:shadow-2xl hover:scale-90
          z-40 transition-all ease-in-out duration-300 sm:bg-white/40
        "
      >
        <i className="ri-arrow-left-s-line"></i>
      </div>

      {/* Right Arrow */}
      <div
        onClick={handleRight}
        className="
          h-10 w-10 text-lg
          sm:h-12 sm:w-12 sm:text-xl
          md:h-14 md:w-14 md:text-2xl
          lg:h-16 lg:w-16 lg:text-3xl
          xl:h-20 xl:w-20 xl:text-4xl
          text-[#E42600] rounded-full font-[800]
          flex items-center justify-center
          absolute right-4 top-1/2 -translate-y-1/2
          cursor-pointer shadow-md hover:shadow-2xl hover:scale-90
          z-40 transition-all ease-in-out duration-300 sm:bg-white/40
        "
      >
        <i className="ri-arrow-right-s-line"></i>
    </div>
      </div>
    </div>
  );
}

export default Home;
