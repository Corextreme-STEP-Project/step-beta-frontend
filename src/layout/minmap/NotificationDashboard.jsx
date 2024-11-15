import React, { useEffect, useState } from "react";
import { apiGetNotifications } from "../../services/minmap/minmapnotificationalert"; // Adjust the import based on your file structure

//  const userId = "6728b0ed79b10b1ae8914ea1"

const MergedNotificationDashboard = ({ userId, projects = [] }) => {
  const [notifications, setNotifications] = useState([]);
  const [filteredNotifications, setFilteredNotifications] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [approachingDeadlines, setApproachingDeadlines] = useState([]);

 

  useEffect(() => {
    const fetchNotifications = async () => { 
        console.log("Fetching notifications for userId:", userId);
      try {
        const response = await apiGetNotifications(userId);
        setNotifications(response.data);
        setFilteredNotifications(response.data);
      } catch (error) {
        console.error("Error fetching notifications:", error);
      }
    };
    fetchNotifications();
    checkApproachingDeadlines();
  }, [userId, projects]);

  const checkApproachingDeadlines = () => {
    if (!projects || projects.length === 0) return; // Check if projects is defined and has elements

    const currentDate = new Date();
    const upcomingDeadlines = projects.filter((project) => {
      const deadlineDate = new Date(project.deadline);
      const timeDiff = deadlineDate - currentDate;
      const daysUntilDeadline = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
      return daysUntilDeadline >= 0 && daysUntilDeadline <= 3; // Notify if deadline is within the next 3 days
    });

    if (upcomingDeadlines.length > 0) {
      setApproachingDeadlines(upcomingDeadlines);
    }
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    filterNotifications(term, startDate, endDate);
  };

  const handleDateChange = () => {
    filterNotifications(searchTerm, startDate, endDate);
  };

  const filterNotifications = (term, start, end) => {
    const filtered = notifications.filter((notification) => {
      const notificationDate = new Date(notification.date);
      const isInDateRange =
        (!start || notificationDate >= new Date(start)) &&
        (!end || notificationDate <= new Date(end));
      const matchesSearchTerm = notification.title.toLowerCase().includes(term.toLowerCase());
      return isInDateRange && matchesSearchTerm;
    });
    setFilteredNotifications(filtered);
  };

  return (
 < div className=" bg-img">

    <div className="flex-1 p-6 lg:w-[100%] w-[100%] pt-[10%] pl-[20%] pr-[20%] flex flex-col lg:justify-center items-center relative">
      <h1 className="text-4xl font-bold mb-4">Notification</h1>
      <p className="mb-4">View and manage your notifications effectively.</p>

      {/* Alert for approaching deadlines */}
      {approachingDeadlines.length > 0 && (
        <div className="bg-red-600 border-l-4 border-red-600 text-white p-4 mb-4">
          <strong>Alert:</strong> You have projects with deadlines approaching in the next 3 days!
          <ul>
            {approachingDeadlines.map((project) => (
              <li key={project.id}>
                {project.name} - Deadline: {new Date(project.deadline).toLocaleDateString()}
              </li>
            ))}
          </ul>
          <p className="mt-2">
            <strong>Instructions:</strong> Please review your projects and ensure all necessary tasks are completed before the deadlines.
            Consider contacting team members for any pending approvals or tasks.
          </p>
        </div>
      )}

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search notifications..."
        value={searchTerm}
        onChange={(e) => handleSearch(e.target.value)}
        className="border rounded p-2 w-full mb-4"
      />

      {/* Date Range Filter */}
      <div className="flex mb-4">
        <input
          type="date"
          value={startDate}
          onChange={(e) => {
            setStartDate(e.target.value);
            handleDateChange();
          }}
          className="border rounded p-2 mr-2"
        />
        <input
          type="date"
          value={endDate}
          onChange={(e) => {
            setEndDate(e.target.value);
            handleDateChange();
          }}
          className="border rounded p-2"
        />
      </div>

      {/* Notification List */}
      <div className="mt-4">
        {filteredNotifications.length > 0 ? (
          filteredNotifications.map((notification) => (
            <div key={notification.id} className="border p-4 mb-2 rounded shadow-md">
              <h3 className="text-lg font-bold">{notification.title}</h3>
              <p className="text-gray-600">{notification.message}</p>
              <span className="text-sm text-gray-400">
                {new Date(notification.date).toLocaleString()}
              </span>
            </div>
          ))
        ) : (
          <p>No notifications found.</p>
        )}
      </div>
    </div>
    </div>
  );
};

export default MergedNotificationDashboard;