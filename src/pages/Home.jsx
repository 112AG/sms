import React, { useEffect, useState } from "react";
import { HeroData } from "../utils/data.js";
import { Link } from "react-router-dom";
import backgroundImage from "../assets/home/sunrisebackgroundimage.webp";
import backgroundImagetwo from "../assets/home/sunrisefestival.webp";
import { teamData, galleryData, faqs } from "../utils/data.js";

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slide, setSlide] = useState(0);
  const [open, setOpen] = useState(null);

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

  const toggle = (i) => setOpen((prev) => (prev === i ? null : i));
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
              index === slide
                ? "opacity-100"
                : "opacity-0 pointer-events-none translate-x-80"
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
        className="w-full h-full py-12 sm:py-0 sm:h-screen bg-cover bg-center relative flex flex-col items-center justify-start px-4 text-white"
        style={{ backgroundImage: `url(${backgroundImagetwo})` }}
      >
        <h2 className="text-[#E42600] uppercase text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold py-2 sm:py-4 md:py-6">
          Recent Image gallary
        </h2>
        {/* cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryData.map((item) => (
            <div
              key={item.id}
              className="relative group h-[260px] w-[320px] rounded-xl border border-[#E42600] overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 ease-in-out mx-auto"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover object-center transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent group-hover:opacity-0 opacity-100 transition-opacity duration-500"></div>

              <div className="absolute inset-0 flex items-center justify-center group-hover:opacity-0 opacity-100 transition-opacity duration-500">
                <p className="text-white text-lg font-semibold tracking-wide">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* pg-5 */}
      <div className="px-4 sm:px-8 lg:px-16 xl:px-20 flex justify-between item-center w-full h-full py-10">
        <div className="rounded-2xl max-w-2xl border border-[#E42600]/0 overflow-hidden">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className={`group border-b last:border-b-0 border-[#E42600]/20 bg-white transition-colors`}
              >
                <button
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  className="w-full text-left px-4 sm:px-6 py-4 sm:py-5 flex items-center gap-3"
                >
                  {/* Accent bar (mobile hidden to keep clean) */}
                  <span
                    className={`hidden sm:inline-block h-6 w-1 rounded-full transition-colors ${
                      isOpen ? "bg-[#E42600]" : "bg-[#E42600]/40"
                    }`}
                  />
                  <span className="flex-1 font-semibold text-base sm:text-lg md:text-xl">
                    {item.q}
                  </span>

                  {/* Plus / Minus icon */}
                  <span
                    className={`shrink-0 inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#E42600]/40 text-[#E42600] transition-all pb-1 duration-300 ${
                      isOpen
                        ? "rotate-45 bg-[#E42600]/10"
                        : "rotate-0 bg-transparent"
                    }`}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>

                {/* Answer with smooth height animation using CSS grid trick */}
                <div
                  id={`faq-panel-${i}`}
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden px-4 sm:px-6 pb-4 sm:pb-5 text-sm sm:text-base text-black/80">
                    {item.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="w-[250px] sm:w-[300px] md:w-[400px] lg:w-[500px] xl:w-[550px] 2xl:w-[600px] h-auto object-contain bg-black overflow-hidden rounded-2xl"> <img src={backgroundImagetwo} alt="faq" className="object-center h-full w-full" /></div>
      </div>
    </div>
  );
}

export default Home;
