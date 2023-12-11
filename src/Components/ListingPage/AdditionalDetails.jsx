import React from "react";
import { FaPlus } from "react-icons/fa";

function AdditionalDetails() {
  return (
    <div className="pl-[300px] flex flex-col gap-5">
      <div>
        <h1 className="font-semibold text-[18px]">
          Provide Details About Your Property
        </h1>
      </div>
      <div className="cursor-pointer">
        <h1 className="text-[18px]">Property Picture</h1>
        <div className="mt-1">
          <div className="bg-neutral-100 py-24 w-[97%] flex flex-col justify-center items-center">
            <button className="bg-white p-1 flex m-2 border-2 border-[#232324] rounded-[12px]">
              <FaPlus className="m-1" />
              Add Pictures
            </button>
            <span className="text-[18px]">Add Minimum 5 Pictures</span>
          </div>
        </div>
      </div>
      <div className="my-3 cursor-pointer">
        <h1 className="text-[18px] ">Property Videos</h1>
        <div className="mt-1">
          <div className="bg-neutral-100 py-24 w-[97%] flex flex-col justify-center items-center">
            <button className="bg-white flex p-1 m-2 border-2 border-[#232324] rounded-[12px]">
              <FaPlus className="m-1" />
              Add Pictures
            </button>
            <span className="text-[18px]">Add 1 Video</span>
          </div>
        </div>
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
        <button className="bg-slate-400 rounded-[7px] px-7 text-black p-2">Back</button>
        <button className="bg-red-700 rounded-[7px] text-white p-2 px-6">Save & Continue</button>
      </div>


    </div>
  );
}

export default AdditionalDetails;
