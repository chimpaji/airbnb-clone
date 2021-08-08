import React, { useState } from "react";
import Image from "next/image";
import {
  GlobeAltIcon,
  GlobeIcon,
  MenuIcon,
  SearchIcon,
  UserCircleIcon,
  UserIcon,
} from "@heroicons/react/solid";
import { useRouter } from "next/router";

// for react date range only
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

function Header({ placeholder }) {
  const router = useRouter();

  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState(1);

  const selectionRange = { startDate, endDate, key: "Selection" };

  function handleSelect(ranges) {
    console.log(ranges);
    setStartDate(ranges.Selection.startDate);
    setEndDate(ranges.Selection.endDate);
    // {
    //   selection: {
    //     startDate: [native Date Object],
    //     endDate: [native Date Object],
    //   }
    // }
  }

  function resetInput() {
    setSearchInput("");
  }

  function search() {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuests,
      },
    });
  }
  return (
    <header className="bg-white sticky z-50 top-0 grid grid-cols-3 shadow-md p-5">
      {/* Left */}
      <div
        onClick={() => router.push("/")}
        className="relative flex items-center h-10 my-auto cursor-pointer "
      >
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
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          type="text"
          className="md:pl-5 flex-grow outline-none box-border w-full md:w-max text-gray-600"
          placeholder={placeholder || "Search your place"}
        />
        <SearchIcon className=" h-8 p-1 cursor-pointer text-white bg-red-400 rounded-full hidden md:block" />
      </div>
      {/* Right */}
      <div className="flex items-center justify-end space-x-4 text-gray-600">
        <p className="hidden md:block">Become a host</p>
        <GlobeAltIcon className="h-8" />
        <div className="flex space-x-2 border-2 rounded-full p-2">
          <UserCircleIcon className="h-8" />
          <MenuIcon className="h-8" />
        </div>
      </div>
      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto ">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleSelect}
          />
          <div className="flex">
            <h2 className="flex-grow font-bold">Number of Guests</h2>
            <input
              type="number"
              value={noOfGuests}
              className="outline-none text-right"
              onChange={(e) => setNoOfGuests(e.target.value)}
              min={0}
              max={25}
            />
            <UserIcon className="h-6 w-6" />
          </div>
          <div className="flex">
            <button className="flex-grow" onClick={resetInput}>
              Cancel
            </button>
            <button
              className="flex-grow"
              className="text-red-600"
              onClick={() => search()}
            >
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
