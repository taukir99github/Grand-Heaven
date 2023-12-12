import React, { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import Profile from "../../../Images/DashboardProfile.png";
import Activity from "../../../Images/DashboardActivity.png";
import Property from "../../../Images/DashboardProperty.png";
import Listings from "../../../Images/DashboardListings.png";
import Rent from "../../../Images/DashboardRent.png";
import Logout from "../../../Images/Logout.png";

const SideBar: React.FC = () => {
  const sidebarMenu = [
    {
      id: 1,
      path: "/dashboard/profile-page",
      image: Profile,
      text: "Profile",
    },
    {
      id: 2,
      path: "/dashboard/my-activity",
      image: Activity,
      text: "My Activity",
    },
    {
      id: 3,
      path: "/dashboard/post-property",
      image: Property,
      text: "Post Property",
    },
    {
      id: 4,
      path: "/dashboard/my-listings",
      image: Listings,
      text: "My Listings",
    },
    {
      id: 5,
      path: "/dashboard/rent",
      image: Rent,
      text: "Profile",
    },
    {
      id: 6,
      path: "/dashboard",
      image: Logout,
      text: "Logout",
    },
    {
      id: 7,
      path: "/dashboard",
      image: Profile,
      text: "Profile",
    },
  ];

  const [sideMenu, setSideMenu] = useState(false);

  return (
    <div className="cursor-pointer bg-white flex flex-col gap-6 p-3">
      {sideMenu ? (
        <RxCross2 onClick={() => setSideMenu(false)} className="text-[30px]" />
      ) : (
        <IoMenu onClick={() => setSideMenu(true)} className="text-[30px]" />
      )}
      {sideMenu &&
        sidebarMenu.map((item, index) => (
          <Link to={item.path} key={index}>
            <div className="w-[200px] m-1 flex gap-5 p-2 box hover:shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 rounded-lg duration-300 ...">
              <div>
                <img src={item.image} alt="" />
              </div>
              <div>
                <span className="font-normal text-[16px]">{item.text}</span>
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default SideBar;
