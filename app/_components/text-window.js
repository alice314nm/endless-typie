import React from 'react';

export default function TextWindow({ textToRead, pastText,  letterToType, futureText, correctLetter}) {
    
    // let pastText = text.slice(0,10);
    // let letterToType = text[10];
    // let futureText = text.slice(11,text.length);
    
    // decoration-rose-400 - incorrect 
    // decoration-green-400 - correct

    return (
        <div className="flex items-center justify-center">
            <div className="w-[740px] p-4 rounded-md">
                {textToRead &&
                    <span className="text-sm leading-relaxed tracking-[5px] dark:text-lightestRed">
                    {textToRead}
                    </span>
                }
                <span className="text-sm leading-relaxed tracking-[5px] text-[#9db0a3] dark:text-[#856767]">
                    {pastText}
                </span>
                <span className={`underline decoration-green-400 decoration-4 text-sm leading-relaxed tracking-[5px] dark:text-lightestRed ${correctLetter? "" : "decoration-rose-400" }`}>
                    {letterToType}
                </span>
                <span className="text-sm leading-relaxed tracking-[5px] dark:text-lightestRed">
                    {futureText}
                </span>
            </div>
        </div>
    );
}
