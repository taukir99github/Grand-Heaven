import React from "react";
import AgentsCard from "./AgentsCard";

const Agents = () => {
  return (
    <div className="flex flex-col gap-10 mt-4">
      <div className="w-full flex justify-center">
        <div className="w-[70%] h-[70px] bg-white rounded-lg flex justify-center items-center shadow-xl space-y-4">
          <div className="flex gap-8">
            <div className="relative">
              <label htmlFor="location" className="sr-only">
                Location
              </label>
              <select
                id="location"
                className="px-6 py-2 bg-white border-2 rounded-lg outline-none"
              >
                <option value="location1">Location 1</option>
                <option value="location2">Location 2</option>
                <option value="location2">Location 2</option>
                <option value="location2">Location 2</option>
              </select>
            </div>

            <div className="relative">
              <label htmlFor="experience" className="sr-only">
                By Experience
              </label>
              <select
                id="experience"
                className="px-6 py-2 bg-white border-2 rounded-lg outline-none"
              >
                <option value="experience1">Experience 1</option>
                <option value="experience2">Experience 2</option>
                <option value="experience2">Experience 2</option>
                <option value="experience2">Experience 2</option>
              </select>
            </div>

            <div className="relative">
              <label htmlFor="languages" className="sr-only">
                Languages
              </label>
              <select
                id="languages"
                className="px-6 py-2 bg-white border-2 rounded-lg outline-none"
              >
                <option value="language1">Language 1</option>
                <option value="language2">Language 2</option>
                <option value="language2">Language 2</option>
                <option value="language2">Language 2</option>
              </select>
            </div>

            <div className="relative">
              <label htmlFor="rating" className="sr-only">
                Rating
              </label>
              <select
                id="rating"
                className="px-6 py-2 bg-white border-2 rounded-lg outline-none"
              >
                <option value="rating1">Rating 1</option>
                <option value="rating2">Rating 2</option>
                <option value="rating2">Rating 2</option>
                <option value="rating2">Rating 2</option>
              </select>
            </div>

            <button className="relative inline-flex  w-full items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
              <span className="relative px-8 py-2 w-full transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Filter
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="px-12 flex gap-8 flex-wrap justify-center">
        <AgentsCard />
        <AgentsCard />
        <AgentsCard />
        <AgentsCard />
        <AgentsCard />
        <AgentsCard />
      </div>
    </div>
  );
};

export default Agents;
