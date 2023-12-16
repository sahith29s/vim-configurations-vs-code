import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative inline-block text-left">
            <button
                onClick={toggleDropdown}
                type="button"
                // className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
              className="absolute right-0 top-0 bottom-0 px-4 bg-blue-500  text-white rounded-r-md transition-all duration-300 hover:bg-blue-600 "
                id="options-menu"
                aria-haspopup="true"
                aria-expanded="true"
            >
                Options
            </button>

            {isOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    {/* Dropdown content goes here */}
                    <div className="py-1">
                        <Link
                            to="/chat"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        >
                            Chat App
                        </Link>

                        <Link
                            to="/"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        >
                            Option 2
                        </Link>

                    </div>
                </div>
            )}
        </div>
    );
};

export default Dropdown;