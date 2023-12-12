import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

interface SideBarProps {
  item: {
    id: number;
    path: string;
    image: string;
    text: string;
  };
}

const SideBar: React.FC<SideBarProps> = ({ item }) => {
  return (
    <div className="w-[200px] m-1 flex gap-5 p-2 box ">
      <div>
        <img src={item.image} alt="" />
      </div>
      <div>
        <span className="font-normal text-[16px]">{item.text}</span>
      </div>
    </div>
  );
};

export default SideBar;
