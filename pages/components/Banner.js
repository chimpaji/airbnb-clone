import Image from "next/image";
import React from "react";

function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        src="https://a0.muscache.com/im/pictures/e4a2a61c-589f-4e49-b3b8-968a6bc23389.jpg"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute w-full h-full flex flex-col items-start  justify-center pl-24">
        <p className="text-6xl w-24 font-bold text-white ">
          Olympian & Paralympian Online Experiences
        </p>
        <button className="text-black bg-white px-6 py-2  shadow-md rounded-full font-bold hover:shadow-xl my-6 active:scale-90 transition duration-150">
          Explore now
        </button>
      </div>
    </div>
  );
}

export default Banner;
