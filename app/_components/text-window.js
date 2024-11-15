import React from 'react';

export default function TextWindow({ text }) {
    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    
    return (
        <div className="flex items-center justify-center">
            <div className="w-[700px] p-4 bg-gray-100 rounded-md">
                <p className="text-sm leading-relaxed tracking-wider">
                    {text}
                </p>
            </div>
        </div>
    );
}
