import React from "react";
import SideBar from "./SideBar/SideBar";
import Profile from "../../Images/DashboardProfile.png"
import  Activity from "../../Images/DashboardActivity.png"
import Property from "../../Images/DashboardProperty.png"
import Listings from "../../Images/DashboardListings.png"
import Rent from "../../Images/DashboardRent.png"
import Logout from "../../Images/Logout.png"


const Dashboard = () => {
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
  return <div>
    {
        sidebarMenu.map((item) =><SideBar item={item} />)
    }
  </div>;
};

export default Dashboard;
