import React, { useState } from "react";
import { useSpring, animated, SpringConfig } from "react-spring";

interface SearchMenuType {
  Property: string;
  "Property Type": string;
  Budget: string;
}

interface PropertiesDropdownProps {
  handleSelectChange: (name: string, value: string) => void;
  values: string[];
  dropdowntype: keyof SearchMenuType;
  searchMenu: SearchMenuType;
}

const PropertiesDropdown: React.FC<PropertiesDropdownProps> = ({
  handleSelectChange,
  values,
  dropdowntype,
  searchMenu,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const showSelectedValues: keyof SearchMenuType = dropdowntype;

  const springConfig: SpringConfig = {
    duration: 300,
  };

  const props = useSpring({
    opacity: isDropdownOpen ? 1 : 0,
    transform: `scale(${isDropdownOpen ? 1 : 0.95})`,
    config: springConfig,
  });

  return (
    <div className="relative inline-block">
      <button
        id="dropdownHoverButton"
        data-dropdown-toggle="dropdownHover"
        data-dropdown-trigger="hover"
        className="focus:outline-none font-medium rounded-lg text-[18px] px-5 py-2.5 text-center inline-flex items-center "
        type="button"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        {dropdowntype}

        <span className="text-[12px]">{searchMenu[showSelectedValues]}</span>
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {/* Dropdown menu */}
      {isDropdownOpen && (
        <animated.div
          id="dropdownHover"
          className={`z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 mt-5 h-auto`}
          style={props}
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownHoverButton"
            onClick={() => setIsDropdownOpen(false)}
          >
            {values.map((item) => (
              <li
                key={item}
                onClick={() => handleSelectChange(dropdowntype, item)}
              >
                <a className="block px-4 py-2 cursor-pointer hover:border-2 hover:shadow-inner rounded-lg hover:bg-slate-200 transition ease-in-out delay-250 hover:-translate-y-2 duration-300">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </animated.div>
      )}
    </div>
  );
};

export default PropertiesDropdown;
