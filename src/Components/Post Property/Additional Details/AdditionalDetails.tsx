import React from "react";
import { FaPlus } from "react-icons/fa";

function AdditionalDetails() {
  return (
    <div className=" bg-white flex flex-col gap-5 p-8">
      <div>
        <h1 className="font-semibold text-[18px]">
          Provide Details About Your Property
        </h1>
      </div>
      <div className="font-medium text-lg">Property Picture </div>
      <div className="flex items-center justify-center w-full">
        
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              SVG, PNG, JPG, or GIF (MAX. 800x400px)
            </p>
            <div className="py-2 text-sm">Add Minimum 5 pictures</div>
          </div>
          <input
            id="dropzone-file"
            type="file"
            className="hidden"
            // onChange={handleFileChange}
          />
        </label>
      </div>
      <div className="font-medium text-lg">Property Video </div>

      <div className="flex items-center justify-center w-full">
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              SVG, PNG, JPG, or GIF (MAX. 800x400px)
            </p>
            <div className="text-sm p-2">Add 1 Video</div>
          </div>
          <input
            id="dropzone-file"
            type="file"
            className="hidden"
            min={5}
            // onChange={handleFileChange}
          />
        </label>
      </div>

      {/* Additional Info */}
      <div className="mt-2">
        <h1 className="text-[18px] ">Additional Room</h1>
        <div className="flex">
          <div className="border-2 m-1 border-[#232324] rounded-[12px] px-5 py-[3px] text-sm text-gray-300 ">
            Pooja Room
          </div>
          <div className="border-2 m-1 border-[#232324] rounded-[12px] px-5 py-[3px] text-sm text-gray-300">
            Pooja Room
          </div>
          <div className="border-2 m-1 border-[#232324] rounded-[12px] px-5 py-[3px] text-sm text-gray-300">
            Pooja Room
          </div>
          <div className="border-2 m-1 border-[#232324] rounded-[12px] px-5 py-[3px] text-sm text-gray-300">
            Pooja Room
          </div>
        </div>
      </div>

      {/* Possesion Status */}
      <div className="mt-2">
        <h1 className="text-[18px] ">Possesion Status</h1>
        <div className="flex">
          <div className="border-2 m-1 border-[#232324] rounded-[12px] px-5 py-[3px] text-sm text-gray-300">
            Ready To Move
          </div>
          <div className="border-2 m-1 border-[#232324] rounded-[12px] px-5 py-[3px] text-sm text-gray-300">
            Under Construction
          </div>
        </div>
      </div>

      {/* Furnishing Status */}
      <div className="mt-2">
        <h1 className="text-[18px] ">Furnishing Status</h1>
        <div className="flex">
          <div className="border-2 m-1 border-[#232324] rounded-[12px] px-5 py-[3px] text-sm text-gray-300">
            Furnished
          </div>
          <div className="border-2 m-1 border-[#232324] rounded-[12px] px-5 py-[3px] text-sm text-gray-300">
            Semi-furnished
          </div>
          <div className="border-2 m-1 border-[#232324] rounded-[12px] px-5 py-[3px] text-sm text-gray-300">
            Unfurnished
          </div>
        </div>
      </div>

      {/* Age Of Property */}
      <div className="mt-2">
        <h1 className="text-[18px] ">Age Of Property(Years)</h1>
        <div className="flex">
          <div className="border-2 m-1 border-[#232324] rounded-[12px] px-5 py-[3px] text-sm text-gray-300">
            Enter Year
          </div>
        </div>
      </div>

      {/* Number of Bathroom */}
      <div className="mt-2">
        <h1 className="text-[18px] ">Number of Bathroom</h1>
        <div className="flex">
          <div className="border-2 m-1 border-[#232324] rounded-[12px] px-5 py-[3px] text-sm text-gray-300">
            Enter Number
          </div>
        </div>
      </div>

      {/* Covered Parking */}
      <div className="mt-2">
        <h1 className="text-[18px] ">Covered Parking</h1>
        <div className="flex">
          <div className="border-2 m-1 border-[#232324] rounded-[12px] px-5 py-[3px] text-sm text-gray-300">
            Covered Parking
          </div>
        </div>
      </div>

      {/* Uncovered Parking */}
      <div className="mt-2">
        <h1 className="text-[18px] ">Uncovered Parking</h1>
        <div className="flex">
          <div className="border-2 m-1 border-[#232324] rounded-[12px] px-5 py-[3px] text-sm text-gray-300">
            Uncovered Parking
          </div>
        </div>
      </div>

      {/* Balcony */}
      <div className="mt-2">
        <h1 className="text-[18px] ">Balcony</h1>
        <div className="flex">
          <div className="border-2 m-1 border-[#232324] rounded-[12px] px-5 py-[3px] text-sm text-gray-300">
            Balcony
          </div>
        </div>
      </div>

      {/* Power Back Up */}
      <div className="mt-2">
        <h1 className="text-[18px] ">Power Back Up</h1>
        <div className="flex">
          <div className="border-2 m-1 border-[#232324] rounded-[12px] px-5 py-[3px] text-sm text-gray-300">
            Power Back Up
          </div>
        </div>
      </div>

      {/* Facing */}
      <div className="mt-2">
        <h1 className="text-[18px] ">Facing</h1>
        <div className="flex">
          <div className="border-2 m-1 border-[#232324] rounded-[12px] px-5 py-[3px] text-sm text-gray-300">
            Facing
          </div>
        </div>
      </div>

      {/* Flooring */}
      <div className="mt-2">
        <h1 className="text-[18px] ">Flooring</h1>
        <div className="flex">
          <div className="border-2 m-1 border-[#232324] rounded-[12px] px-5 py-[3px] text-sm text-gray-300">
            Flooring
          </div>
        </div>
      </div>

      {/* Floor Number */}
      <div className="mt-2">
        <h1 className="text-[18px] ">Floor Number</h1>
        <div className="flex">
          <div className="border-2 m-1 border-[#232324] rounded-[12px] px-5 py-[3px] text-sm text-gray-300">
            Floor Number
          </div>
        </div>
      </div>

      {/* Tower/Block  */}
      <div className="mt-2">
        <h1 className="text-[18px] ">Tower/Block</h1>
        <div className="flex">
          <div className="border-2 m-1 border-[#232324] rounded-[12px] px-5 py-[3px] text-sm text-gray-300">
            Tower/Block
          </div>
        </div>
      </div>

      {/* Tower Floor Count  */}
      <div className="mt-2">
        <h1 className="text-[18px] ">Tower Floor Count</h1>
        <div className="flex">
          <div className="border-2 m-1 border-[#232324] rounded-[12px] px-5 py-[3px] text-sm text-gray-300">
            Tower Floor Count
          </div>
        </div>
      </div>

      {/* Unit Number  */}

      <div className="mt-2">
        <h1 className="text-[18px] ">Unit Number </h1>
        <div className="flex">
          <div className="border-2 m-1 border-[#232324] rounded-[12px] px-5 py-[3px] text-sm text-gray-300">
            Unit Number
          </div>
        </div>
      </div>

      <div className="flex justify-start gap-2 m-3">
        <button className="bg-slate-400 rounded-[7px] px-7 text-black p-2">
          Back
        </button>
        <button className=" p-2 px-6 rounded-lg bg-[#C92028] text-white transition ease-in-out delay-150 #C92028 hover:-translate-y-1 hover:scale-110 indigo-500 duration-300 ...">
          Save & Continue
        </button>
      </div>
    </div>
  );
}

export default AdditionalDetails;
