import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";


const Header = () => {
  return (
    <div className="bg-[#53bd8d] text-white p-4 -z-50 flex fixed justify-between items-center h-[59px] w-[100vw]">
     <div>
        <Link className="text-lg lg:h-10 h-10 lg:w-[100px] w-[100px] flex items-center justify-center font-bold  rounded-lg bg-[#3d9970] text-black" to={"/"}>
          <button className="text-xl  text-white pb-3 " type="submit">
            <span className="text-4xl pt-4 text-white"><FontAwesomeIcon icon={faArrowLeft} className="text-xl" /></span> Back
          </button>
        </Link>
        </div>

     <div className="animate-pulse text-lg lg:pr-96" >
        <h1 >Live Chat and Support</h1>
        </div>
    </div>
  );
};

export default Header;
