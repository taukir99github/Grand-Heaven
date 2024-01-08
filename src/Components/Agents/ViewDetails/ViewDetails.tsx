import React from "react";
import PersonalHeader from "./PersonalHeader";
import PeronalDetails from "./PeronalDetails";
import ReviewAndRating from "./ReviewAndRating";

const ViewDetails = () => {
  return (
    <div className="bg-gray-100 mt-[5rem]">
      <div className="flex flex-col gap-11 p-8">
        <div>
          <PersonalHeader />
        </div>
        <div>
          <PeronalDetails />
        </div>
        <div>
          <ReviewAndRating />
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
