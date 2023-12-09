import React from "react";
import "./Subscribe.css";
import SubscribeImg from "../../../Images/SubscribeImage.png";
import { MdOutlineMessage } from "react-icons/md";

const Subscribe: React.FC = () => {
  return (
    <div className="flex justify-center">
      <div className="Subscribe-section w-[95%] bg-[#C92028] flex justify-center items-center mt-8 rounded-lg">
        <div className="Subscribe-section-pt-1  ">
            <div className="flex flex-col gap-4">
          <p className="font-semibold text-[24px] text-white">Unlock Exclusive Real Estate Insights!</p>
          <span className="font-normal text-[16px] text-white ">
            Get exclusive real estate insights delivered straight to your inbox.
            Sign up now for the latest property listings, market trends, and
            expert advice!
          </span>
          </div>
          <div className="input-field">
            <MdOutlineMessage className="message-section"/>
            <input type="text" placeholder="Enter your Email Address" />
            <button  >Subscribe</button>
          </div>
        </div>
        <div className="Subscribe-section-pt-2">
          <img src={SubscribeImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
