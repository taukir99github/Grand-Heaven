import React from "react";
import { Stepper as FormStepper, Step } from "react-form-stepper";
import { GrHomeRounded } from "react-icons/gr";
import sale from "../../../Images/Sale.png";
import Rent from "../../../Images/Rent.png";
import Residential from "../../../Images/Residential.png";

const Stepper = () => {
  const steps = [
    { label: "Property details", icon: <GrHomeRounded /> },
    { label: "Additional Details", icon: <GrHomeRounded /> },
    { label: "Amenties", icon: <GrHomeRounded /> },
  ];

  return (
    <div>
      <div>
        <FormStepper activeStep={0}>
          {steps.map((step, index) => (
            <Step key={index} label={step.label}>
              {step.icon}
            </Step>
          ))}
        </FormStepper>
      </div>
      {/* after stepper componenet */}

      <div className="pl-8 flex flex-col gap-5">
        <div>
          <h1 className="font-semibold text-[20px]">
            Provide Details About Your Property
          </h1>
        </div>
        <div>
          <span>Property Listing For</span>
          <div className="flex gap-4 text-center ">
            <div className="flex p-2 px-6 bg-black rounded-md gap-3">
              <div>
                <img src={sale} alt="" />
              </div>
              <div className="text-white">Sale</div>
            </div>
            <div className="flex p-2 px-4  rounded-md gap-3 border border-black">
              <div>
                <img src={Rent} alt="" />
              </div>
              <div className="text-black">Rent</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stepper;
