import React, { useState } from 'react';

const Sidebar = ({ setActiveConversation }) => {
  // Example conversations, could be fetched from an API
  const conversations = [
    { id: 1, name: 'Project A', status: 'active', phase: 'Procurement', participants: ['John Doe', 'MINMAP'], deadline: '2024-12-01' },
    { id: 2, name: 'Project B', status: 'waiting for approval', phase: 'Maturation', participants: ['Jane Doe', 'ARMP'], deadline: '2024-12-10' },
    { id: 3, name: 'Project C', status: 'completed', phase: 'Execution', participants: ['John Doe'], deadline: '2024-11-30' },
    { id: 4, name: 'Project D', status: 'active', phase: 'Monitoring', participants: ['MINMAP'], deadline: '2024-12-15' },
  ];

  const [searchQuery, setSearchQuery] = useState('');

  const handleConversationClick = (conversation) => {
    setActiveConversation(conversation);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredConversations = conversations.filter((convo) =>
    convo.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-72 bg-gray-100 p-4 shadow-lg">
      {/* Search bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search conversations"
          value={searchQuery}
          onChange={handleSearchChange}
          className="w-full p-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Conversation List */}
      <div className="space-y-4 overflow-y-auto max-h-[500px]">
        {filteredConversations.map((convo) => (
          <div
            key={convo.id}
            className="flex justify-between p-4 bg-white rounded-lg shadow hover:bg-gray-200 cursor-pointer"
            onClick={() => handleConversationClick(convo)}
          >
            <div className="flex flex-col space-y-1">
              <span className="text-lg font-semibold">{convo.name}</span>
              <span className="text-sm text-gray-500">{convo.phase}</span>
            </div>

            {/* Status Indicator */}
            <div className="flex flex-col justify-between text-sm text-right">
              <span
                className={`px-3 py-1 rounded-full font-semibold ${
                  convo.status === 'active'
                    ? 'bg-green-500 text-white'
                    : convo.status === 'waiting for approval'
                    ? 'bg-yellow-400 text-white'
                    : 'bg-gray-500 text-white'
                }`}
              >
                {convo.status}
              </span>
              <span className="text-xs text-gray-400">Deadline: {convo.deadline}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Create New Conversation Button */}
      <div className="mt-6">
        <button className="w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none">
          + New Conversation
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
