import React from "react";
import { CiStar } from "react-icons/ci";
import neje from "../../Images/akhsay.jpeg";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";

const AgentsCard = () => {
  return (
    <div>
      <div className="w-[540px] h-auto bg-stone-200 flex gap-8 p-4 rounded-lg shadow-xl">
        <div className="flex flex-col gap-2">
          <div className="w-[150px] h-[150px] bg-gray-400">
            <img src={neje} alt="" className="w-full h-full" />
          </div>
          <Link to={"/ViewDetails"}>
          <div className="text-center cursor-pointer hover:underline">
            view Profile
          </div>
          </Link>
        </div>
        <div className="flex gap-20">
          <div className="flex flex-col gap-2 ">
            <div className="flex gap-20">
              <span className="text-[28px]">Akshay neje</span>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                Contact
              </button>
            </div>
            <div className="flex gap-2 items-center">
              <span>
                <CiLocationOn />
              </span>
              <span>Banglore</span>
            </div>

            <span>+5 Year Experience</span>
            <span>Hindi English</span>
            <div className="flex gap-3">
              <CiStar className=" text-[22px] text-yellow-400" />
              <CiStar className=" text-[22px] text-yellow-400" />
              <CiStar className=" text-[22px] text-yellow-400" />
              <CiStar className=" text-[22px] text-yellow-400" />
              <CiStar className=" text-[22px] text-yellow-400" />
              <span className="text-[14px] underline cursor-pointer">
                8+ ratings
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentsCard;
