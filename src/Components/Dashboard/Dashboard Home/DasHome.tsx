import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";

function DashHome() {
  return (
    <div className="bg-gray-100 flex gap-10 justify-center pt-8 pr-3">
      <SideBar />
      <div className="w-[100%] bg-white">
        <Outlet />
      </div>
    </div>
  );
}

export default DashHome;
