import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-solid-svg-icons";

import ChatForm from "./chatform";

const Layout = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };
  return (
    <div>
      <div className="flex w-[100vw] lg:h-[100vh] h-[100vh]">
        {/* <div
          id="side"
          className="bg-[#09445f] text-white lg:h-[100%] h-[100%] lg:w-[20%] w-[20%]"
        >
          <h2 className="text-2xl p-6 font-bold mb-4">
            Sidebar items goes here
          </h2>
        </div> */}

        <div  className="w-[100%] lg:w-[100%]">
          <div className="p-4 w-[100%] lg:w-[100%] bg-yellow-300 text-black ">
            <h1 className="text-2xl font-bold">Heading goes here</h1>
          </div>

          <div id="chat-toggle" className="flex justify-end gap-5 lg:h-[80%]">
            <div
              onClick={togglePopup}
              id="message-box"
              className=" p-4 flex "
            >
              {isPopupVisible &&  <ChatForm closePopup={togglePopup} />}

              <div className="flex items-end text-5xl text-yellow-500 hover:text-[#09445f]" >
                <FontAwesomeIcon
        
                  icon={faMessage}
                />
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
