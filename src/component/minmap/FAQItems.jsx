import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import F from "../../constant/minmap/faq";

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { faArrowUp, faMessage, faSearch } from "@fortawesome/free-solid-svg-icons";

const FAQS = () => {
  const [faqs, setFaqs] = useState([]);

  const [searchQuery, setSearchQuery] = useState("");
  const [expanded, setExpanded] = useState(null);

  const [question, setQuestion] = useState('');

  const handleInputChange = (e) => {
    setQuestion(e.target.value);
  };

  const filteredFAQs = faqs.filter((faq) =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase())
  );


  const [category, setCategory] = useState('');
  const [priority, setPriority] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);

  
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic, like sending data to an API
    console.log({
      category,
      priority,
      description,
      file,
    });
  }

  // Toggle the answer for a specific FAQ item
  const toggleAnswer = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  

  return (
    <div className="p-6 w-[100%] h-full mt-[59px] rounded-lg border shadow-2xl">
      
      <div className="flex flex-col justify-center lg:w-[100%] w-[100%] lg:px-10 mx-auto ">
      <h2 className="text-3xl font-bold mb-4">FAQs</h2>
      <p>Find answers to common questions and get the support you need</p>
     </div>
      <div className="flex justify-center items-center  lg:w-[70%] bg-[#1db482] w-[100%]  ml-10  rounded-full p-3 h-12 mb-5">
        <input
        type="text"
        placeholder="Search FAQs..."
        className="w-full p-2  border-gray-300 border-l rounded-l-full "
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
       
      />
      <button types="submit" className="p-2  border-gray-300 border-r bg-white rounded-r-full">
            <FontAwesomeIcon icon={faSearch} />
          </button>
      </div>

      <div className="grid grid-cols-2 lg:w-[100%] w-[100%] lg:px-10 mx-auto gap-12">
        
        {F.FAQs.map((faq, index) => {
          console.log(`${index}: ${faq.question}`);

          return (

            <div key={index} className="flex space-x-3 " >
               <div className="  text-[#6fb6a6]  text-2xl flex">
                  <FontAwesomeIcon
                    icon={faq.icon}
                  ></FontAwesomeIcon>
                </div>
                <div className="flex flex-col gap-y-2"> 
                <button
                onClick={() => toggleAnswer(index)}
                className="w-full text-left font-semibold text-lg"
              >
                {faq.question}
              </button>
              
                <p className="text-gray-700 mt-2">{faq.answer}</p>
             
                </div>
              
            </div>
          );
        })}
      </div>
      <div className="pt-10  mx-auto  justify-center items-center flex flex-col  lg:w-[100%] w-[100%] lg:px-10  ">
      
        <h1 className="font-bold ">LIVE SUPPORT & GUIDANCE</h1>
        <p>Get all the needed support you may want</p>

        <div className="grid grid-cols-2 mt-4 gap-10">
        <div className="bg-[#1db482]
        p-3 flex flex-col justify-center items-center">
         <Link to="/live_ui_dashboard/live-chat">
          <h1 className="font-bold">Project Management</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, nam aut est voluptate ut praesentium rerum dolor deserunt assumenda sapiente.</p>
          <p className="text-white flex justify-end items-end"><FontAwesomeIcon   icon={faMessage}/></p>
          </Link>
          
        </div>
        <div className="bg-[#1db482]
         p-3 flex flex-col justify-center items-center">
         <Link to="/live_ui_dashboard/live-chat">
    
          <h1 className="font-bold">Project Tendering</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, nam aut est voluptate ut praesentium rerum dolor deserunt assumenda sapiente.</p>
          <p className="text-white flex justify-end items-end"><FontAwesomeIcon   icon={faMessage}/></p>
          </Link>
          
        </div>
        </div>
      </div>
      <div className="mt-10 flex flex-col justify-center lg:w-[100%] w-[100%] lg:px-10 mx-auto ">
      <h1>Want to ask a question?</h1>
      <div className="border bg-[#1db482] rounded-md shadow-md h-60 max-w-full ">
        
        <div className="flex flex-col items-center justify-center m-6 h-48 bg-white rounded-lg " >
        <input
        type="text"
        placeholder="Ask here..."
        className="bg-white border-none outline-none text-gray-400 h-full w-full  text-lg  rounded-md  "
          value={question}
          onChange={handleInputChange}
      />
      <Link to="/">
      <button type="submit"
          className="lg:ml-[700px] bg-[#1db482] text-white font-bold py-2 px-4 rounded-full  m-2 hover:bg-green-900 transition-colors"
        >
          <FontAwesomeIcon icon={faArrowUp}/>
        </button>
      </Link>
        </div>
      
      </div>
      </div>
      
      <div className="mt-10 flex flex-col justify-center lg:w-[100%] w-[100%] lg:px-10 mx-auto ">
        <p className="font-bold border-b-2 mb-3">Ticket Submission</p>
        <p>For Issues that more details follow-up, you can  submit a support ticket directly</p>
        <div className="">
        <form onSubmit={handleSubmit} 
        
        className="">
          <div className="gap-32 grid grid-cols-2"> 

<div >
          <label className="block text-gray-700 pt-5">Issue category</label>
          <select 
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-2 border rounded-lg bg-[#219276]"
          >
            <option value="">--Select a category--</option>
            <option value="Technical Issue">Technical Issue</option>
            <option value="Account Issue">Account Issue</option>
            <option value="Log-out Issue">Log-out Issue</option>
            <option value="Search Issue">Search Issue</option>
            <option value="Navigation Issue">Navigation Issue</option>
          </select>
        </div>

   
        <div>
          <label className="block text-gray-700 mb-1 pt-5">Priority level</label>
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="w-full p-2 border rounded-lg bg-[#219276]"
          >
            <option value="">--Select a level--</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>

          </div>
        

        <div className="mt-20">
          <label className="block text-gray-700 mb-1 font-semibold">Description</label>
          <div className="bg-[#219276] lg:h-[300px] flex flex-col lg:w-[70%]  p-5 rounded-lg">
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Add your issue description here"
            className="w-full p-2 border rounded-lg h-52 "
          ></textarea>
<div className="mt-5">
       
          <input
            type="file"
            onChange={handleFileChange}
            className=" p-2 "
          />
        </div>

          </div>
         
        </div>

        

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-[#219276] text-white px-4 py-1 rounded-full hover:bg-green-900"
          >
            Submit
          </button>
        </div>
      </form>

        </div>
      </div>
      
    </div>
  );
};

export default FAQS;
