import { apiClient } from "../config";
import axios from "axios";


// Add a new notification (if necessary for testing or other frontend actions)
export const apiCreateNotification = async (notificationData) => {
  try{

    return apiClient.post(`/notifications/create`, notificationData);
    
  } catch (error) {
    console.error("Error creating notification:", error);
  }
  
};


// Get notifications by user ID
export const apiGetNotifications = async (userId) => {

  if (!userId) {
    throw new Error("User ID is required to fetch notifications.");
  }
  return apiClient.get(`/notifications/${userId}`);
};


// Mark a notification as read
export const apiMarkNotificationAsRead = async (notificationId) => {
  return apiClient.post(`/notifications/mark-as-read`, { id: notificationId });
};

