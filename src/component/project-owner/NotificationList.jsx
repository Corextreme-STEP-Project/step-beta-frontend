import React, { useEffect, useState } from 'react';
import axios from 'axios';

const NotificationList = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await axios.get('/notifications/:userId'); // Replace `userId` dynamically
        console.log('API Response:', response.data);
        setNotifications(Array.isArray(response.data) ? response.data : []);
      } catch (error) {
        console.error('Error fetching notifications:', error);
      }
    };

    fetchNotifications();
  }, []);

  const markAsRead = async (id) => {
    try {
      await axios.post(`/notifications/mark-as-read`, { id });
      setNotifications((prev) =>
        prev.map((notification) =>
          notification._id === id ? { ...notification, status: 'read' } : notification
        )
      );
    } catch (error) {
      console.error('Error marking as read:', error);
    }
  };

  return (
    <div className="p-4 bg-[#059669] shadow rounded-lg w-[60%] mt-10 ml-10">
      <h2 className="text-lg font-semibold mb-4">Notifications</h2>
      {notifications.map((notification) => (
        <div
          key={notification._id}
          className={`p-3 mb-2 rounded-lg ${
            notification.status === 'unread' ? 'bg-gray-100' : 'bg-gray-50'
          }`}
        >
          <p className="text-sm">{notification.content}</p>
          <p className="text-xs text-gray-500">Type: {notification.type}</p>
          <button
            onClick={() => markAsRead(notification._id)}
            className="text-green-500 text-sm underline"
          >
            Mark as Read
          </button>
        </div>
      ))}
    </div>
  );
};

export default NotificationList;
