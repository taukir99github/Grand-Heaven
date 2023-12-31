import React from "react";
import "./Properties.css";
import { CiLocationOn } from "react-icons/ci";
import icons1 from "../../../Images/icons1.png";
import icons2 from "../../../Images/icons2.png";
import Property1 from "../../../Images/Property1.png";
import { Link } from "react-router-dom";

const Properties: React.FC = () => {
  return (
    <div className="flex justify-center">
      {/* <div className="font-bold text-2xl">Explore Our Properties</div> */}

      <div className="Properties-card transition ease-in-out delay-250 hover:-translate-y-2 hover:scale-110 duration-300 ...">
        <div className="Properties-card-image ">
          <img src={Property1} alt="" />
        </div>
        <div className="flex flex-col px-2 ">
          <h2 className="font-bold text-lg ">Serene Haven Estates</h2>
          <div className="Properties-card-content-upper-part font-normal text-xs ">
            <CiLocationOn />
            <p> Downtown Metropolis</p>
          </div>
          <div className="Properties-card-content-lower-part font-normal text-xs ">
            <div className="flex items-center gap-1">
              <img src={icons1} alt="" /> 3
            </div>
            <div className="flex items-center gap-1">
              {" "}
              <img src={icons2} alt="" /> 1
            </div>
            <p>$2000000</p>
            <div>
              <Link to="/PropertyDetailsPage">
                <button>view</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Properties;
