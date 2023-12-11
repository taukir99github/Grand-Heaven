import React, { useState } from "react";
import SideBar from "../SideBar";
import Profile from "../../../../Images/DashboardProfile.png";
import Activity from "../../../../Images/DashboardActivity.png";
import Property from "../../../../Images/DashboardProperty.png";
import Listings from "../../../../Images/DashboardListings.png";
import Rent from "../../../../Images/DashboardRent.png";
import Logout from "../../../../Images/Logout.png";
import Stepper from "../../../ListingPage/Stepper/Stepper";
import MyListing from "./MyListing";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

function Home() {
  const sidebarMenu = [
    {
      id: 1,
      path: "",
      image: Profile,
      text: "Profile",
    },
    {
      id: 2,
      path: "",
      image: Activity,
      text: "My Activity",
    },
    {
      id: 3,
      path: "",
      image: Property,
      text: "Post Property",
    },
    {
      id: 4,
      path: "",
      image: Listings,
      text: "My Listings",
    },
    {
      id: 5,
      path: "",
      image: Rent,
      text: "Profile",
    },
    {
      id: 6,
      path: "",
      image: Logout,
      text: "Logout",
    },
    {
      id: 7,
      path: "",
      image: Profile,
      text: "Profile",
    },
  ];
  const [sideMenu, setSideMenu] = useState(false);
  return (
    <div className="bg-gray-100 flex gap-10 justify-center pt-8 px-7">
      <div className="cursor-pointer bg-white flex flex-col gap-6 p-3">
        {sideMenu ? (
          <RxCross2 onClick={() => setSideMenu(false)} className="text-[30px]"/>
          ) : (
          <IoMenu onClick={() => setSideMenu(true)} className="text-[30px]"/>
        )}
        {sideMenu && sidebarMenu.map((item) => <SideBar item={item} />)}
      </div>
      <div className="w-[100%]">
        <MyListing />
      </div>
    </div>
  );
}

export default Home;
