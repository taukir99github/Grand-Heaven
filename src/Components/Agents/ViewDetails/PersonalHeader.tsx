import React from "react";
import { CiStar } from "react-icons/ci";

const PersonalHeader = () => {
  return (
    <div className="w-full h-auto flex justify-between p-8 px-14">
      <div className="flex gap-16">
        <div className="flex flex-col gap-2">
          <div className="w-[200px] h-[200px] bg-black rounded-[50%]"></div>
          <div className="text-[28px]">Akhsay neje</div>
          <div>Banglore</div>
        </div>
        <div className="w-[120px] h-[80px] bg-white mt-4 flex flex-col items-center justify-center rounded-lg shadow-lg">
          <div className="flex gap-1 text-[20px] items-center font-semibold">
            <div>4.2</div>
            <span className="text-[26px]">
              <CiStar />
            </span>
          </div>
          <div>10 ratings</div>
        </div>
      </div>
      <div className="w-[340px] h-auto bg-white rounded-lg shadow-lg flex flex-col items-center justify-center gap-4 py-2">
        <div className="text-[20px] text-center">
          Contact our Real Estate Experts
        </div>
        <div className="text-[22px]">Akshay neje</div>

        <div className="w-[280px] h-auto bg-white rounded-lg shadow-xl flex flex-col justify-center items-center gap-4 px-3 pb-2">
          <div className="text-center">
            Hi Akshay, Would you like to connect with Sandeep Yadav for Property
            Search
          </div>
          <div className="w-full bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 border border-blue-500 hover:border-transparent rounded flex justify-center items-center">
            <button className="text-center">Contact Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalHeader;
