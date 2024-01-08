import React, { useState, useEffect } from "react";
import "./Home.css";
import { GoArrowRight } from "react-icons/go";
import HomeBackground from "../../Images/HomeBackground.png";
import NewProperties from "./NewProperties/NewProperties";
import Properties from "./Our Properties/Properties";
import HomeLoans from "./HomeLoans/HomeLoans";
import Faq from "./FAQ/Faq";
import Subscribe from "./Subscribe-section/Subscribe";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Homeimage from "../../Images/HomeLeft Img.png";
import vector1 from "../../Images/vectorIcon1.png";
import vector2 from "../../Images/vectoeIcon2.png";
import vector3 from "../../Images/vectoeIcon3.png";
import { Link } from "react-router-dom";
import PropertiesDropdown from "./Dropdown/PropertiesDropdown";
import { Slide } from "react-awesome-reveal";
import { Fade } from "react-awesome-reveal";
import { Zoom } from "react-awesome-reveal";

interface SearchMenuType {
  Property: string;
  "Property Type": string;
  Budget: string;
}

const Home: React.FC = () => {
  const [searchMenu, setSearchMenu] = useState<SearchMenuType>({
    Property: "",
    "Property Type": "",
    Budget: "",
  });

  const values = {
    property: ["Banglore", "Hydrabad", "Pune", "Chennai", "Noida", "Delhi"],
    propertyType: ["Flat", "Appartment", "Villas", "Penthouse", "PG"],
    budgetForRent: ["1-2", "2-3", "4-5"],
    budgetForSale: ["1-2", "2-3", "4-5"],
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1,
    },
  };

  const handleSelectChange = (name: string, value: string) => {
    setSearchMenu((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="home-container overflow-hidden">
        <div className="Home-image-section">
          <img src={HomeBackground} alt="" />

          <div className="Home-text-content">
            <Fade direction="down">
              <h1>
                Discover Your{" "}
                <span style={{ color: "yellow" }}>Dream Home</span> Today!
              </h1>
              <p>
                Explore, Envision, and Make it Yours! Start Your Journey Now.
              </p>
            </Fade>
          </div>

          {/* Home-dropdown-section */}

          <div className="Home-main">
            <div className="Home-dropdown-section gap-1 ">
              <Slide direction="down">
                <div className="Home-dropdown-section-pt-1 gap-3 bg-white text-black py-3 w-1/6 flex justify-center rounded-t-lg font-semibold cursor-pointer">
                  <span>Buy</span>
                  <span style={{ color: "#C92028" }}>Rent</span>
                </div>
              </Slide>
              <Slide direction="down">
                <div className="Home-dropdown-section-pt-2 flex justify-between rounded-md font-bold">
                  <div>
                    <PropertiesDropdown
                      handleSelectChange={handleSelectChange}
                      dropdowntype="Property"
                      values={values.property}
                      searchMenu={searchMenu}
                    />
                  </div>
                  <div>
                    <PropertiesDropdown
                      handleSelectChange={handleSelectChange}
                      dropdowntype="Property Type"
                      values={values.propertyType}
                      searchMenu={searchMenu}
                    />
                  </div>
                  <div>
                    <PropertiesDropdown
                      handleSelectChange={handleSelectChange}
                      dropdowntype="Budget"
                      values={values.budgetForSale}
                      searchMenu={searchMenu}
                    />
                  </div>
                  <div>
                    <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                      <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Get Started
                      </span>
                    </button>
                  </div>
                </div>
              </Slide>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-7 ">
        <div className="font-bold text-2xl w-100 flex justify-between px-16 mb-4 ">
          <Slide direction="down">
            <h1>Explore Our Properties</h1>
          </Slide>
          <div className="flex gap-2 cursor-pointer items-center">
            <Link to="/Properties">
              <span className="font-light text-base ">
                View all categories{" "}
              </span>
            </Link>
            <GoArrowRight />
          </div>
        </div>
        <Fade direction="right">

        <div className="px-[5rem]">
          <Carousel
            swipeable={false}
            draggable={false}
            // showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            customTransition="transform 2000ms ease-in-out"
            transitionDuration={500}
          >
            <Properties />
            <Properties />
            <Properties />
            <Properties />
          </Carousel>
        </div>
        </Fade>

        <div className="flex flex-col px-3 ">
          <Fade direction="left">
            <NewProperties />
          </Fade>
        </div>
      </div>
      <div className="w-100 mt-20 flex flex-col gap-32">
        <div className="flex justify-center items-center flex-col">
          <Fade direction="down">
            <h1 className="font-bold text-3xl">
              Everything you Need at One Place
            </h1>
          </Fade>
          <p>In-House Services</p>
        </div>
        <Slide direction="down">
          <div className="flex flex-wrap gap-3 justify-center pb-5 p-4">
            <HomeLoans />
            <HomeLoans />
            <HomeLoans />
            <HomeLoans />
            <HomeLoans />
            <HomeLoans />
            <HomeLoans />
            <HomeLoans />
            <HomeLoans />
            <HomeLoans />
            <HomeLoans />
            <HomeLoans />
          </div>
        </Slide>
      </div>
      <div className="w-100 mt-20 flex flex-col gap-24">
        <div className="flex justify-center items-center flex-col">
          <h1 className="font-bold text-3xl">Discover Your Ideal property.</h1>
          <p>
            Own not just a home, but a dream meticulously crafted for your
            aspirations.
          </p>
        </div>
        <div className="flex justify-center gap-8 pb-8">
          <Properties />
          <Properties />
          <Properties />
        </div>
      </div>

      <div className="dream-home sm">
        <div className="dream-home-image">
          <img src={Homeimage} alt="" />
        </div>
        <div className="dream-home-content">
          <div className="dream-home-heading">
            <Fade direction="down">
              <h1>Why choose us for the purchase of your dream home?</h1>
            </Fade>
          </div>
          <Fade direction="down">
            <div className="dream-home-lower">
              <div className="dream-home-lower-icon">
                <img src={vector1} alt="" />
              </div>
              <div className="dream-home-lower-content">
                <h1>Exceptional Craftsmanship:</h1>
                <p>
                  Our homes are more than structures – they're crafted with
                  unparalleled attention to detail.
                </p>
              </div>
            </div>
          </Fade>
          <Fade direction="down">
            <div className="dream-home-lower">
              <div className="dream-home-lower-icon">
                <img src={vector2} alt="" />
              </div>
              <div className="dream-home-lower-content">
                <h1>Smart Investment:</h1>
                <p>
                  Our properties not only offer a dream living space but also
                  promise a sound investment for your future.
                </p>
              </div>
            </div>
          </Fade>
          <Fade direction="down">
            <div className="dream-home-lower">
              <div className="dream-home-lower-icon">
                <img src={vector3} alt="" />
              </div>
              <div className="dream-home-lower-content">
                <h1>Effortless Ownership:</h1>
                <p>
                  Enjoy a hassle-free homebuying journey with our dedicated team
                  guiding you every step of the way.
                </p>
              </div>
            </div>
          </Fade>

          <div className="flex justify-start">
          <Fade direction="down">
            <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-red-500 duration-300 ...">
              Learn More
            </button>
            </Fade>
          </div>
        </div>
      </div>

      <div className="pt-16">
        <Fade direction="down">
          <Faq />
        </Fade>
      </div>
      <div className="mt-8">
      <Slide direction="down">
        <Subscribe />
        </Slide>
      </div>
    </div>
  );
};

export default Home;
