// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FaSearch } from 'react-icons/fa';

const Header = () => (
    <div className="flex justify-between items-center mb-4">
        <div>
            <h1 className="text-2xl font-semibold">Welcome, Mireille</h1>
            <p className="text-gray-600">Track and manage tickets for all your subscribers with one click.</p>
        </div>
        <div className="flex space-x-2">
            <div className="relative">
                <input
                    type="text"
                    placeholder="Search..."
                    className="pl-10 pr-4 py-2 mr-12 border border-gray-300 rounded-full focus:outline-none"
                />
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>
            <button className="bg-green-500 text-white px-4 py-2 rounded">+ Add project</button>
        </div>
    </div>
);

export default Header; 