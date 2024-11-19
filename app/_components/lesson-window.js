import React from 'react';


export default function LessonWindow({ level, description, status }) {
    
    const statusColors = {
        0: 'bg-[#ff9e9d] dark:bg-[#4C0000]', // 0 - incomplete
        1: 'bg-[#f5ef67] dark:bg-[#a38015]', // 1 - in progress
        2: 'bg-[#95fd98] dark:bg-[#008504]', // 2 - completed
    };
    
    const colorStatus = statusColors[status] || 'bg-[#ff9e9d] dark:bg-[#4C0000]';  
    
    return (
        <div className="transition-all duration-300 cursor-pointer flex items-center rounded justify-center w-96 bg-[#FAFFEC] hover:bg-[#E0F3D8] h-auto dark:hover:bg-[#130000] dark:bg-[#761010] dark:text-[#FFD6D6]"> 
            <div className={`w-5 h-20 ${colorStatus}`}></div>
            <div className="flex flex-col w-full px-2">
                <p className="text-left px-2">{level} level</p>
                <hr className="ml-2 my-2 border-[#0F2300] dark:border-[#FFD6D6]" />
                <p className="text-right">{description}</p>
            </div>
        </div>
    );
}

