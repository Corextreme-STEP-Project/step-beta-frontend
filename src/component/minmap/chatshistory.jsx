import React from 'react';

const chatData = [
  {
    id: 1,
    category: "Project Management",
    name: "Support Assistant",
    message: "On the Dashboard page, you’ll see an overview of all projects...",
    date: "Yesterday",
  },
  {
    id: 2,
    category: "Project Tendering",
    name: "Support Assistant",
    message: "On the Dashboard page, you’ll see an overview of all projects...",
    date: "24/07/24",
  },
];

function ChatItem({ category, name, message, date }) {
  return (
    <div className="bg-green-500 text-white  rounded-lg mb-4 p-6 w-[100%] h-full mt-[59px]  border shadow-2xl ">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
          <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center text-green-500 font-bold mr-3">
            SA
          </div>
          <div>
            <p className="font-semibold">{name}</p>
            <p className="text-sm">{category}</p>
          </div>
        </div>
        <div className="text-sm">{date}</div>
      </div>
      <p className="text-sm">{message}</p>
    </div>
  );
}

function ChatsAndHistory() {
  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-lg font-bold mb-4">Chats and history</h2>
      <hr className="border-gray-300 mb-4" />
      {chatData.map((chat) => (
        <ChatItem
          key={chat.id}
          category={chat.category}
          name={chat.name}
          message={chat.message}
          date={chat.date}
        />
      ))}
    </div>
  );
}

export default ChatsAndHistory;
