import React from 'react';

// status:
// 0 - incomplete
// 1 - in progress
// 2 - completed

export default function LessonWindow({ level, description, status }) {
    return (
        <div className="flex items-center justify-center w-96">
            <div className="w-3 h-16 bg-gray-300 flex-grow"></div> {/* Added flex-grow */}
            <div className="flex flex-col w-full border-b">
                <p className="text-left px-2">{level} level</p>
                <hr className="ml-2 my-2" />
                <p className="text-right">{description}</p>
            </div>
        </div>
    );
}
