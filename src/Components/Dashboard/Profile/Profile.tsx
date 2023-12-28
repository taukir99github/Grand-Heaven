import React from "react";
import neje from "../../../Images/akhsay.jpeg";

const Profile = () => {
  return (
    <div className="w-[100%] flex flex-col">
      <div className="flex gap-12 justify-start items-center p-8">
        <div className="w-[200px] h-[200px] bg-gray-400 rounded-[50%]">
          <img
            src={neje}
            alt=""
            className="object-cover w-full h-full rounded-[50%]"
          />
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-[38px]">Akshay neje</span>
          <span className="text-[24px]">Bangalore</span>
          <span className="text-[20px]">India</span>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-8">
        <div className="text-[34px]">Personal Details</div>

        <div className="w-[60%] h-auto bg-white rounded-lg shadow-xl relative">
          <button className="absolute top-4 right-4 bg-[#C92028] text-white px-6 py-2 rounded-md">
            Edit Profile
          </button>

          <div className="flex justify-between items-center px-14 py-20">
            <div className="flex flex-col gap-6">
              <div>
                <span className="text-[24px]">Name</span>
                <p>Akshay neje</p>
              </div>
              <div>
                <span className="text-[24px]">Date Of Birth</span>
                <p>02-03-2000</p>
              </div>
              <div>
                <span className="text-[24px]">City</span>
                <p>Bangalore</p>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div>
                <span className="text-[24px]">Phone Number</span>
                <p>1234567890</p>
              </div>
              <div>
                <span className="text-[24px]">Email</span>
                <p>abc@gmail.com</p>
              </div>
              <div>
                <span className="text-[24px]">Pin Code</span>
                <p>12345</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
