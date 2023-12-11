import React from "react";
import { Stepper as FormStepper, Step } from "react-form-stepper";
import { GrHomeRounded } from "react-icons/gr";

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
    </div>
  );
};

export default Stepper;
