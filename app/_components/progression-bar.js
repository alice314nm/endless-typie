import React from 'react';

export default function ProgressionBar({ bars, progress }) {
    bars = 7;
    progress = progress || 3;

    const barItems = Array.from({ length: bars }, (_, index) => (
        <li 
            key={index} 
            className={`w-10 h-10 border-2 rounded-3xl border-green dark:border-lightestRed ${index < progress ? 'bg-lightestGreen dark:bg-lightestRed' : 'bg-green dark:bg-red'}`}
        ></li>
    ));

    return (
        <div className="flex items-center justify-center">
            <ul className="flex flex-col gap-4">
                {barItems}
            </ul>
        </div>
    );
}
