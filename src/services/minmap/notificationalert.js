import { apiClient } from "../config";


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

// Add a new notification (if necessary for testing or other frontend actions)
export const apiAddNotification = async (notificationData) => {
  return apiClient.post(`/notifications/create`, notificationData);
};
