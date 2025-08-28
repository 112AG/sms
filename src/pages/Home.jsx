import React, { useState } from "react";
import { HeroData } from "../utils/data.js";
import { Link } from "react-router-dom";
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
          <div className="absolute inset-0 flex flex-col items-center sm:items-start sm:left-[10%] justify-center text-center text-white z-10 px-4">
            <h1 className="text-[14px] sm:text-xl xl:text-[2xl] font-[400] bg-[#E42600] px-2 py-[1px]">{data.Heading}</h1>
            <p className="mt-1 text-[22px] sm:text-[30px] xl:text-[44px] 2xl:text-[54px] font-[700]">{data.subHeading}</p>
            <Link to={data.link} className="border-[1px] border-[#fff] rounded-[4px] text-[#fff] font-[100] bg-[#E42600]/80 px-4 py-1 xl:py-2 xl:px-8 xl:text-[20px] mt-2 xl:mt-6">{data.button}</Link>
          </div>
          {/* play button */}
          <div className="absolute top-[50%] z-40 left-[76%] -translate-x-1/2 -translate-y-1/2 hidden lg:flex items-center justify-center gap-2">
            <div className="h-20 w-20 bg-white rounded-full flex items-center justify-center cursor-pointer">
            <i class="ri-play-mini-fill text-5xl text-[#E42600] pl-2 tex-[14px]"></i>
          </div>
                      <div className="text-white font-[400] italic text-[20px]">
              Watch Video <br /> Intro
            </div>
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
