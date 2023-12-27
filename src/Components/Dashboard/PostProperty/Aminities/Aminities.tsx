import React, { useState } from "react";

interface AminitiesDetails {
  "Define Location": string;
  "Explaining Price": string;
  "Explaining Property": string;
  "Defining Size & Structure": string;
  "Suitable For": string;
}

function Aminities() {

  const details = {
    "Define Location": [
      "Schools In Vicinty",
      "Adjoining Metro Station",
      "Peaceful Vicinity",
      "Wide Road",
      "Near City Center",
      "Safe & Secure Locality",
    ],
    "Explaining Price": [
      "Desperate Sale",
      "Breakthrough Price",
      "Quick Deal",
      "Investment Opportunity",
      "High Rental Field",
      "Affordable",
    ],
    "Explaining Property": [
      "Reputed builder",
      "Well Ventilated",
      "Fully Renovated",
      "Vastu Complaint",
      "Spacious",
      "Ample Parking",
      "Free Hold",
      "Gated Society",
    ],
    "Defining Size & Structure": [
      "Tasteful Interiors",
      "Prime Location",
      "Luxury Lifestyle",
      "Well Manintained",
      "Plenty od Sunlight",
      "New Built",
    ],
    "Suitable For": ["Family", "Bachelors", "Family Only"],
  };

  const [aminitiesDetails, setAminitiesDetails] = useState<AminitiesDetails>({
    "Define Location": "",
    "Explaining Price": "",
    "Explaining Property": "",
    "Defining Size & Structure": "",
    "Suitable For": "",
  });

  const [aminities, setAminities] = useState<string[]>([]);


  const itemSelection = (item: string, forAminities: string) => {
    setAminitiesDetails((prev) => ({ ...prev, [forAminities]: item }));
  };

  const aminitieSelection = () => {

  };
  return (
    <div className="p-5">
      <div className="mt-2">
        <h1 className="text-[18px] font-bold">Aminities</h1>
        <div className="grid place-items-center grid-cols-4  gap-8 mt-8">
          <div className="flex gap-4">
            <input type="checkbox" className="w-[30px]" />{" "}
            <span>Aminities</span>
          </div>
          <div className="flex gap-4">
            <input type="checkbox" className="w-[22px]" />{" "}
            <span>Aminities</span>
          </div>
          <div className="flex gap-4">
            <input type="checkbox" className="w-[22px]" />{" "}
            <span>Aminities</span>
          </div>
          <div className="flex gap-4">
            <input type="checkbox" className="w-[22px]" />{" "}
            <span>Aminities</span>
          </div>
          <div className="flex gap-4">
            <input type="checkbox" className="w-[22px]" />{" "}
            <span>Aminities</span>
          </div>
          <div className="flex gap-4">
            <input type="checkbox" className="w-[22px]" />{" "}
            <span>Aminities</span>
          </div>
          <div className="flex gap-4">
            <input type="checkbox" className="w-[22px]" />{" "}
            <span>Aminities</span>
          </div>
          <div className="flex gap-4">
            <input type="checkbox" className="w-[22px]" />{" "}
            <span>Aminities</span>
          </div>
          <div className="flex gap-4">
            <input type="checkbox" className="w-[22px]" />{" "}
            <span>Aminities</span>
          </div>
          <div className="flex gap-4">
            <input type="checkbox" className="w-[22px]" />{" "}
            <span>Aminities</span>
          </div>
          <div className="flex gap-4">
            <input type="checkbox" className="w-[22px]" />{" "}
            <span>Aminities</span>
          </div>
          <div className="flex gap-4">
            <input type="checkbox" className="w-[22px]" />{" "}
            <span>Aminities</span>
          </div>
          <div className="flex gap-4">
            <input type="checkbox" className="w-[22px]" />{" "}
            <span>Aminities</span>
          </div>
          <div className="flex gap-4">
            <input type="checkbox" className="w-[22px]" />{" "}
            <span>Aminities</span>
          </div>
          <div className="flex gap-4">
            <input type="checkbox" className="w-[22px]" />{" "}
            <span>Aminities</span>
          </div>
          <div className="flex gap-4">
            <input type="checkbox" className="w-[22px]" />{" "}
            <span>Aminities</span>
          </div>
        </div>

        <div className="mt-8 ">
          <h1 className="text-[18px] font-bold">Define Your Property</h1>
          <span className="text-sm">
            Please Chose The Keywords That Defines Property Clearly
          </span>
          <hr className="m-3" />
          <div className="flex flex-col gap-6">
            {/* Defining Location */}
            <div className="flex flex-col gap-5 mt-9">
              <span className="text-lg font-semibold">1.Define Location</span>
              <div className="flex gap-4 text-center ">
                {details["Define Location"].map((item) => (
                  <div
                    key={item}
                    className={`flex p-2 px-6 border-2 ${
                      item === aminitiesDetails["Define Location"]
                        ? "bg-black text-white"
                        : "hover:bg-stone-100"
                    } rounded-full gap-3 cursor-pointer `}
                    onClick={() => itemSelection(item, "Define Location")}
                  >
                    <div>{item}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Explaing Price */}
            <div className="flex flex-col gap-5 mt-9">
              <span className="text-lg font-semibold">2.Explaning Price</span>
              <div className="flex gap-4 text-center ">
                {details["Explaining Price"].map((item) => (
                  <div
                    key={item}
                    className={`flex p-2 px-6 border-2 ${
                      item === aminitiesDetails["Explaining Price"]
                        ? "bg-black text-white"
                        : "hover:bg-stone-100"
                    } rounded-full gap-3 cursor-pointer `}
                    onClick={() => itemSelection(item, "Explaining Price")}
                  >
                    <div>{item}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Explaining The Property */}
            <div className="flex flex-col gap-5 mt-9">
              <span className="text-lg font-semibold">
                2.Explaining Property
              </span>
              <div className="flex flex-wrap gap-4 text-center ">
                {details["Explaining Property"].map((item) => (
                  <div
                    key={item}
                    className={`flex p-2 px-6 border-2 ${
                      item === aminitiesDetails["Explaining Property"]
                        ? "bg-black text-white"
                        : "hover:bg-stone-100"
                    } rounded-full gap-3 cursor-pointer `}
                    onClick={() => itemSelection(item, "Explaining Property")}
                  >
                    <div>{item}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Defining Sieze and Structure */}
            <div className="flex flex-col gap-5 mt-9">
              <span className="text-lg font-semibold">
                2.Defining Size & Structure
              </span>
              <div className="flex gap-4 text-center ">
                {details["Defining Size & Structure"].map((item) => (
                  <div
                    key={item}
                    className={`flex p-2 px-6 border-2 ${
                      item === aminitiesDetails["Defining Size & Structure"]
                        ? "bg-black text-white"
                        : "hover:bg-stone-100"
                    } rounded-full gap-3 cursor-pointer `}
                    onClick={() =>
                      itemSelection(item, "Defining Size & Structure")
                    }
                  >
                    <div>{item}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Suitable for */}
            <div className="flex flex-col gap-5 mt-9">
              <span className="text-lg font-semibold">2.Suitable for</span>
              <div className="flex gap-4 text-center ">
                {details["Suitable For"].map((item) => (
                  <div
                    key={item}
                    className={`flex p-2 px-6 border-2 ${
                      item === aminitiesDetails["Suitable For"]
                        ? "bg-black text-white"
                        : "hover:bg-stone-100"
                    } rounded-full gap-3 cursor-pointer `}
                    onClick={() => itemSelection(item, "Suitable For")}
                  >
                    <div>{item}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="mt-8">
              <span className="text-lg font-semibold">
                Property Description
              </span>

              <p>
                Please write a detailed description about property so clients
                can understand property better.
              </p>

              <form>
                <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                  <div className="flex items-center justify-between px-3 py-2 border-b dark:border-gray-600">
                    <div className="flex flex-wrap items-center divide-gray-200 sm:divide-x sm:rtl:divide-x-reverse dark:divide-gray-600">
                      <div className="flex items-center space-x-1 rtl:space-x-reverse sm:pe-4">
                        <button
                          type="button"
                          className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                        >
                          <svg
                            className="w-4 h-4"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 12 20"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M1 6v8a5 5 0 1 0 10 0V4.5a3.5 3.5 0 1 0-7 0V13a2 2 0 0 0 4 0V6"
                            />
                          </svg>
                          <span className="sr-only">Attach file</span>
                        </button>
                        <button
                          type="button"
                          className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                        >
                          <svg
                            className="w-4 h-4"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 16 20"
                          >
                            <path d="M8 0a7.992 7.992 0 0 0-6.583 12.535 1 1 0 0 0 .12.183l.12.146c.112.145.227.285.326.4l5.245 6.374a1 1 0 0 0 1.545-.003l5.092-6.205c.206-.222.4-.455.578-.7l.127-.155a.934.934 0 0 0 .122-.192A8.001 8.001 0 0 0 8 0Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
                          </svg>
                          <span className="sr-only">Embed map</span>
                        </button>
                        <button
                          type="button"
                          className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                        >
                          <svg
                            className="w-4 h-4"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 16 20"
                          >
                            <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                            <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                          </svg>
                          <span className="sr-only">Upload image</span>
                        </button>
                        <button
                          type="button"
                          className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                        >
                          <svg
                            className="w-4 h-4"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 16 20"
                          >
                            <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
                            <path d="M14.067 0H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.933-2ZM6.709 13.809a1 1 0 1 1-1.418 1.409l-2-2.013a1 1 0 0 1 0-1.412l2-2a1 1 0 0 1 1.414 1.414L5.412 12.5l1.297 1.309Zm6-.6-2 2.013a1 1 0 1 1-1.418-1.409l1.3-1.307-1.295-1.295a1 1 0 0 1 1.414-1.414l2 2a1 1 0 0 1-.001 1.408v.004Z" />
                          </svg>
                          <span className="sr-only">Format code</span>
                        </button>
                        <button
                          type="button"
                          className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                        >
                          <svg
                            className="w-4 h-4"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM13.5 6a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm-7 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm3.5 9.5A5.5 5.5 0 0 1 4.6 11h10.81A5.5 5.5 0 0 1 10 15.5Z" />
                          </svg>
                          <span className="sr-only">Add emoji</span>
                        </button>
                      </div>
                      <div className="flex flex-wrap items-center space-x-1 rtl:space-x-reverse sm:ps-4">
                        <button
                          type="button"
                          className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                        >
                          <svg
                            className="w-4 h-4"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 21 18"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M9.5 3h9.563M9.5 9h9.563M9.5 15h9.563M1.5 13a2 2 0 1 1 3.321 1.5L1.5 17h5m-5-15 2-1v6m-2 0h4"
                            />
                          </svg>
                          <span className="sr-only">Add list</span>
                        </button>
                        <button
                          type="button"
                          className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                        >
                          <svg
                            className="w-4 h-4"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M18 7.5h-.423l-.452-1.09.3-.3a1.5 1.5 0 0 0 0-2.121L16.01 2.575a1.5 1.5 0 0 0-2.121 0l-.3.3-1.089-.452V2A1.5 1.5 0 0 0 11 .5H9A1.5 1.5 0 0 0 7.5 2v.423l-1.09.452-.3-.3a1.5 1.5 0 0 0-2.121 0L2.576 3.99a1.5 1.5 0 0 0 0 2.121l.3.3L2.423 7.5H2A1.5 1.5 0 0 0 .5 9v2A1.5 1.5 0 0 0 2 12.5h.423l.452 1.09-.3.3a1.5 1.5 0 0 0 0 2.121l1.415 1.413a1.5 1.5 0 0 0 2.121 0l.3-.3 1.09.452V18A1.5 1.5 0 0 0 9 19.5h2a1.5 1.5 0 0 0 1.5-1.5v-.423l1.09-.452.3.3a1.5 1.5 0 0 0 2.121 0l1.415-1.414a1.5 1.5 0 0 0 0-2.121l-.3-.3.452-1.09H18a1.5 1.5 0 0 0 1.5-1.5V9A1.5 1.5 0 0 0 18 7.5Zm-8 6a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Z" />
                          </svg>
                          <span className="sr-only">Settings</span>
                        </button>
                        <button
                          type="button"
                          className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                        >
                          <svg
                            className="w-4 h-4"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M18 2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2ZM2 18V7h6.7l.4-.409A4.309 4.309 0 0 1 15.753 7H18v11H2Z" />
                            <path d="M8.139 10.411 5.289 13.3A1 1 0 0 0 5 14v2a1 1 0 0 0 1 1h2a1 1 0 0 0 .7-.288l2.886-2.851-3.447-3.45ZM14 8a2.463 2.463 0 0 0-3.484 0l-.971.983 3.468 3.468.987-.971A2.463 2.463 0 0 0 14 8Z" />
                          </svg>
                          <span className="sr-only">Timeline</span>
                        </button>
                        <button
                          type="button"
                          className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                        >
                          <svg
                            className="w-4 h-4"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
                            <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
                          </svg>
                          <span className="sr-only">Download</span>
                        </button>
                      </div>
                    </div>
                    <button
                      type="button"
                      data-tooltip-target="tooltip-fullscreen"
                      className="p-2 text-gray-500 rounded cursor-pointer sm:ms-auto hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                    >
                      <svg
                        className="w-4 h-4"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 19 19"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M13 1h5m0 0v5m0-5-5 5M1.979 6V1H7m0 16.042H1.979V12M18 12v5.042h-5M13 12l5 5M2 1l5 5m0 6-5 5"
                        />
                      </svg>
                      <span className="sr-only">Full screen</span>
                    </button>
                    <div
                      id="tooltip-fullscreen"
                      role="tooltip"
                      className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                    >
                      Show full screen
                      <div className="tooltip-arrow" data-popper-arrow></div>
                    </div>
                  </div>
                  <div className="px-4 py-2 bg-white rounded-b-lg dark:bg-gray-800">
                    <label htmlFor="editor" className="sr-only">
                      Publish post
                    </label>
                    <textarea
                      id="editor"
                      rows={8}
                      className="block w-full px-0 text-sm text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                      placeholder="Write an article..."
                      required
                    ></textarea>
                  </div>
                </div>
              </form>
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
      </div>
    </div>
  );
}

export default Aminities;
