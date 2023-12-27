import React, { useState } from "react";
import "./Faq.css";
import { FaArrowRightLong } from "react-icons/fa6";

const Faq: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const questions = [
    "How to Begin Buying a Home?",
    "Picking the Perfect Neighborhood",
    "Pre-Qualification vs. Pre-Approval",
    "Renting a Property: The Process",
    "Understanding Closing Costs",
    "Assessing Home Value",
  ];

  const answers = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquet convallis feugiat.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquet convallis feugiat.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquet convallis feugiat.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquet convallis feugiat.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquet convallis feugiat.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquet convallis feugiat.",
  ];

  const handleAccordionClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const splitQuestions = (arr: string[], start: number, end: number) => {
    return arr.slice(start, end).map((question, index) => (
      <div key={index}>
        <div
          className={`faq-section-lower-pt-1-content flex gap-2 items-center ${
            activeIndex === index + start ? "active" : ""
          }`}
          onClick={() => handleAccordionClick(index + start)}
        >
          <span className="font-bold">{index + start + 1}</span>
          <p>{question}</p>
          <FaArrowRightLong />
        </div>
        {activeIndex === index + start && (
          <div className="faq-answer">{answers[index + start]}</div>
        )}
      </div>
    ));
  };

  return (
    <div className="faq-section cursor-pointer">
      <div className="faq-section-upper">
        <h1>Frequently Asked Questions</h1>
        <div className="flex items-center">
          <button className="px-5 py-2">Contact Us</button>
        </div>
      </div>
      <div className="faq-section-lower">
        <div className="faq-section-lower-pt-1">
          {splitQuestions(questions, 0, 3)}
        </div>
        <div className="faq-section-lower-pt-1">
          {splitQuestions(questions, 3, 6)}
        </div>
      </div>
    </div>
  );
};

export default Faq;
