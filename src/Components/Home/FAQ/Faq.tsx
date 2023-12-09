import React from "react";
import "./Faq.css";
import { FaArrowRightLong } from "react-icons/fa6";

const Faq: React.FC = () => {
  return (
    <>
      <div className="faq-section cursor-pointer">
        <div className="faq-section-upper">
          <h1>Frequently Asked Questions</h1>
          <button>Contact Us</button>
        </div>
        <div className="faq-section-lower">
          <div className="faq-section-lower-pt-1">
            <div className="flex gap-16 items-center">
              <div className="faq-section-lower-pt-1-content flex gap-2">
                <span className="font-bold">01</span>
                <p>How to Begin Buying a Home?</p>
              </div>
              <div className="faq-section-lower-pt-1-icons">
                <FaArrowRightLong />
              </div>
            </div>
            <div className="flex gap-16 items-center">
              <div className="faq-section-lower-pt-1-content flex gap-2">
                <span className="font-bold">02</span>
                <p>Picking the Perfect Neighborhood</p>
              </div>
              <div className="faq-section-lower-pt-1-icons">
                <FaArrowRightLong />
              </div>
            </div>
            <div className="flex gap-16 items-center">
              <div className="faq-section-lower-pt-1-content flex gap-2">
                <span className="font-bold">03</span>
                <p>Pre-Qualification vs. Pre-Approva</p>
              </div>
              <div className="faq-section-lower-pt-1-icons">
                <FaArrowRightLong />
              </div>
            </div>
          </div>

          <div className="faq-section-lower-pt-2">
            <div className="flex gap-16 items-center">
              <div className="faq-section-lower-pt-1-content flex gap-2">
                <span className="font-bold">04</span>
                <p>Renting a Property: The Process</p>
              </div>
              <div className="faq-section-lower-pt-1-icons">
                <FaArrowRightLong />
              </div>
            </div>
            <div className="flex gap-16 items-center">
              <div className="faq-section-lower-pt-1-content flex gap-2">
                <span className="font-bold">05</span>
                <p>Understanding Closing Costs</p>
              </div>
              <div className="faq-section-lower-pt-1-icons">
                <FaArrowRightLong />
              </div>
            </div>
            <div className="flex gap-16 items-center">
              <div className="faq-section-lower-pt-1-content flex gap-2">
                <span className="font-bold">06</span>
                <p>Assessing Home Value</p>
              </div>
              <div className="faq-section-lower-pt-1-icons">
                <FaArrowRightLong />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
