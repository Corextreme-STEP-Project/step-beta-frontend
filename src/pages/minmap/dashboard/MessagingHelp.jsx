import React, { useState } from 'react';

// Sample Messaging & Help Component
const MessagingHelp = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { id: 1, text: 'Welcome to the Help Center! How can we assist you today?', fromSupport: true },
  ]);
  const [faqs] = useState([
    { question: 'How do I reset my password?', answer: 'Go to Settings > Account > Reset Password.' },
    { question: 'Where can I view my projects?', answer: 'Your projects are listed under the Dashboard section.' },
    { question: 'How do I contact support?', answer: 'Use the messaging tool on this page or email us at support@example.com.' },
  ]);

  const handleMessageSend = () => {
    if (message.trim()) {
      // Add new user message to the chat
      setMessages([...messages, { id: messages.length + 1, text: message, fromSupport: false }]);
      setMessage('');
    }
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-semibold text-gray-800">Messaging & Help</h2>
      <p className="mt-2 text-gray-600">Get help or send a message to our support team.</p>

      {/* Messaging Section */}
      <div className="mt-6">
        <h3 className="text-lg font-medium text-gray-700">Messaging</h3>
        <div className="mt-4 border rounded p-4 h-64 overflow-y-auto bg-gray-50">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`p-2 mb-2 rounded ${msg.fromSupport ? 'bg-blue-100 text-blue-800' : 'bg-emerald-100 text-emerald-800'} max-w-xs ${msg.fromSupport ? 'self-start' : 'self-end'
                }`}
            >
              {msg.text}
            </div>
          ))}
        </div>
        <div className="flex mt-4">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
          <button
            onClick={handleMessageSend}
            className="ml-2 px-4 py-2 bg-emerald-600 text-white rounded hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            Send
          </button>
        </div>
      </div>

      {/* FAQs Section */}
      <div className="mt-8">
        <h3 className="text-lg font-medium text-gray-700">Frequently Asked Questions (FAQs)</h3>
        <div className="mt-4">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <h4 className="font-semibold text-gray-800">{faq.question}</h4>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Support */}
      <div className="mt-8">
        <h3 className="text-lg font-medium text-gray-700">Need More Help?</h3>
        <p className="text-gray-600 mt-2">For urgent issues, contact our support team at:</p>
        <p className="text-gray-800 mt-1">Email: <a href="mailto:support@stepproject.com" className="text-blue-600">support@stepproject.com</a></p>
        <p className="text-gray-800">Phone: <a href="tel:+1234567890" className="text-blue-600">+1 234-567-890</a></p>
      </div>
    </div>
  );
};

export default MessagingHelp;
