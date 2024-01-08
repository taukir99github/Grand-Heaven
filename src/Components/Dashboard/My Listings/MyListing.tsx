import React from "react";
import MyListingCard from "./MyListingCard";
import { Link } from "react-router-dom";

const MyListing = () => {
  return (
    <div className="w-full pb-8 ">
      <div className="flex justify-between p-8 mt-[2rem]">
        <div className="text-[30px]">My Listings</div>
        <div className="px-6 py-4 bg-[#C92028] rounded-lg text-white">
          <Link to="/dashboard/post-property/property-details">
            <button>Add Property</button>
          </Link>
        </div>
      </div>
      <div className="flex justify-between px-11 items-center">
        <MyListingCard />
        <MyListingCard />
        <MyListingCard />
      </div>
    </div>
  );
};

export default MyListing;
