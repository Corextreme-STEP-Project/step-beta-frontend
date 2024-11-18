import React, { useState } from "react";

const Response = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const [comment, setomment] = useState('');
  

  const options = [
    { id: 1, label: "I totally understood everything", emoji: "😊" },
    { id: 2, label: "I partially understood everything", emoji: "😐" },
    { id: 3, label: "I did not understand it at all", emoji: "☹️" },
  ];

  return (
    <div className=" ">
      <div
        id="header"
        className="flex  flex-col items-left justify-center h-[59px] w-[100%]  fixed  pl-[56px] bg-[#53bd8d] "
      >
        <div className="text-2xl font-bold text-white">Messaging & Help</div>
        <div className="text-white text-sm">General Question Response</div>
      </div>
      <div className="pt-[100px] p-20">
        <h1 className="font-bold  bg-white border-b-2 mb-3 ">Response</h1>

        <div className="space-y-4">
          <h1 >To access the Dashboard:</h1>
          <ol>
            <li> 1. Log in to your account.</li>
            <li>2. Select Dasboard from the main menu</li>
          </ol>

          <p>
            On the Dashboard pge, you-ll see an overview of all projects under
            your juridiction. Use the available filters to view specific
            projects by status, location or project owner. these filter help you
            to easily locate projects relevant to your criteria and manage them
            effectively.
          </p>
        </div>

        <div id="feedback" className="space-y-4">
          <h1 className="font-bold pt-6">Feedback</h1>
          <p>
            Which of these statements best explains your satisfaction with the
            above response?
          </p>

          <div className="space-y-4">
            {options.map((option) => (
              <label
                key={option.id}
                className={`flex items-center p-3 rounded-lg border cursor-pointer transition-colors w-[60%] ${
                  selectedOption === option.id
                    ? "bg-[#219276] border-green-300"
                    : "bg-green-200 border-green-300"
                }`}
              >
                <input
                  type="checkbox"
                  name="satisfaction"
                  value={option.id}
                  checked={selectedOption === option.id}
                  onChange={() => setSelectedOption(option.id)}
                  className=" text-green-600 h-5 w-5 mr-3"
                />
                <span className="flex-1  text-gray-700">{option.label}</span>
                <span className="text-xl">{option.emoji}</span>
              </label>
            ))}
          </div>

          <div className="mt-20">
          <label className="block text-gray-700 mb-1 font-semibold">comment</label>
          <div className="bg-[#219276] lg:h-[250px] flex flex-col lg:w-[70%]  p-5 rounded-lg">
          <textarea
            value={comment}
            onChange={(e) => setomment(e.target.value)}
            placeholder="Add your comment"
            className="w-full p-2 border rounded-lg h-52 outline-none"
          ></textarea>
          </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Response;
