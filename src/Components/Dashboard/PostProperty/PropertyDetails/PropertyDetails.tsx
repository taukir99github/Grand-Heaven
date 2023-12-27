import { useState } from "react";

import Rent from "../../../../Images/Rent.png";
import Sale from "../../../../Images/Sale.png";
import Residential_icon from "../../../../Images/Home.png";
import Commercial from "../../../../Images/Commercial.png";


interface PropertyDetailsType {
  listingFor: string;
  buildingType: string;
  propertyType: string;
  city: string;
  project: string;
  locality: string;
  price: string;
}



const PropertyDetails = () => {
 

  const [propertyDetails, setPropertyDetails] = useState<PropertyDetailsType>({
    listingFor: "",
    buildingType: "",
    propertyType: "",
    city: "",
    project: "",
    locality: "",
    price: "",
  });


  return (
    <div>
      <div className="pl-8 flex flex-col gap-7 p-6">
        <div>
          <h1 className="font-semibold text-[20px]">
            Provide Details About Your Property
          </h1>
        </div>
        <div className="flex flex-col gap-5">
          <span className="font-semibold text-[16px]">
            Property Listing For
          </span>
          <div className="flex gap-4 text-center ">
            {["Sale", "Rent"].map((item) => (
              <div
                key={item}
                onClick={() =>
                  setPropertyDetails((prev) => {
                    console.log(prev);
                    return { ...prev, listingFor: item };
                  })
                }
                className={`flex p-2 px-6 border-2 ${
                  item === propertyDetails.listingFor
                    ? "bg-black text-white"
                    : ""
                } rounded-md gap-3 cursor-pointer`}
              >
                <div>
                  <img src={item === "Sale" ? Sale : Rent} alt="" />
                </div>
                <div>{item}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <span className="font-semibold text-[16px]">Building Type</span>
          <div className="flex gap-4 text-center ">
            {["Residential", "Commercial"].map((item) => (
              <div
                key={item}
                onClick={() =>
                  setPropertyDetails((prev) => {
                    console.log(prev);
                    return { ...prev, buildingType: item };
                  })
                }
                className={`flex p-2 px-6 border-2 ${
                  item === propertyDetails.buildingType
                    ? "bg-black text-white"
                    : ""
                } rounded-md gap-3 cursor-pointer`}
              >
                <div>
                  <img
                    src={
                      item === "Residential_icon"
                        ? Residential_icon
                        : Commercial
                    }
                    alt=""
                  />
                </div>
                <div>{item}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <span className="font-semibold text-[16px]">Property Type</span>
          <div className="flex gap-4 text-center ">
            {["Apartment", "villa", "plot", "Penthouse", "Builder Floor"].map(
              (item) => (
                <div
                  key={item}
                  onClick={() =>
                    setPropertyDetails((prev) => {
                      console.log(prev);
                      return { ...prev, propertyType: item };
                    })
                  }
                  className={`flex p-2 px-6 border-2 ${
                    item === propertyDetails.propertyType
                      ? "bg-black text-white"
                      : ""
                  } rounded-md gap-3 cursor-pointer`}
                >
                  <div>
                    <img src={Commercial} alt="" />
                  </div>
                  <div>{item}</div>
                </div>
              )
            )}
          </div>
        </div>

        <div>
          <label className="font-semibold text-[16px]">City</label>
          <div className="pt-4">
            <input
              type="text"
              placeholder="Enter Your city"
              className="flex p-2 px-6 border-2 rounded-lg "
              onChange={(e) =>
                setPropertyDetails((prev) => {
                  console.log(prev);
                  return { ...prev, city: e.target.value };
                })
              }
            />{" "}
          </div>
        </div>

        <div>
          <label className="font-semibold text-[16px]">Project</label>
          <div className="pt-4">
            <input
              type="text"
              placeholder="Enter Your Project name"
              className="flex p-2 px-6 border-2 rounded-md"
              onChange={(e) =>
                setPropertyDetails((prev) => {
                  console.log(prev);
                  return { ...prev, project: e.target.value };
                })
              }
            />{" "}
          </div>
        </div>

        <div>
          <label className="font-semibold text-[16px]">Locality</label>
          <div className="pt-4">
            <input
              type="text"
              placeholder="Enter Your locality"
              className="flex p-2 px-6 border-2 rounded-md"
              onChange={(e) =>
                setPropertyDetails((prev) => {
                  console.log(prev);
                  return { ...prev, locality: e.target.value };
                })
              }
            />{" "}
          </div>
        </div>

        <div>
          <label className="font-semibold text-[16px]">Price</label>
          <div className="pt-4">
            <input
              type="text"
              placeholder="Enter Price"
              className="flex p-2 px-6 border-2 rounded-md"
              onChange={(e) =>
                setPropertyDetails((prev) => {
                  console.log(prev);
                  return { ...prev, price: e.target.value };
                })
              }
            />{" "}
          </div>
        </div>

        <div className="pb-8">
          <button className="py-3 px-7 rounded-lg bg-[#C92028] text-white transition ease-in-out delay-150 #C92028 hover:-translate-y-1 hover:scale-110 indigo-500 duration-300 ...">
            Save & Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
