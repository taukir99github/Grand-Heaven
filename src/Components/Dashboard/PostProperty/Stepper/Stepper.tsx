import { Stepper as FormStepper, Step } from "react-form-stepper";
import { GrHomeRounded } from "react-icons/gr";
import { Link, useNavigate } from "react-router-dom";

const Stepper = () => {
  const navigate = useNavigate();
  const steps = [
    {
      label: "Property details",
      icon: <GrHomeRounded />,
      path: "/dashboard/post-property/property-details",
    },
    {
      label: "Additional Details",
      icon: <GrHomeRounded />,
      path: "/dashboard/post-property/additional-details",
    },
    {
      label: "Amenties",
      icon: <GrHomeRounded />,
      path: "/dashboard/post-property/aminities",
    },
  ];

  return (
    <div>
      <div>
        <FormStepper activeStep={2}>
          {steps.map((step, index) => (
            <Step
              key={index}
              label={step.label}
              onClick={() => navigate(step.path)}
            >
              {step.icon}
            </Step>
          ))}
        </FormStepper>
      </div>
    </div>
  );
};

export default Stepper;
