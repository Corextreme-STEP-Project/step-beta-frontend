// Notifications.js
import { useContext } from 'react';
import { NotificationContext } from './NotificationContext';

const MnmapNotifications = () => {
  const { state, dispatch } = useContext(NotificationContext);

  // Function to mark a notification as read
  const handleMarkAsRead = (id) => {
    dispatch({ type: 'MARK_AS_READ', payload: id });
    // Here you could also make an API call to update the status on the server
  };

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-4">Notifications</h2>
      <div className="space-y-4">
        {state.notifications.map((notification) => (
          <div
            key={notification.id}
            onClick={() => handleMarkAsRead(notification.id)}
            className={`p-4 border-b flex items-center justify-between rounded ${
              notification.type === 'info'
                ? 'bg-blue-200'
                : notification.type === 'warning'
                ? 'bg-yellow-200'
                : 'bg-red-200'
            }`}
          >
            <div className="text-sm">
              <p>{notification.content}</p>
              <p
                className={`text-xs ${
                  notification.status === 'unread' ? 'font-bold' : ''
                }`}
              >
                {notification.status.charAt(0).toUpperCase() +
                  notification.status.slice(1)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MnmapNotifications;
