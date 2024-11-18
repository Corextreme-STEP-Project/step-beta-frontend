
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const NotificationList = () => {
//   const [notifications, setNotifications] = useState([]);

//   useEffect(() => {
//     const fetchNotifications = async () => {
//       try {
//         const response = await axios.get('/notifications/:userId'); // Replace `userId` dynamically
//         console.log('API Response:', response.data);
//         setNotifications(Array.isArray(response.data) ? response.data : []);
//       } catch (error) {
//         console.error('Error fetching notifications:', error);
//       }
//     };

//     fetchNotifications();
//   }, []);

//   const markAsRead = async (id) => {
//     try {
//       await axios.post(`/notifications/mark-as-read`, { id });
//       setNotifications((prev) =>
//         prev.map((notification) =>
//           notification._id === id ? { ...notification, status: 'read' } : notification
//         )
//       );
//     } catch (error) {
//       console.error('Error marking as read:', error);
//     }
//   };

//   return (
//     <div className="p-4 bg-[#059669] shadow rounded-lg w-[60%] mt-10 ml-10">
//       <h2 className="text-lg font-semibold mb-4">Notifications</h2>
//       {notifications.map((notification) => (
//         <div
//           key={notification._id}
//           className={`p-3 mb-2 rounded-lg ${
//             notification.status === 'unread' ? 'bg-gray-100' : 'bg-gray-50'
//           }`}
//         >
//           <p className="text-sm">{notification.content}</p>
//           <p className="text-xs text-gray-500">Type: {notification.type}</p>
//           <button
//             onClick={() => markAsRead(notification._id)}
//             className="text-green-500 text-sm underline"
//           >
//             Mark as Read
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default NotificationList;



import React, { useEffect, useState } from 'react';
import axios from 'axios';

const NotificationList = () => {
  const [notifications, setNotifications] = useState([]);

  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotifications = async () => {
      setLoading(true); // Show the loading spinner

      try {
        const response = await axios.get('/notifications/:userId'); // Replace `userId` dynamically
        console.log('API Response:', response.data);
        setNotifications(Array.isArray(response.data) ? response.data : []);
      } catch (error) {
        console.error('Error fetching notifications:', error);
      } finally {
        setLoading(false); // Hide the loading spinner

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

  // Filter notifications based on type, search, and date
  const filteredNotifications = notifications.filter((notification) => {
    const matchesSearch =
      notification.content.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType =
      filterType === 'all' || notification.type === filterType;

    const notificationDate = new Date(notification.date); // Assuming `date` is in ISO format
    const matchesDate =
      (!startDate || notificationDate >= new Date(startDate)) &&
      (!endDate || notificationDate <= new Date(endDate));

    return matchesSearch && matchesType && matchesDate;
  });

  const clearFilters = () => {
    setSearchQuery('');
    setFilterType('all');
    setStartDate('');
    setEndDate('');
  };

  return (
    <div className="p-4 bg-[#059669] shadow rounded-lg w-[60%] mt-10 ml-72 ">
      <h2 className="text-2xl font-semibold mb-4 text-center">Notifications</h2>

      {/* Loading Spinner */}
      {loading && (
        <div className="text-center py-4">
          <div className="loader"></div>
          <p>Loading notifications...</p>
        </div>
      )}

      {!loading && (
        <>
          {/* Search Input */}
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search notifications..."
            className="w-full p-2 mb-4 border rounded"
          />

          {/* Filter by Type */}
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="w-full p-2 mb-4 border rounded"
          >
            <option value="all">All Types</option>
            <option value="alert">Alert</option>
            <option value="reminder">Notification</option>
            <option value="update">Warning</option>
            {/* Add more types based on your notification types */}
          </select>

          {/* Filter by Date Range */}
          <div className="flex gap-4 mb-4">
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="Start Date"
            />
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="End Date"
            />
          </div>

          {/* Clear Filters Button */}
          <button
            onClick={clearFilters}
            className="w-30 p-2 mb-4 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
          >
            Clear Filters
          </button>

          {/* Notification Count */}
          <p className="text-sm text-gray-900 mb-2">
            Showing {filteredNotifications.length} notifications.
          </p>

          {/* Render Filtered Notifications */}
          {filteredNotifications.map((notification) => (
            <div
              key={notification._id}
              className={`p-3 mb-2 rounded-lg ${
                notification.status === 'unread' ? 'bg-gray-100' : 'bg-gray-50'
              }`}
            >
              <p className="text-sm">{notification.content}</p>
              <p className="text-xs text-gray-500">Type: {notification.type}</p>
              <p className="text-xs text-gray-500">
                Date: {new Date(notification.date).toLocaleDateString()}
              </p>
              <button
                onClick={() => markAsRead(notification._id)}
                className="text-green-500 text-sm underline"
              >
                Mark as Read
              </button>
            </div>
          ))}

          {/* Message if no notifications match */}
          {filteredNotifications.length === 0 && (
            <p className="text-sm text-black">No notifications found.</p>
          )}
        </>
      )}

    </div>
  );
};

export default NotificationList;
