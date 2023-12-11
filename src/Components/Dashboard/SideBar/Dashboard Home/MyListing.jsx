import React from "react";
import Stepper from "../../../ListingPage/Stepper/Stepper";
import PropertyDetails from "../../../ListingPage/PropertyDetails/PropertyDetails";

function MyListing() {
  return (
    <div className="flex flex-col gap-10">
      <div className="h-[100px] bg-white shadow-lg rounded-md"><Stepper/></div>
      <div className="bg-white shadow-lg rounded-lg">
        <PropertyDetails />
      </div>
    </div>
  );
}

export default MyListing;
