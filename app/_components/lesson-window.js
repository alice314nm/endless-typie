import React from 'react';


export default function LessonWindow({ level, description, status }) {
    
    const statusColors = {
        0: 'bg-redLevelLight dark:bg-redLevelDark', // 0 - incomplete
        1: 'bg-yellowLevelLight dark:bg-yellowLevelDark', // 1 - in progress
        2: 'bg-greenLevelLight dark:bg-greenLevelDark', // 2 - completed
    };
    
    const colorStatus = statusColors[status] || 'bg-[#ff9e9d] dark:bg-[#4C0000]';  
    
    return (
        <div className="transition-all duration-300 cursor-pointer flex items-center rounded justify-center w-96 bg-lightestGreen hover:bg-lightGreen h-auto dark:hover:bg-darkRed dark:bg-red dark:text-lightestRed"> 
            <div className={`w-5 h-20 ${colorStatus}`}></div>
            <div className="flex flex-col w-full px-2">
                <p className="text-left px-2">{level} lesson</p>
                <hr className="ml-2 my-2 border-darkGreen dark:border-lightestRed" />
                <p className="text-right">{description}</p>
            </div>
        </div>
    );
}

