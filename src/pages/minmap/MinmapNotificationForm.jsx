// // CreateNotificationForm.js
// import { useState } from 'react';

// const CreateNotificationForm = ({ onSubmit }) => {
//   const [userId, setUserId] = useState('');
//   const [content, setContent] = useState('');
//   const [type, setType] = useState('info'); // Example types: 'info', 'warning', 'alert'
//   const [status, setStatus] = useState('unread'); // Default to 'unread'

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newNotification = { userId, content, type, status };
//     onSubmit(newNotification); // Calls the API function with notification data
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-4">
//       <input
//         type="text"
//         value={userId}
//         onChange={(e) => setUserId(e.target.value)}
//         placeholder="User ID"
//         className="p-2 border rounded"
//       />
//       <textarea
//         value={content}
//         onChange={(e) => setContent(e.target.value)}
//         placeholder="Notification Content"
//         className="p-2 border rounded w-full"
//       />
//       <select
//         value={type}
//         onChange={(e) => setType(e.target.value)}
//         className="p-2 border rounded"
//       >
//         <option value="info">Info</option>
//         <option value="warning">Warning</option>
//         <option value="alert">Alert</option>
//       </select>
//       <select
//         value={status}
//         onChange={(e) => setStatus(e.target.value)}
//         className="p-2 border rounded"
//       >
//         <option value="unread">Unread</option>
//         <option value="read">Read</option>
//       </select>
//       <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded">
//         Send Notification
//       </button>
//     </form>
//   );
// };

// export default CreateNotificationForm;
