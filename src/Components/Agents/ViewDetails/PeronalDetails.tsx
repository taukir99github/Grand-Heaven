import React from "react";
import { FcBusinessman } from "react-icons/fc";
import { MdMarkEmailRead } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { LiaLanguageSolid } from "react-icons/lia";
import { IoMdListBox } from "react-icons/io";

const PeronalDetails = () => {
  return (
    <div className="w-[400px] h-auto p-5 bg-white rounded-lg shadow-lg">
      <div className="flex flex-col gap-4">
        <div className="text-[25px] p-2">Personal Details</div>
        <div className="flex flex-col gap-4">
          <div className="flex gap-3">
            <span className="text-[28px]">
              <FcBusinessman />
            </span>
            <span>10+ Years of Experience</span>
          </div>
          <div className="flex gap-3">
            <span className="text-[28px]">
              <MdMarkEmailRead />
            </span>
            <span>abc@gmauil.com</span>
          </div>
          <div className="flex gap-3">
            <span className="text-[28px]">
              <FiPhoneCall />
            </span>
            <span>1234567890</span>
          </div>
          <div className="flex gap-3">
            <span className="text-[28px]">
              <HiOutlineBuildingOffice2 />
            </span>
            <span>Banglore</span>
          </div>
          <div className="flex gap-3">
            <span className="text-[28px]">
              <LiaLanguageSolid />
            </span>
            <span>English Hindi</span>
          </div>
          <div className="flex gap-3">
            <span className="text-[28px]">
              <IoMdListBox />
            </span>
            <span>10 Listings</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeronalDetails;
