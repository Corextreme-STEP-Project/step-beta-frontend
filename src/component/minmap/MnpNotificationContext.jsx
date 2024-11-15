import React, { createContext, useState, useContext } from 'react';

// Create a Context for Notifications
const NotificationContext = createContext();

// Create a provider component
export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);

  const addNotification = (notification) => {
    setNotifications((prevNotifications) => [...prevNotifications, notification]);
  };

  const markAsRead = (id) => {
    setNotifications((prevNotifications) =>
      prevNotifications.map((notification) =>
        notification.id === id ? { ...notification, status: 'read' } : notification
      )
    );
  };

  return (
    <NotificationContext.Provider value={{ notifications, addNotification, markAsRead }}>
      {children}
    </NotificationContext.Provider>
  );
};

// Create a custom hook to use the notification context
export const useNotifications = () => {
  return useContext(NotificationContext);
};
