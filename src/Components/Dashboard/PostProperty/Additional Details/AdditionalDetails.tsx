import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";

function AdditionalDetails() {
  interface AdditionalDetailsType {
    AdditionalRoom: string;
    PossesionStatus: string;
    FurnishingStatus: string;
    AgeOfProperty: string;
    NumberofBathroom: string;
    CoveredParking: string;
    UncoveredParking: string;
    Balcony: string;
    PowerBackUp: string;
    Facing: string;
    Flooring: string;
    FloorNumber: string;
    TowerBlock: string;
    TowerFloorCount: string;
    UnitNumber: string;
  }
  const [AdditionalDetails, setAdditionalDetails] =
    useState<AdditionalDetailsType>({
      AdditionalRoom: "",
      PossesionStatus: "",
      FurnishingStatus: "",
      AgeOfProperty: "",
      NumberofBathroom: "",
      CoveredParking: "",
      UncoveredParking: "",
      Balcony: "",
      PowerBackUp: "",
      Facing: "",
      Flooring: "",
      FloorNumber: "",
      TowerBlock: "",
      TowerFloorCount: "",
      UnitNumber: "",
    });

  return (
    <div className=" bg-white flex flex-col gap-5 p-8">
      <div>
        <h1 className="font-semibold text-[18px]">
          Provide Details About Your Property
        </h1>
      </div>
      <div className="font-medium text-lg">Property Picture </div>
      <div className="flex items-center justify-center w-full">
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              SVG, PNG, JPG, or GIF (MAX. 800x400px)
            </p>
            <div className="py-2 text-sm">Add Minimum 5 pictures</div>
          </div>
          <input
            id="dropzone-file"
            type="file"
            className="hidden"
            // onChange={handleFileChange}
          />
        </label>
      </div>
      <div className="font-medium text-lg">Property Video </div>

      <div className="flex items-center justify-center w-full">
  <label
    htmlFor="dropzone-file"
    className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
  >
    <div className="flex flex-col items-center justify-center pt-5 pb-6">
      <svg
        className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 20 16"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
        />
      </svg>
      <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
        <span className="font-semibold">Click to upload</span> or drag and drop
      </p>
      <p className="text-xs text-gray-500 dark:text-gray-400">
        Video files (e.g., MP4, MOV)
      </p>
      <div className="text-sm p-2">Add at least 1 video</div>
    </div>
    <input
      id="dropzone-file"
      type="file"
      className="hidden"
      accept="video/*"
      multiple
      // onChange={handleFileChange}
    />
  </label>
</div>


      {/* Additional Info */}
      <div className="flex flex-col ">
        <div>
          <div className="pl-8 flex flex-col gap-7 p-6">
            <div className="flex flex-col gap-5">
              <span className="font-semibold text-[16px]">Additional Room</span>
              <div className="flex gap-4 text-center ">
                {["Pooja Room", "Servent Room", "Study Room", "Extra Room"].map(
                  (item) => (
                    <div
                      key={item}
                      onClick={() =>
                        setAdditionalDetails((prev) => {
                          console.log(prev);
                          return { ...prev, AdditionalRoom: item };
                        })
                      }
                      className={`flex p-2 px-6 border-2 ${
                        item === AdditionalDetails.AdditionalRoom
                          ? "bg-black text-white"
                          : ""
                      } rounded-md gap-3 cursor-pointer`}
                    >
                      <div>{item}</div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Possesion Status */}
        <div>
          <div className="pl-8 flex flex-col gap-7 p-6">
            <div className="flex flex-col gap-5">
              <span className="font-semibold text-[16px]">
                Possesion Status
              </span>
              <div className="flex gap-4 text-center ">
                {["Ready To Move", "Under Construction"].map((item) => (
                  <div
                    key={item}
                    onClick={() =>
                      setAdditionalDetails((prev) => {
                        console.log(prev);
                        return { ...prev, PossesionStatus: item };
                      })
                    }
                    className={`flex p-2 px-6 border-2 ${
                      item === AdditionalDetails.PossesionStatus
                        ? "bg-black text-white"
                        : ""
                    } rounded-md gap-3 cursor-pointer`}
                  >
                    <div>{item}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Furnishing Status */}
        <div>
          <div className="pl-8 flex flex-col gap-7 p-6">
            <div className="flex flex-col gap-5">
              <span className="font-semibold text-[16px]">
                Furnishing Status
              </span>
              <div className="flex gap-4 text-center ">
                {["Furnished", "Semi-Furnished", "UnFurnished"].map((item) => (
                  <div
                    key={item}
                    onClick={() =>
                      setAdditionalDetails((prev) => {
                        console.log(prev);
                        return { ...prev, FurnishingStatus: item };
                      })
                    }
                    className={`flex p-2 px-6 border-2 ${
                      item === AdditionalDetails.FurnishingStatus
                        ? "bg-black text-white"
                        : ""
                    } rounded-md gap-3 cursor-pointer`}
                  >
                    <div>{item}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Age Of Property */}
        <div>
          <div className="pl-8 flex flex-col gap-7 p-6">
            <div className="flex flex-col gap-5">
              <span className="font-semibold text-[16px]">
                Age Of Property (Years)
              </span>
              <div className="flex gap-4 text-center ">
                {["0-1", "2-4", "5-8", "10+"].map((item) => (
                  <div
                    key={item}
                    onClick={() =>
                      setAdditionalDetails((prev) => {
                        console.log(prev);
                        return { ...prev, AgeOfProperty: item };
                      })
                    }
                    className={`flex p-2 px-6 border-2 ${
                      item === AdditionalDetails.AgeOfProperty
                        ? "bg-black text-white"
                        : ""
                    } rounded-md gap-3 cursor-pointer`}
                  >
                    <div>{item}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Number of Bathroom */}
        <div>
          <div className="pl-8 flex flex-col gap-7 p-6">
            <div className="flex flex-col gap-5">
              <span className="font-semibold text-[16px]">
                Number of Bathroom
              </span>
              <div className="flex gap-4 text-center ">
                {["1", "2", "3", "4+"].map((item) => (
                  <div
                    key={item}
                    onClick={() =>
                      setAdditionalDetails((prev) => {
                        console.log(prev);
                        return { ...prev, NumberofBathroom: item };
                      })
                    }
                    className={`flex p-2 px-6 border-2 ${
                      item === AdditionalDetails.NumberofBathroom
                        ? "bg-black text-white"
                        : ""
                    } rounded-md gap-3 cursor-pointer`}
                  >
                    <div>{item}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Covered Parking */}
        <div>
          <div className="pl-8 flex flex-col gap-7 p-6">
            <div className="flex flex-col gap-5">
              <span className="font-semibold text-[16px]">Covered Parking</span>
              <div className="flex gap-4 text-center ">
                {["1", "2", "3", "4+"].map((item) => (
                  <div
                    key={item}
                    onClick={() =>
                      setAdditionalDetails((prev) => {
                        console.log(prev);
                        return { ...prev, CoveredParking: item };
                      })
                    }
                    className={`flex p-2 px-6 border-2 ${
                      item === AdditionalDetails.CoveredParking
                        ? "bg-black text-white"
                        : ""
                    } rounded-md gap-3 cursor-pointer`}
                  >
                    <div>{item}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Uncovered Parking */}
        <div>
          <div className="pl-8 flex flex-col gap-7 p-6">
            <div className="flex flex-col gap-5">
              <span className="font-semibold text-[16px]">
                Open/UnCovered Parking
              </span>
              <div className="flex gap-4 text-center ">
                {["NA", "2", "3", "4", "5"].map((item) => (
                  <div
                    key={item}
                    onClick={() =>
                      setAdditionalDetails((prev) => {
                        console.log(prev);
                        return { ...prev, UncoveredParking: item };
                      })
                    }
                    className={`flex p-2 px-6 border-2 ${
                      item === AdditionalDetails.UncoveredParking
                        ? "bg-black text-white"
                        : ""
                    } rounded-md gap-3 cursor-pointer`}
                  >
                    <div>{item}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Balcony */}
        <div>
          <div className="pl-8 flex flex-col gap-7 p-6">
            <div className="flex flex-col gap-5">
              <span className="font-semibold text-[16px]">Balcony</span>
              <div className="flex gap-4 text-center ">
                {["Connected", "Individual", "Room-Attached"].map((item) => (
                  <div
                    key={item}
                    onClick={() =>
                      setAdditionalDetails((prev) => {
                        console.log(prev);
                        return { ...prev, Balcony: item };
                      })
                    }
                    className={`flex p-2 px-6 border-2 ${
                      item === AdditionalDetails.Balcony
                        ? "bg-black text-white"
                        : ""
                    } rounded-md gap-3 cursor-pointer`}
                  >
                    <div>{item}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Power Back Up */}
        <div>
          <div className="pl-8 flex flex-col gap-7 p-6">
            <div className="flex flex-col gap-5">
              <span className="font-semibold text-[16px]">Power BackUp</span>
              <div className="flex gap-4 text-center ">
                {["No Backup", "Available"].map((item) => (
                  <div
                    key={item}
                    onClick={() =>
                      setAdditionalDetails((prev) => {
                        console.log(prev);
                        return { ...prev, PowerBackUp: item };
                      })
                    }
                    className={`flex p-2 px-6 border-2 ${
                      item === AdditionalDetails.PowerBackUp
                        ? "bg-black text-white"
                        : ""
                    } rounded-md gap-3 cursor-pointer`}
                  >
                    <div>{item}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Facing */}
        <div>
          <div className="pl-8 flex flex-col gap-7 p-6">
            <div className="flex flex-col gap-5">
              <span className="font-semibold text-[16px]">Facing</span>
              <div className="flex gap-4 text-center">
                <select
                  value={AdditionalDetails.Facing}
                  onChange={(e) =>
                    setAdditionalDetails((prev) => {
                      console.log(prev);
                      return { ...prev, Facing: e.target.value };
                    })
                  }
                  className="p-2 px-8 border-2 rounded-md cursor-pointer"
                >
                  {["View", "View", "View"].map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Flooring */}
        <div>
          <div className="pl-8 flex flex-col gap-7 p-6">
            <div className="flex flex-col gap-5">
              <span className="font-semibold text-[16px]">Flooring</span>
              <div className="flex gap-4 text-center">
                <select
                  value={AdditionalDetails.Flooring}
                  onChange={(e) =>
                    setAdditionalDetails((prev) => {
                      console.log(prev);
                      return { ...prev, Flooring: e.target.value };
                    })
                  }
                  className="p-2 px-8 border-2 rounded-md cursor-pointer"
                >
                  {["1", "2", "3", "4", "5", "6", "7", "8"].map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Floor Number */}
        <div>
          <div className="pl-8 flex flex-col gap-7 p-6">
            <div className="flex flex-col gap-5">
              <span className="font-semibold text-[16px]">Floor Number</span>
              <div className="flex gap-4 text-center">
                <select
                  value={AdditionalDetails.FloorNumber}
                  onChange={(e) =>
                    setAdditionalDetails((prev) => {
                      console.log(prev);
                      return { ...prev, FloorNumber: e.target.value };
                    })
                  }
                  className="p-2 px-8 border-2 rounded-md cursor-pointer"
                >
                  {["1", "2", "3", "4", "5", "6", "7", "8"].map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Tower/Block  */}
        <div>
          <div className="pl-8 flex flex-col gap-7 p-6">
            <div className="flex flex-col gap-5">
              <span className="font-semibold text-[16px]">Tower Block</span>
              <div className="flex gap-4 text-center">
                <select
                  value={AdditionalDetails.TowerBlock}
                  onChange={(e) =>
                    setAdditionalDetails((prev) => {
                      console.log(prev);
                      return { ...prev, TowerBlock: e.target.value };
                    })
                  }
                  className="p-2 px-8 border-2 rounded-md cursor-pointer"
                >
                  {["1", "2", "3", "4", "5", "6", "7", "8"].map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Tower Floor Count  */}
        <div>
          <div className="pl-8 flex flex-col gap-7 p-6">
            <div className="flex flex-col gap-5">
              <span className="font-semibold text-[16px]">
                Tower Floor Count
              </span>
              <div className="flex gap-4 text-center">
                <select
                  value={AdditionalDetails.TowerFloorCount}
                  onChange={(e) =>
                    setAdditionalDetails((prev) => {
                      console.log(prev);
                      return { ...prev, TowerFloorCount: e.target.value };
                    })
                  }
                  className="p-2 px-8 border-2 rounded-md cursor-pointer"
                >
                  {["1", "2", "3", "4", "5", "6", "7", "8"].map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Unit Number  */}

        <div>
          <div className="pl-8 flex flex-col gap-7 p-6">
            <div className="flex flex-col gap-5">
              <span className="font-semibold text-[16px]">Unit Number</span>
              <div className="flex gap-4 text-center">
                <select
                  value={AdditionalDetails.UnitNumber}
                  onChange={(e) =>
                    setAdditionalDetails((prev) => {
                      console.log(prev);
                      return { ...prev, UnitNumber: e.target.value };
                    })
                  }
                  className="p-2 px-8 border-2 rounded-md cursor-pointer"
                >
                  {["1", "2", "3", "4", "5", "6", "7", "8"].map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-start gap-2 m-3">
          <button className="bg-slate-400 rounded-[7px] px-7 text-black p-2">
            Back
          </button>
          <button className=" p-2 px-6 rounded-lg bg-[#C92028] text-white transition ease-in-out delay-150 #C92028 hover:-translate-y-1 hover:scale-110 indigo-500 duration-300 ...">
            Save & Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdditionalDetails;
