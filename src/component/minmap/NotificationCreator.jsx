import React, { useState } from 'react';
import axios from 'axios';


const NotificationCreator = () => {
  const [formData, setFormData] = useState({
    userId: '',
    content: '',
    type: '',
    status: 'unread', // default status
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/notifications/create', formData);
      alert('Notification created successfully!');
      setFormData({ userId: '', content: '', type: '', status: 'unread' });
    } catch (error) {
      console.error('Error creating notification:', error);
      alert('Failed to create notification');
    }
  };

  return (
    <div className=' w-[100%] h-[90vh] flex  justify-center items-center pt-20' 
    >

    <form onSubmit={handleSubmit} className="p-4  w-[40%] h-full flex flex-col justify-center  bg-[#059669] shadow-lg rounded-lg "  >
      <h1 className='text-2xl text-white text-center mb-4'>Create Notification</h1>
      <div className="mb-4">
        <label className="block text-lg font-medium">Project Owner</label>
        <input
          type="text"
          name="userId"
          value={formData.userId}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-lg"
          placeholder="Enter owner Id"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium">Content</label>
        <textarea
          name="content"
          value={formData.content}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-lg"
          placeholder="Notification Content"
        ></textarea>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium">Type</label>
        <select
          name="type"
          value={formData.type}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-lg"
        >
          <option value="">Select Type</option>
          <option value="alert">Alert</option>
          <option value="info">Information</option>
          <option value="warning">Warning</option>
        </select>
      </div>
      <button 
        type="submit"
        className="px-4 py-2 bg-white text-black rounded-lg hover:bg-green-900 font-semibold lg:w-40  "
      >
        Send Notification
      </button>
    </form>
    </div>
  );
};

export default NotificationCreator;
