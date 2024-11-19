import { useState } from "react";
import { Link } from "react-router-dom";

const ChatSidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div
      className={`sidebar flex flex-col gap-2 h-screen w-[20%] md:w-[15%] sm:w-[5%] px-2 py-6 fixed overflow-auto ${
        isExpanded ? "w-[20%] md:w-[15%]" : "w-[8%] md:w-[5%]"
      } transition-width duration-300 ease-in-out relative scrollbar-thin scrollbar-thumb-[#ebd451e1] scrollbar-track-gray-300 `}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <Link to={""}>
        <div className="logo text-[0.8rem]">
          <div
            className={`flex ${
              isExpanded ? "justify-start" : "justify-center"
            } bg-[#f0d39d] rounded-md p-2`}
          >
            <span className="font-bold">
              S
            </span>
            <p
              className={`${
                isExpanded ? "block" : "hidden"
              } ml-2 relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-black after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100 `}
            >
              STEP
            </p>
          </div>
        </div>
      </Link>

      <hr className="mt-5 mb-5 h-2" />

      <Link to={""}>
        <div className="links text-[0.8rem]">
          <div
            className={`flex ${
              isExpanded ? "justify-start" : "justify-center"
            } bg-[#EEC16D] rounded-md p-2`}
          >
            <span className="">
              
            </span>
            <p
              className={`${
                isExpanded ? "block" : "hidden"
              } ml-2 relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-black after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100 `}
            >
              Home
            </p>
          </div>
        </div>
      </Link>

      <Link to={""}>
        <div className="links text-[0.8rem]">
          <div
            className={`flex ${
              isExpanded ? "justify-start" : "justify-center"
            } bg-[#EEC16D] rounded-md p-2`}
          >
            <span className="">
              
            </span>
            <p
              className={`${
                isExpanded ? "block" : "hidden"
              } ml-2 relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-black after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100`}
            >
              My Products
            </p>
          </div>
        </div>
      </Link>

      <Link to={""}>
        <div className="links text-[0.8rem]">
          <div
            className={`flex ${
              isExpanded ? "justify-start" : "justify-center"
            } bg-[#EEC16D] rounded-md p-2`}
          >
            <span className="">
              
            </span>
            <p
              className={`${
                isExpanded ? "block" : "hidden"
              } ml-2 relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-black after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100`}
            >
              Orders
            </p>
          </div>
        </div>
      </Link>

      <Link to={""}>
        <div className="links text-[0.8rem]">
          <div
            className={`flex ${
              isExpanded ? "justify-start" : "justify-center"
            } bg-[#EEC16D] rounded-md p-2`}
          >
            <span className="">
              
            </span>
            <p
              className={`${
                isExpanded ? "block" : "hidden"
              } ml-2 relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-black after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100`}
            >
              Add Product
            </p>
          </div>
        </div>
      </Link>

      <Link to={""}>
        <div className="links text-[0.8rem]">
          <div
            className={`flex ${
              isExpanded ? "justify-start" : "justify-center"
            } bg-[#EEC16D] rounded-md p-2`}
          >
            <span className="">
             
            </span>
            <p
              className={`${
                isExpanded ? "block" : "hidden"
              } ml-2 relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-black after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100`}
            >
              Coupons
            </p>
          </div>
        </div>
      </Link>

      <Link to={""}>
        <div className="links text-[0.8rem]">
          <div
            className={`flex ${
              isExpanded ? "justify-start" : "justify-center"
            } bg-[#EEC16D] rounded-md p-2`}
          >
            <span className="">
             
            </span>
            <p
              className={`${
                isExpanded ? "block" : "hidden"
              } ml-2 relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-black after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100`}
            >
              Reviews
            </p>
          </div>
        </div>
      </Link>

      <Link to={""}>
        <div className="links text-[0.8rem]">
          <div
            className={`flex ${
              isExpanded ? "justify-start" : "justify-center"
            } bg-[#EEC16D] rounded-md p-2`}
          >
            <span className="">
              
            </span>
            <p
              className={`${
                isExpanded ? "block" : "hidden"
              } ml-2 relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-black after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100`}
            >
              About
            </p>
          </div>
        </div>
      </Link>

      <Link to={""}>
        <div className="links text-[0.8rem]">
          <div
            className={`flex ${
              isExpanded ? "justify-start" : "justify-center"
            } bg-[#EEC16D] rounded-md p-2`}
          >
            <span className="">
             
            </span>
            <p
              className={`${
                isExpanded ? "block" : "hidden"
              } ml-2 relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-black after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100`}
            >
              Settings
            </p>
          </div>
        </div>
      </Link>

      <hr className="mt-5 mb-5 h-2" />


      <p className={`${isExpanded ? "block" : "hidden"}`}>Log Out</p>
    </div>
  );
};

export default ChatSidebar;
