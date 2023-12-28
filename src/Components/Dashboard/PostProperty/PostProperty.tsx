import Stepper from "./Stepper/Stepper";
import { Outlet } from "react-router-dom";

function PostProperty() {
  return (
    <div className="flex flex-col gap-10">
      <div className="h-[100px] bg-white shadow-lg rounded-md">
        <Stepper />
      </div>
      <div className="bg-white shadow-lg rounded-lg">
        <Outlet />
      </div>
    </div>
  );
}

export default PostProperty;
