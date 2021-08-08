import React from "react";
import Image from "next/image";
import { SearchIcon } from "@heroicons/react/solid";

function Header() {
  return (
    <header className="sticky z-50 top-0 grid grid-cols-3 shadow-md p-5">
      {/* Left */}
      <div className="relative flex items-center h-10 my-auto cursor-pointer">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png"
          layout="fill"
          //keep aspect ratio
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      {/* Center --Search-- */}
      <div className="bg-white flex rounded-full p-2 border-2">
        <input
          type="text"
          className="md:pl-5 flex-grow outline-none box-border w-full md:w-max text-gray-600"
          placeholder="Search your place"
        />
        <SearchIcon className=" h-8 p-1 cursor-pointer text-white bg-red-400 rounded-full hidden md:block" />
      </div>
      {/* Right */}
      <div></div>
    </header>
  );
}

export default Header;
