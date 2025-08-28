import React, { useEffect, useState } from "react";
import { HeroData } from "../utils/data.js";
import { Link } from "react-router-dom";
import backgroundImage from "../assets/home/sunrisebackgroundimage.webp";
import backgroundImagetwo from "../assets/home/sunrisefestival.webp";
import { teamData } from "../utils/data.js";

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slide, setSlide] = useState(0);

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

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((prev) => (prev === teamData.length - 1 ? 0 : prev + 1));
    }, 11000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="pt-12 sm:pt-20 lg:pt-24 xl:pt-28">
      {/* pg-1 */}
      <div className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] overflow-hidden relative flex items-center">
        {/* Slides */}
        {HeroData.map((data, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-700 ${
              idx === currentIndex
                ? "opacity-100"
                : "opacity-0 pointer-events-none"
            }`}
          >
            {/* Background Image */}
            <div className="h-full w-full relative">
              <div className="bg-black/40 absolute inset-0"></div>
              <img
                src={data.img}
                alt={data.Heading}
                className="object-cover object-center h-full w-full "
              />
            </div>

            {/* Text Content */}
            <div className="absolute inset-0 flex flex-col items-center sm:items-start sm:left-[10%] justify-center text-center text-white z-10 px-4">
              <h1 className="text-[14px] sm:text-xl xl:text-[2xl] font-[400] bg-[#E42600] px-2 py-[1px]">
                {data.Heading}
              </h1>
              <p className="mt-1 text-[22px] sm:text-[30px] xl:text-[44px] 2xl:text-[54px] font-[700]">
                {data.subHeading}
              </p>
              <Link
                to={data.link}
                className="border-[1px] border-[#fff] rounded-[4px] text-[#fff] font-[100] bg-[#E42600]/80 px-4 py-1 xl:py-2 xl:px-8 xl:text-[20px] mt-2 xl:mt-6"
              >
                {data.button}
              </Link>
            </div>
            {/* play button */}
            <div className="absolute top-[50%] z-40 left-[76%] -translate-x-1/2 -translate-y-1/2 hidden lg:flex items-center justify-center gap-2">
              <div className="h-20 w-20 bg-white rounded-full flex items-center justify-center cursor-pointer">
                <i className="ri-play-mini-fill text-5xl text-[#E42600] pl-2 tex-[14px]"></i>
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

      {/* pg-2 */}
      <div
        className="w-full h-full py-12 sm:py-0 sm:h-screen bg-cover bg-center relative flex flex-col items-center justify-center px-4 text-white"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Optional overlay if needed */}
        {/* <div className="absolute inset-0 bg-[#E42600]/60"></div> */}

        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-center">
          Discover
        </h2>

        <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold py-4 text-center">
          Sunrise Academy
        </h3>

        <p className="max-w-[900px] text-xs sm:text-sm md:text-base lg:text-lg text-center leading-relaxed sm:leading-normal">
          Sunrise Academy, established in 2005, is a premier institution
          dedicated to excellence in education and holistic development.
          Affiliated to CBSE, the academy provides a nurturing environment where
          students are encouraged to grow intellectually, socially, and
          emotionally. Since its inception, Sunrise Academy has been committed
          to fostering a culture of curiosity, innovation, and lifelong
          learning.
          <br />
          <br />
          We strive to provide quality education to every learner who walks
          through our doors in pursuit of knowledge. Our mission is to develop
          compassionate individuals who value discipline, respect, and
          responsibility, while embracing the importance of teamwork and human
          values. At Sunrise Academy, we believe in shaping not just bright
          minds, but also caring hearts— ensuring our students grow into
          confident global citizens, ready to make a positive difference in the
          world.
        </p>
      </div>

      {/* pg-3 */}
      <div className="w-full h-[850px] sm:h-[550px] flex items-center justify-center py-12 px-4 sm:px-8 lg:px-16 ">
        {teamData.map((member, index) => (
          <div
            key={index}
            className={`${
              index === slide ? "opacity-100" : "opacity-0 pointer-events-none translate-x-80"
            } transition-opacity duration-500`}
          >
            {index === slide && (
              <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Left Image */}
                <div className="flex justify-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="rounded-md shadow-md w-full sm:max-w-[450px] object-cover"
                  />
                </div>

                {/* Right Content */}
                <div className="text-left">
                  <h4 className="text-[#E42600] font-bold text-xl mb-2">
                    MEET THE
                  </h4>
                  <h2 className="text-4xl font-bold text-black mb-4">
                    {member.role.toUpperCase()}
                  </h2>
                  <p className="text-base text-black leading-relaxed mb-4">
                    {member.description}
                  </p>
                  <p className="text-black font-semibold">– {member.name}</p>
                  {/* <button className="mt-4 text-[#E42600] font-bold border-b-2 border-[#E42600] hover:text-black hover:border-black transition-all">
            Read More
          </button> */}
                </div>
              </div>
            )}
          </div>
        ))}
        
      </div>

      {/* pg-4 */}
            <div
        className="w-full h-full py-12 sm:py-0 sm:h-screen bg-cover bg-center relative flex flex-col items-center justify-center px-4 text-white"
        style={{ backgroundImage: `url(${backgroundImagetwo})` }}
      ></div>
    </div>
  );
}

export default Home;
