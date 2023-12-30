import React, { useState, useEffect } from "react";
import "./Home.css";
import { GoArrowRight } from "react-icons/go";
import HomeBackground from "../../Images/HomeBackground.png";
import Property from "../DropdownComponents/Property";
import NewProperties from "./NewProperties/NewProperties";
import PropertyType from "../DropdownComponents/PropertyType";
import Budget from "../DropdownComponents/Budget";
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

const Home: React.FC = () => {
  interface SearchMenu {
    property: string;
    propertyType: string;
    budget: any;
  }

  const [selectedItem, setSelectedItem] = useState<SearchMenu>({
    property: "",
    propertyType: "",
    budget: "",
  });

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

  const [isPropertyDropdownOpen, setIsPropertyDropdownOpen] = useState(false);
  const [isPropertypeDropdownOpen, setIsPropertyTypeDropdownOpen] =
    useState(false);
  const [IsBudgetDropdownOpen, setIsBudgetDropdownOpen] = useState(false);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedItem((prev) => {
      return { ...prev, [event.target.name]: event.target.value };
    });
  };

  const handleCityClick = () => {
    setIsPropertyDropdownOpen((prev) => !prev);
  };
  const handlePropertyTypeClick = () => {
    console.log("Clicked");
    setIsPropertyTypeDropdownOpen((prev) => !prev);
  };
  const handlebudgetClick = () => {
    setIsBudgetDropdownOpen((prev) => !prev);
  };

  useEffect(() => {
    console.log(isPropertypeDropdownOpen);
  }, [isPropertypeDropdownOpen]);

  return (
    <div className="flex flex-col gap-5">
      <div className="home-container overflow-hidden">
        <div className="Home-image-section">
          <img src={HomeBackground} alt="" />
          <div className="Home-text-content">
            <h1>
              Discover Your <span style={{ color: "yellow" }}>Dream Home</span>{" "}
              Today!
            </h1>
            <p>Explore, Envision, and Make it Yours! Start Your Journey Now.</p>
          </div>

          {/* Home-dropdown-section */}
          <div className="Home-main">
            <div className="Home-dropdown-section gap-1 ">
              <div className="Home-dropdown-section-pt-1 gap-3 bg-white text-black py-3 w-1/6 flex justify-center rounded-t-lg font-semibold cursor-pointer">
                <span>Buy</span>
                <span style={{ color: "#C92028" }}>Rent</span>
              </div>
              <div className="Home-dropdown-section-pt-2 flex justify-between rounded-md font-bold">
                <div onClick={handleCityClick}>
                  Property <br />
                  <span className="font-normal text-xs cursor-pointer">
                    Select Your City
                  </span>
                  {isPropertyDropdownOpen && (
                    <div className="absolute bg-white left-2">
                      <Property />
                    </div>
                  )}
                </div>
                <div onClick={handlePropertyTypeClick}>
                  Property Type <br />
                  <span className="font-normal text-xs cursor-pointer">
                    Select Your Property Type
                  </span>
                  {isPropertypeDropdownOpen && (
                    <div className="absolute bg-white ">
                      <PropertyType
                        setIsPropertyTypeDropdownOpen={
                          setIsPropertyTypeDropdownOpen
                        }
                      />
                    </div>
                  )}
                </div>
                <div onClick={handlebudgetClick}>
                  Budget <br />
                  <span className="font-normal text-xs cursor-pointer">
                    Select Your Budget
                  </span>
                  {IsBudgetDropdownOpen && (
                    <div className="absolute bg-white ">
                      <Budget />
                    </div>
                  )}
                </div>
                <div>
                  <button className="py-2 px-3 bg-red-500 text-white rounded-md font-normal transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-red-500 duration-300 ...">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-7 ">
        <div className="font-bold text-2xl w-100 flex justify-between px-16 mb-4 ">
          <h1>Explore Our Properties</h1>
          <div className="flex gap-2 cursor-pointer items-center">
          <Link to="/Properties">
            <span className="font-light text-base ">View all categories </span></Link>
            <GoArrowRight />
          </div>
        </div>
        <div className="">
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

        <div className="flex flex-col px-3 ">
          <NewProperties />
        </div>
      </div>
      <div className="w-100 mt-20 flex flex-col gap-32">
        <div className="flex justify-center items-center flex-col">
          <h1 className="font-bold text-3xl">
            Everything you Need at One Place
          </h1>
          <p>In-House Services</p>
        </div>
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
            <h1>Why choose us for the purchase of your dream home?</h1>
          </div>
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
          <div className="flex justify-start">
            <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-red-500 duration-300 ...">
              Learn More
            </button>
          </div>
        </div>
      </div>

      <div className="pt-16">
        <Faq />
      </div>
      <div className="mt-8">
        <Subscribe />
      </div>
    </div>
  );
};

export default Home;
