import React, { useState } from "react";
import cardImg from "../../../Images/Property2.png";
import { CiLocationOn } from "react-icons/ci";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Link } from "react-router-dom";

const MyListingCard = () => {
  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  return (
    <div className="w-[300px] h-auto bg-white rounded-lg shadow-2xl relative">
      <div>
        <img src={cardImg} alt="" className="w-full" />
      </div>
      <div className="p-4 flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-[18px]">Property Name</span>
            <div className="flex items-center gap-3 text-[16px]">
              <span>
                <CiLocationOn />
              </span>
              <span>Address</span>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="relative">
              <div
                className="px-6 py-2  rounded-lg text-[20px] cursor-pointer"
                onClick={toggleOptions}
              >
                <BsThreeDotsVertical />
              </div>
              {showOptions && (
                <div className="absolute right-0 mt-2 w-46 bg-white border border-gray-200 rounded-md shadow-lg py-1">
              
                  <div className="bg-transparent hover:bg-blue-500  font-medium hover:text-white py-2 px-4 hover:border-transparent rounded">
                    Edit
                  </div>
                  
                  <div className="bg-transparent hover:bg-blue-500  font-medium hover:text-white py-2 px-4 hover:border-transparent rounded">
                    Delete
                  </div>
                  <div className="bg-transparent hover:bg-blue-500  font-medium hover:text-white py-2 px-4 hover:border-transparent rounded">
                    Leads
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyListingCard;
