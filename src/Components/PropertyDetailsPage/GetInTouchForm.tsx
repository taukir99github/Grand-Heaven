import React from "react";
import { RxCross1 } from "react-icons/rx";

interface GetInTouchFormProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}


const GetInTouchForm: React.FC<GetInTouchFormProps> = ({isOpen,setIsOpen}) => {

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center mt-[3rem]">
          <div className="w-[450px] h-auto bg-gray-200 shadow-lg rounded-lg p-4 ">
            <div className="w-[100%] flex justify-between items-center">
              <span className="text-[28px]">Get In Touch</span>
              <span onClick={handleClose}>
                <RxCross1 />
              </span>
            </div>
            <div className="flex flex-col gap-8 justify-center items-center p-2 mt-4">
              <div className="flex justify-center items-center gap-3 text-base">
                <label htmlFor="">Name:</label>
                <input type="text" className="p-2 outline-none rounded-lg" />
              </div>
              <div className="flex justify-center items-center gap-3">
                <label htmlFor="">Email:</label>
                <input type="email" className="p-2 outline-none rounded-lg" />
              </div>
              <div className="flex justify-center items-center gap-3">
                <label htmlFor="">Phone:</label>
                <input
                  type="number"
                  className="p-2 outline-none rounded-lg"
                />
              </div>
              <div className="flex flex-col gap-3">
                <div>
                  {" "}
                  <label htmlFor="">Your message:</label>
                </div>
                <textarea
                  rows={4}
                  cols={32}
                  placeholder="i'm interested in the property....."
                  className="p-2 outline-none rounded-lg"
                />
              </div>
              <div className="p-2 bg-[#C92028] px-8 rounded-lg text-white">
                <button>Send</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GetInTouchForm;
