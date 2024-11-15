import React, { useState } from 'react';

// Sample Settings Component
const SettingsMain = () => {
    // State for user settings (example data)
    const [profile, setProfile] = useState({
        name: 'Samuel Osei',
        email: 'samuel@example.com',
        phone: '0244-324-678',
    });

    const [preferences, setPreferences] = useState({
        darkMode: false,
        notifications: true,
    });

    // Handlers for updating settings
    const handleProfileChange = (e) => {
        const { name, value } = e.target;
        setProfile((prevProfile) => ({
            ...prevProfile,
            [name]: value,
        }));
    };

    const togglePreference = (preference) => {
        setPreferences((prevPreferences) => ({
            ...prevPreferences,
            [preference]: !prevPreferences[preference],
        }));
    };

    return (
        <div className="p-6 bg-white shadow-md rounded-md">
            <h2 className="text-xl font-semibold text-gray-800">Settings</h2>
            <p className="mt-2 text-gray-600">Manage your profile and system preferences.</p>

            {/* Profile Settings */}
            <div className="mt-6">
                <h3 className="text-lg font-medium text-gray-700">Profile Settings</h3>
                <div className="mt-4">
                    <label className="block text-gray-700">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={profile.name}
                        onChange={handleProfileChange}
                        className="w-full p-2 border rounded mt-1 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                </div>
                <div className="mt-4">
                    <label className="block text-gray-700">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={profile.email}
                        onChange={handleProfileChange}
                        className="w-full p-2 border rounded mt-1 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                </div>
                <div className="mt-4">
                    <label className="block text-gray-700">Phone</label>
                    <input
                        type="text"
                        name="phone"
                        value={profile.phone}
                        onChange={handleProfileChange}
                        className="w-full p-2 border rounded mt-1 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                </div>
            </div>

            {/* Preferences */}
            <div className="mt-8">
                <h3 className="text-lg font-medium text-gray-700">System Preferences</h3>
                <div className="flex items-center mt-4">
                    <input
                        type="checkbox"
                        id="darkMode"
                        checked={preferences.darkMode}
                        onChange={() => togglePreference('darkMode')}
                        className="mr-2 focus:ring-emerald-500"
                    />
                    <label htmlFor="darkMode" className="text-gray-700">Enable Dark Mode</label>
                </div>
                <div className="flex items-center mt-4">
                    <input
                        type="checkbox"
                        id="notifications"
                        checked={preferences.notifications}
                        onChange={() => togglePreference('notifications')}
                        className="mr-2 focus:ring-emerald-500"
                    />
                    <label htmlFor="notifications" className="text-gray-700">Enable Notifications</label>
                </div>
            </div>

            {/* Save Button */}
            <div className="mt-6">
                <button className="px-4 py-2 bg-emerald-600 text-white rounded hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500">
                    Save Changes
                </button>
            </div>
        </div>
    );
};

export default SettingsMain;
