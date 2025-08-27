import React from "react";
import { HeroData } from "../utils/data.js";
function Home() {
    const [heroData, setHeroDate] = React.useState(HeroData);
  function handleRight(id) {
    console.log((HeroData.length-1) + 1);
    console.log(id);

  }
  return (
    <div>
<div className="h-[700px] overflow-hidden relative flex items-center">


  {/* Slides */}
  {heroData.map((data, idx) => (
    <div key={idx} className="w-full h-full text-black flex-shrink-0">
          {/* Left Arrow */}
  <div
    className="
      h-10 w-10 text-lg
      sm:h-12 sm:w-12 sm:text-xl
      md:h-14 md:w-14 md:text-2xl
      lg:h-16 lg:w-16 lg:text-3xl
      xl:h-20 xl:w-20 xl:text-4xl
      text-[#195010] bg-white/40 rounded-full font-[800] 
      flex items-center justify-center
      absolute left-4 top-1/2 -translate-y-1/2
      cursor-pointer shadow-md z-40
    "
  >
    <i className="ri-arrow-left-s-line"></i>
  </div>
      <div className="h-full w-screen relative">
        <img
          src={data.img}
          alt=""
          className="object-cover object-center h-full w-full"
        />
      </div>
        {/* Right Arrow */}
  <div
    onClick={ () => handleRight(data.id)}
    className="
      h-10 w-10 text-lg
      sm:h-12 sm:w-12 sm:text-xl
      md:h-14 md:w-14 md:text-2xl
      lg:h-16 lg:w-16 lg:text-3xl
      xl:h-20 xl:w-20 xl:text-4xl
      text-[#195010] bg-white/40 rounded-full font-[800] 
      flex items-center justify-center
      absolute right-4 top-1/2 -translate-y-1/2
      cursor-pointer shadow-md z-40
    "
  >
    <i className="ri-arrow-right-s-line"></i>
  </div>
    </div>
  ))}


</div>

    </div>
  );
}

export default Home;
