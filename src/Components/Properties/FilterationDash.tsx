import React from "react";
import Slider from "@mui/material/Slider";

function FilterationDash() {
  const [value, setValue] = React.useState([20, 37]);

  return (
    <div className="bg-white h-auto max-h-screen overflow-y-auto flex flex-col gap-7 p-4 shadow-2xl rounded-xl sticky top-0">
      <div className="text-center font-semibold text-[24px] tracking-wide">
        Filters
      </div>

      {/* Property Type */}
      <div className="flex flex-col gap-4">
        <span className="text-[17px] font-semibold">Property Type</span>
        <div className="flex flex-wrap gap-4 cursor-pointer">
          {["Appratment", "Villa", "Flat", "PG", "Penthouse", "Plot"].map(
            (item) => (
              <div
                className="py-2 px-4 border-2 text-center text-[14px] rounded-lg shadow-sm"
                key={item}
              >
                {item}
              </div>
            )
          )}
        </div>
      </div>

      {/* BHK */}

      <div className="flex flex-col gap-4">
        <span className="text-[17px] font-semibold">BHK</span>
        <div className="flex gap-4 flex-wrap cursor-pointer ">
          {["1BHK", "2BHK", "3BHK", "4BHK+"].map((item) => (
            <div
              className="p-2 border-2 text-center text-[14px] rounded-lg shadow-sm"
              key={item}
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Furinishing */}
      <div className="flex flex-col gap-4">
        <span className="text-[17px] font-semibold">Furnishing</span>
        <div className="flex flex-wrap gap-4 cursor-pointer">
          {["Furnished", "Semi-Furnished", "UnFurnished"].map((item) => (
            <div
              className="p-2 border-2 text-center text-[14px] rounded-lg shadow-sm"
              key={item}
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Parking */}
      <div className="flex flex-col gap-4">
        <span className="text-[17px] font-semibold">Parking</span>
        <div className="flex flex-wrap gap-4 cursor-pointer">
          {["1", "2", "3", "4+"].map((item) => (
            <div
              className="px-6 py-2 border-2 text-center text-[14px] rounded-lg shadow-sm"
              key={item}
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Property Status */}
      <div className="">
        <span className="text-[17px] font-semibold">Status</span>
        <div className="flex gap-4 text-center text-[14px]">
          <div className="flex gap-2">
            <input type="radio" />
            <span>Ready To Move</span>
          </div>
          <div className="flex gap-2">
            <input type="radio" />
            <span>Under Construction</span>
          </div>
        </div>
      </div>

      {/* Price Filteration */}
      <div>
        <span className="text-[17px] font-semibold">
          Price Range : $12 to $130
        </span>
        <Slider
          getAriaLabel={() => "Temperature range"}
          value={value}
          // onChange={handleChange}
          valueLabelDisplay="auto"
          // getAriaValueText={valuetext}
        />
      </div>
      <div className="flex">
        {/* <div className=""></div> */}
        <button className="relative inline-flex  w-full items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
          <span className="relative px-5 py-2.5 w-full transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Filter
          </span>
        </button>
      </div>
    </div>
  );
}

export default FilterationDash;
