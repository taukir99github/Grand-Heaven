import React from "react";
import Prop from "../../Images/Property3.png";
import { CiLocationOn } from "react-icons/ci";
function PropertiesCard() {
  return (
    <div className="h-auto w-[300px] cursor-pointer flex flex-col gap-4 shadow-lg rounded-xl">
      <img src={Prop} className="w-[100%] h-[300px]" alt="" />

      <div className="bg-white flex justify-around items-center p-2">
        <div className="flex flex-col gap-2">
          <div>
            <h1 className="font-bold text-[20px]">New York City</h1>
          </div>
          <div className="flex gap-1 items-center justify-center">
            <div><CiLocationOn className="text-[18px]"/></div>
            <p>Enjoy your Stay</p>
          </div>
          <div>
            <span>$12,23,3333</span>
          </div>
        </div>
        <div className="">
          <button className="bg-sky-500 text-center rounded-lg px-6 py-2 text-white">
            view
          </button>
        </div>
      </div>
    </div>
  );
}

export default PropertiesCard;
