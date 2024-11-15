import React from 'react';

export default function ProgressionBar({ bars, progress }) {
    bars = 7;
    progress = progress || 3;

    const barItems = Array.from({ length: bars }, (_, index) => (
        <li 
            key={index} 
            className={`w-10 h-8 my-[1px] rounded ${index < progress ? 'bg-gray-300' : 'bg-blue-300'}`}
        ></li>
    ));

    return (
        <div className="flex items-center justify-center">
            <ul className="flex flex-col">
                {barItems}
            </ul>
        </div>
    );
}
