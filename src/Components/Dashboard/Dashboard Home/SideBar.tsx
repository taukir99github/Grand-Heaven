import React, { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { Link, useLocation } from "react-router-dom";
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
      path: "/dashboard/profile",
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
      path: "/dashboard/MyListing",
      image: Listings,
      text: "My Listings",
    },
    {
      id: 5,
      path: "/dashboard/rent",
      image: Rent,
      text: "Rent Agreements",
    },
    {
      id: 6,
      path: "/dashboard",
      image: Logout,
      text: "Logout",
    },
  ];

  const [sideMenu, setSideMenu] = useState(true);

  const location = useLocation();

  console.log(location.pathname.split('/'), sidebarMenu[0].path.split('/'));

  return (
    <div className="cursor-pointer bg-white flex flex-col gap-6 p-3 h-max rounded-lg sticky top-0 mt-[3rem]">
      {sideMenu ? (
        <RxCross2 onClick={() => setSideMenu(!sideMenu)} className="text-[30px]" />
      ) : (
        <IoMenu onClick={() => setSideMenu(!sideMenu)} className="text-[30px]" />
      )}
      {sideMenu &&
        sidebarMenu.map((item, index) => (
          <Link to={item.path} key={index}>
            <div
              className={`w-[200px] m-1 flex gap-5 p-2 box hover:shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-red-500 rounded-lg duration-300 ${
                location.pathname.split("/")[2] === item.path.split("/")[2]
                  ? "border-2 shadow-inner"
                  : ""
              }`}
            >
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
