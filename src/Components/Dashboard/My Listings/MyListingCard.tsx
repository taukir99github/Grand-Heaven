import React from "react";
import cardImg from "../../../Images/Property2.png";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";

const MyListingCard = () => {
  return (
    <div className="w-[300px] h-auto bg-white rounded-lg shadow-2xl">
      <div>
        <img src={cardImg} alt="" className="w-full" />
      </div>
      <div className="p-4 flex flex-col gap-4">
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
          <div className="px-6 py-2 bg-[#C92028] rounded-lg text-white">
            <Link to="/PropertyDetailsPage">
              <button>View</button>
            </Link>
          </div>
          <div className="px-6 py-2 bg-[#C92028] rounded-lg text-white">
            <button>Edit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyListingCard;
