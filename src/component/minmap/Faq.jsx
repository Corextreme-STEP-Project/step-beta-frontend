// FAQ.jsx
import React, { useState, useEffect } from 'react';

// Sample FAQ Data (Replace with API call or props if needed)
const sampleFAQs = [
  { question: "How do I access my regulatory dashboard?", answer: "You can access it from the main menu under 'Dashboard'." },
  { question: "What is the refund policy?", answer: "We offer a full refund within 30 days of purchase if you're not satisfied." },
  { question: "How can I contact support?", answer: "You can contact support via the 'Help' section or email us at support@example.com." },
  { question: "What payment methods are accepted?", answer: "We accept Visa, MasterCard, and PayPal." },
  { question: "Is there a mobile app available?", answer: "Yes, we have apps available on both iOS and Android." },
];

function FAQ() {
  // State to store FAQs, search query, and expanded items
  const [faqs, setFaqs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [expanded, setExpanded] = useState(null);

  // Load FAQs (you could replace this with a fetch from an API)
  useEffect(() => {
    setFaqs(sampleFAQs);
  }, []);

  // Filter FAQs based on search query
  const filteredFAQs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Toggle the answer for a specific FAQ item
  const toggleAnswer = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <div className="p-6 w-[70%]">
      <h2 className="text-3xl font-bold mb-4">FAQs</h2>
      
      <input
        type="text"
        placeholder="Search FAQs..."
        className="w-full p-2 border border-gray-300 rounded-md mb-4"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      
      <div className="gap-10 grid grid-cols-2">
        {filteredFAQs.length > 0 ? (
          filteredFAQs.map((faq, index) => (
            <div key={index} className="border border-gray-300 rounded-md p-4">
              <button
                onClick={() => toggleAnswer(index)}
                className="w-full text-left font-semibold text-lg"
              >
                {faq.question}
              </button>
              {expanded === index && (
                <p className="text-gray-700 mt-2">{faq.answer}</p>
              )}
            </div>
          ))
        ) : 
        (
          <p className="text-gray-500">No FAQs found for "{searchQuery}"</p>
        )}
      </div>
    </div>
  );
}
export default FAQ






// // FAQ.jsx
// import React, { useState, useEffect } from 'react';

//  function FAQ() {

//   const [faqs, setFaqs] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [expanded, setExpanded] = useState(null);

//   // Fetch FAQs from API when component mounts
//   useEffect(() => {
//     const fetchFaqs = async () => {
//       try {
//         const response = await fetch('https://example.com/api/faqs'); // Replace with your API endpoint
//         const data = await response.json();
//         setFaqs(data);
//       } catch (error) {
//         console.error("Error fetching FAQs:", error);
//       }
//     };

//     fetchFaqs();
//   }, []);

//   // Filter FAQs based on search query
//   const filteredFAQs = faqs.filter(faq =>
//     faq.question.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   // Toggle the answer for a specific FAQ item
//   const toggleAnswer = (index) => {
//     setExpanded(expanded === index ? null : index);
//   };

//   return (
//     <div className="p-6 max-w-2xl mx-auto">
//       <h2 className="text-3xl font-bold mb-4">FAQs</h2>

//       {/* Search Input */}
//       <input
//         type="text"
//         placeholder="Search FAQs..."
//         className="w-full p-2 border border-gray-300 rounded-md mb-4"
//         value={searchQuery}
//         onChange={(e) => setSearchQuery(e.target.value)}
//       />

//       {/* FAQ List */}
//       <div className="space-y-4">
//         {filteredFAQs.length > 0 ? (
//           filteredFAQs.map((faq, index) => (
//             <div key={index} className="border border-gray-300 rounded-md p-4">
//               <button
//                 onClick={() => toggleAnswer(index)}
//                 className="w-full text-left font-semibold text-lg"
//               >
//                 {faq.question}
//               </button>
//               {expanded === index && (
//                 <p className="text-gray-700 mt-2">{faq.answer}</p>
//               )}
//             </div>
//           ))
//         ) : (
//           <p className="text-gray-500">No FAQs found for "{searchQuery}"</p>
//         )}
//       </div>
//     </div>
//   );
// }
// export default FAQ