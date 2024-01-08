import React, { useState } from "react";
import property1 from "../../Images/propertyimg1.jpg";
import property2 from "../../Images/propertyimg2.jpg";
import property3 from "../../Images/propertyimg3.jpg";
import property4 from "../../Images/propertyimh4.jpg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { GoArrowRight } from "react-icons/go";
import Properties from "../Home/Our Properties/Properties";
import { IoMdPhotos } from "react-icons/io";
import { BiSolidVideos } from "react-icons/bi";
import GetInTouchForm from "./GetInTouchForm";

const PropertyDetailsPage = () => {

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  const Similiarresponsive = {
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

  return (
    <div>
      <div className="overflow-hidden">
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={5000}
          customTransition="transform 2000ms ease-in-out"
          transitionDuration={500}
        >
          <div className="w-full h-screen">
            <img
              src={property1}
              alt=""
              className="object-cover w-full h-full"
            />
          </div>
          <div className="w-full h-screen">
            <img
              src={property2}
              alt=""
              className="object-cover w-full h-full"
            />
          </div>
          <div className="w-full h-screen">
            <img
              src={property3}
              alt=""
              className="object-cover w-full h-full"
            />
          </div>
          <div className="w-full h-screen">
            <img
              src={property4}
              alt=""
              className="object-cover w-full h-full"
            />
          </div>
        </Carousel>
      </div>
      <div className="p-10 flex flex-col gap-14">
        <div className="flex justify-between">
          <div className="flex flex-col gap-4 text-[30px] font-medium ">
            <h1>Dubai - Umm Al Sheif - Umm Al Sheif Villas, Umm Al Sheif</h1>
            <h1>Dubai, United Arab Emirates</h1>
          </div>
          <div className="cursor-pointer relative">
            <div className="text-[18px] flex flex-col gap-4">
              See all Photos & videos
              <div className="flex gap-3">
                <div className="flex gap-3 items-center border-2 px-4 py-2 justify-center rounded-lg">
                  <span className="text-[20px]">
                    <IoMdPhotos />
                  </span>
                  <p>Photos</p>
                </div>
                <div className="flex gap-3 items-center border-2 px-4 justify-center rounded-lg">
                  <span className="text-[20px]">
                    <BiSolidVideos />
                  </span>
                  <p>Videos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <hr />
        </div>

        <div className="flex justify-between items-center">
          <div className="flex gap-24 justify-center ">
            <div className="flex flex-col gap-3">
              <span className="font-semibold">PRICE</span>
              <p className="text-[20px]">$32,697,548</p>
            </div>
            <div className="flex flex-col gap-3">
              <span className="font-semibold">BEDROOMS</span>
              <p className="text-[20px]">6</p>
            </div>
            <div className="flex flex-col gap-3">
              <span className="font-semibold">BATHROOMS</span>
              <p className="text-[20px]">7</p>
            </div>
            <div className="flex flex-col gap-3">
              <span className="font-semibold">AREA</span>
              <p className="text-[20px]">128 ft.</p>
            </div>
          </div>
          <div>
            <div className="w-[400px] h-auto px-[0px] py-[15px] bg-slate-800">
              <div className="flex flex-col text-white justify-center items-center gap-4">
                <span className="text-[28px] mt-4">Akshay neje</span>
                <div className="flex items-center gap-2 cursor-pointer">
                  <span onClick={() => setIsOpen(!isOpen)}>Send message</span>
                  <span className="font-medium text-xl">
                    <GoArrowRight />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[100%] mt-10">
          <div className="flex justify-center items-center">
            <span className="text-[34px]">Amenities & Features</span>
          </div>
          <div className="flex justify-around py-8 mt-8">
            <div className="flex flex-col gap-4 w-[20%]">
              <span className="text-[18px] font-semibold">Listing Details</span>
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <div>
                    <p className="text-lg">Property ID</p>
                  </div>
                  <div>#123</div>
                </div>

                <div className="flex flex-col gap-2">
                  <div>
                    <p className="text-lg">Property Type</p>
                  </div>
                  <div>Single Family Homes</div>
                </div>

                <div className="flex flex-col gap-2">
                  <div>
                    <p className="text-lg">City</p>
                  </div>
                  <div>Banglore</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 w-[25%]">
              <span className="text-[18px] font-semibold">
                Utilities & Building
              </span>
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <div>
                    <p className="text-lg">Year Built</p>
                  </div>
                  <div>2000</div>
                </div>

                <div className="flex flex-col gap-2">
                  <div>
                    <p className="text-lg">Lot Size Unit</p>
                  </div>
                  <div>Acre(s)</div>
                </div>

                <div className="flex flex-col gap-2">
                  <div>
                    <p className="text-lg">Lot Size</p>
                  </div>
                  <div>7.76</div>
                </div>
                <div className="flex flex-col gap-2">
                  <div>
                    <p className="text-lg">Parking</p>
                  </div>
                  <div>Garage</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 w-[20%]">
              <span className="text-[18px] font-semibold">Interior</span>
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <div>
                    <p className="text-lg">Amenities</p>
                  </div>
                  <div>
                    Balcony, Doorman, Tennis Court, Tile Flooring, walk-in
                    closet, Gardens, In-Home Fitness Center, Terrace / Outdoor
                    Space, Outdoor Pool, 1 Fireplace
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <div>
                    <p className="text-lg">Bathrooms</p>
                  </div>
                  <div>7</div>
                </div>

                <div className="flex flex-col gap-2">
                  <div>
                    <p className="text-lg">Bedroom</p>
                  </div>
                  <div>6</div>
                </div>
                <div className="flex flex-col gap-2">
                  <div>
                    <p className="text-lg">Balcony</p>
                  </div>
                  <div>3</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 w-[20%]">
              <span className="text-[18px] font-semibold">
                Additional Features
              </span>
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <div>
                    <p className="text-lg">Features</p>
                  </div>
                  <div>
                    Mountain Views, Water View, Eco-friendly, Deep Water
                    Mooring, Scenic View
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="w-[50%] flex flex-col gap-4">
            <h1 className="text-[30px]">Descriptions</h1>
            <p>
              In the heart of the Baltic States, in Riga, the capital of Latvia,
              on the banks of the river Daugava, there is one of the tallest
              building complexes in the Baltic States - Zunda Towers. Zunda
              Towers is located in the center of Riga - a place where the energy
              of the 21st century metropolis merges with the history and
              traditions of the 800-year-old European capital. The property
              consists of a plot of land with an area of ??9,192 m2 and the
              buildings on it, the total area of??which is almost 89,000 m2. Two
              30-story high-buildings - towers - one of which is for premium
              class offices, and the other - for apartments. It is possible to
              develop the apartment tower as rental apartments, as a hotel, as
              Branded residences, or to combine and rent or sell some of the
              apartments, and arrange the rest into hotel rooms. The buildings
              are equipped with the highest quality energy-efficient facade, air
              humidifier, electric car charging stations, intelligent building
              control systems, high-speed elevators, automatic fire
              extinguishing (sprinkler) system, access card system for access to
              the premises, 24/7 security system, optical Internet (two
              operators).
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-[30px]">Location</span>
            <iframe
              title="ackd"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9267422206685!2d77.71582437381036!3d12.976537314772568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae11a235ad9125%3A0xc51d9bf3915e2ae5!2sCerton%20Technologies!5e0!3m2!1sen!2sin!4v1703659634641!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: "0" }}
              //   allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div className="flex flex-col gap-8 pb-5">
          <div className="text-[30px]">Similiar Property</div>
          <div className="">
            <Carousel
              swipeable={false}
              draggable={false}
              // showDots={true}
              responsive={Similiarresponsive}
              ssr={true}
              infinite={true}
              // autoPlay={true}
              // autoPlaySpeed={3000}
              // customTransition="transform 2000ms ease-in-out"
              // transitionDuration={500}
            >
              <Properties />
              <Properties />
              <Properties />
              <Properties />
            </Carousel>
          </div>
        </div>
        <div>
          <GetInTouchForm isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailsPage;
