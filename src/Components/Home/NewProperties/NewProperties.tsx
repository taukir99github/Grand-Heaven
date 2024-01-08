import React from "react";
import PropertiesLeft from "../../../Images/NewPropertiesLeft.png";
import Propertiesleft1 from "../../../Images/NewPropertiesleft1.png";
import PropertiesRight from "../../../Images/NewPropertiesRight.png";
import { Slide } from "react-awesome-reveal";
import { Fade } from "react-awesome-reveal";
import { Zoom } from "react-awesome-reveal";

const NewProperties: React.FC = () => {
  return (
    <>
      <h1 className="font-bold text-2xl ml-10">New Properties</h1>
      <div className="flex justify-center items-center gap-4 mt-11">
        <Slide direction="Left">
          <div className="flex flex-col gap-4">
            <img src={PropertiesLeft} alt="" />
            <img src={Propertiesleft1} alt="" />
          </div>
        </Slide>
        <Fade direction="right">
          <div>
            <img src={PropertiesRight} alt="" />
          </div>
        </Fade>
      </div>
    </>
  );
};

export default NewProperties;
