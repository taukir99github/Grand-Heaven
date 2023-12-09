import React from "react";
import PropertiesLeft from "../../../Images/NewPropertiesLeft.png";
import Propertiesleft1 from "../../../Images/NewPropertiesleft1.png";
import PropertiesRight from "../../../Images/NewPropertiesRight.png";

const NewProperties: React.FC = () => {
  return (
    <>
    <h1 className="font-bold text-2xl ml-10">New Properties</h1>
      <div className="flex justify-between px-11 mt-11">
      
        <div className="flex flex-col gap-4">
         
          <img src={PropertiesLeft} alt="" />
          <img src={Propertiesleft1} alt="" />
        </div>
        <div>
          <img src={PropertiesRight} alt="" />
        </div>
      </div>
    </>
  );
};

export default NewProperties;
