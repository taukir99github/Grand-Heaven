import React, { useState } from "react";

interface PropertyTypeProps {
  setIsPropertyTypeDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const PropertyType: React.FC<PropertyTypeProps> = ({
  setIsPropertyTypeDropdownOpen,
}) => {
  const [selectedMenu, setSelectedMenu] = useState<string>("");
  const [propertytype, setPropertytype] = useState("");

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target);
    event.preventDefault();
    setSelectedMenu(event.target.value);
  };

  const menuarr = [
    { res: "Plot", com: "Office" },
    { res: "Apartment", com: "Land" },
    { res: "Villa", com: "Showroom" },
    { res: "Independent House", com: "Shop" },
    { res: "Pent House", com: "" },
  ];

  const propertySelection = (item: string) => {
    setIsPropertyTypeDropdownOpen(false);
    setPropertytype(item);
  };



  return (
    <div className="w-40 h-64 text-black flex flex-col">
      <form action="">
        <div className="flex gap-2 font-semibold justify-center">
          <input
            type="radio"
            id="residential"
            name="propertyType"
            value="Residential"
            onChange={changeHandler}
          />
          <label htmlFor="residential">Residential</label>
        </div>
        <br />
        <div className="flex gap-2 font-semibold justify-center">
          <input
            type="radio"
            id="commercial"
            name="propertyType"
            value="Commercial"
            onChange={changeHandler}
          />
          <label htmlFor="commercial">Commercial</label>
        </div>
      </form>

      <h2 className="font-medium">Unit</h2>
      <div className="flex flex-col mt-2 gap-2 cursor-pointer font-normal">
        {menuarr.map((item, index) => (
          <p
            key={index}
            onClick={() =>
              propertySelection(
                selectedMenu === "Residential" ? item.res : item.com
              )
            }
          >
            {selectedMenu === "Residential" ? item.res : item.com}
          </p>
        ))}
      </div>
    </div>
  );
};

export default PropertyType;
