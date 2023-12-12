import React from "react";
import Stepper from "../PostProperty/Stepper/Stepper";
import PropertyDetails from "../PostProperty/PropertyDetails/PropertyDetails";
import AdditionalDetails from "../PostProperty/Additional Details/AdditionalDetails";
import Aminities from "../PostProperty/Aminities/Aminities";


function MyListing() {
  return (
    <div className="flex flex-col gap-10">
      <div className="h-[100px] bg-white shadow-lg rounded-md">
        <Stepper />
      </div>
      <div className="bg-white shadow-lg rounded-lg">
        <PropertyDetails />
        <AdditionalDetails />
        <Aminities />
      </div>
    </div>
  );
}

export default MyListing;
