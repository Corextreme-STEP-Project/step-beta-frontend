import React from 'react'


const Notifications = () => {

    // Sample notification data 
    const notifications = [
        {
            id: 1,
            message: 'Project X requires additional documentation by next week.',
            date: '2024-11-10'
        },
        {
            id: 2,
            message: 'Contractor Y has submitted a proposal for Project Z.',
            date: '2024-11-08'
        },
    ];

    return (
        <div className="p-8 bg-white shadow-lg rounded-lg mt-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Notifications</h2>
            <p className="text-gray-600 mb-6">
                Stay updated with the latest notifications regarding your projects and contracts.
            </p>
            <ul className="space-y-4">
                {notifications.map((notification) => (
                    <li key={notification.id} className="p-4 bg-gray-50 rounded-lg shadow flex justify-between items-start">
                        <div>
                            <p className="text-gray-700 font-medium">{notification.message}</p>
                        </div>
                        <span className="text-sm text-gray-500">{notification.date}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Notifications