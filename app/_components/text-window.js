import React from 'react';

export default function TextWindow({ text }) {
    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    
    let pastText = text.slice(0,10);
    let letterToType = text[10];
    let futureText = text.slice(11,text.length);

    return (
        <div className="flex items-center justify-center">
            <div className="w-[740px] p-4 rounded-md">
                <span className="text-sm leading-relaxed tracking-[5px] dark:text-[#856767]">
                    {pastText}
                </span>
                <span className="underline decoration-[#FFD6D6] decoration-4 text-sm leading-relaxed tracking-[5px] dark:text-[#FFD6D6]">
                    {letterToType}
                </span>
                <span className="text-sm leading-relaxed tracking-[5px] dark:text-[#FFD6D6]">
                    {futureText}
                </span>
            </div>
        </div>
    );
}
