import React from 'react';

export default function CardRecord({title, valueAverageType, valueHighestType, valueAverageAccuracy, valueHighestAccuracy}){
    return(
        <div className="flex flex-col bg-[#FAFFEC] w-[50%] rounded-lg gap-2 p-4 dark:bg-[#4C0000] dark:text-[#FFD6D6]">
            {/* Average */}
            <div className="w-full border-b-2 border-b-[#0F2300] dark:border-b-[#FFD6D6]">
                <h2 className="text-lg">{title}</h2>
            </div>

            <div className="flex flex-row gap-10">
              <div className="flex flex-col gap-2">
                <div className="flex flex-row gap-2">
                <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                    d="M4 14C4 12.9494 4.20693 11.9091 4.60896 10.9385C5.011 9.96793 5.60028 9.08601 6.34315 8.34314C7.08602 7.60028 7.96793 7.011 8.93853 6.60896C9.90914 6.20693 10.9494 6 12 6C13.0506 6 14.0909 6.20693 15.0615 6.60897C16.0321 7.011 16.914 7.60028 17.6569 8.34315C18.3997 9.08602 18.989 9.96793 19.391 10.9385C19.7931 11.9091 20 12.9494 20 14"
                    className="stroke-[#33363F] dark:stroke-[#FFD6D6]"
                    strokeWidth="2"
                    strokeLinejoin="round"
                />
                <path
                    d="M10 15C10 14.7374 10.0517 14.4773 10.1522 14.2346C10.2528 13.992 10.4001 13.7715 10.5858 13.5858C10.7715 13.4001 10.992 13.2528 11.2346 13.1522C11.4773 13.0517 11.7374 13 12 13C12.2626 13 12.5227 13.0517 12.7654 13.1522C13.008 13.2528 13.2285 13.4001 13.4142 13.5858C13.5999 13.7715 13.7473 13.992 13.8478 14.2346C13.9483 14.4773 14 14.7374 14 15"
                    className="stroke-[#33363F] dark:stroke-[#FFD6D6]"
                    strokeWidth="2"
                    strokeLinejoin="round"
                />
                <path
                    d="M13 13L15 10"
                    className="stroke-[#33363F] dark:stroke-[#FFD6D6]"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M20 14V15C20 15.5523 19.5523 16 19 16H5C4.44772 16 4 15.5523 4 15V14"
                    className="stroke-[#33363F] dark:stroke-[#FFD6D6]"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                </svg>
                  
                  <div>
                    <h2 className="text-lg">Average type speed:</h2>
                    <h2 className="text-lg text-center">{valueAverageType}wpm</h2>  
                  </div>
                </div>

                <div className="flex flex-row gap-2">
                <svg
                width="30"
                height="30"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                    d="M29.81,4.42a1,1,0,0,0-1.26-.31l-1.31.65.65-1.31a1,1,0,0,0-1.6-1.16l-4,4A1,1,0,0,0,22,7V8.59l-6.71,6.7a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L23.41,10H25a1,1,0,0,0,.71-.29l4-4A1,1,0,0,0,29.81,4.42Z"
                    className="fill-[#33363F] dark:fill-[#FFD6D6]"
                    strokeWidth="1"
                />
                <path
                    d="M13.09,15.29a2.38,2.38,0,0,1,.15-.45.08.08,0,0,1,0-.05,2.83,2.83,0,0,1,.62-.91l2.81-2.81A5.2,5.2,0,0,0,16,11a5,5,0,1,0,5,5,5.2,5.2,0,0,0-.07-.69l-2.81,2.81a2.9,2.9,0,0,1-.9.62l-.06,0a2.38,2.38,0,0,1-.45.15l-.11,0a3,3,0,0,1-1.2,0l-.11,0a2.38,2.38,0,0,1-.45-.15l-.05,0a3,3,0,0,1-1.53-1.53.08.08,0,0,1,0-.05,2.38,2.38,0,0,1-.15-.45l0-.11a3,3,0,0,1,0-1.2Z"
                    className="fill-[#33363F] dark:fill-[#FFD6D6]"
                    strokeWidth="1"
                />
                <path
                    d="M19.87,7.89A8.8,8.8,0,0,0,16,7a9,9,0,1,0,9,9,8.8,8.8,0,0,0-.89-3.87l-1.52,1.53a7,7,0,1,1-4.25-4.25Z"
                    className="fill-[#33363F] dark:fill-[#FFD6D6]"
                    strokeWidth="1"
                />
                <path
                    d="M27.12,11.12a3,3,0,0,1-1,.65A10.83,10.83,0,0,1,27,16,11,11,0,1,1,16,5a10.83,10.83,0,0,1,4.23.85,3,3,0,0,1,.65-1l.63-.64A12.86,12.86,0,0,0,16,3,13,13,0,1,0,29,16a12.86,12.86,0,0,0-1.24-5.51Z"
                    className="fill-[#33363F] dark:fill-[#FFD6D6]"
                    strokeWidth="1"
                />
                </svg>
                  <div>
                    <h2 className="text-lg">Average accuracy:</h2>
                    <h2 className="text-lg text-center">{valueAverageAccuracy}%</h2>  
                  </div>
                </div>
              </div>

              {/* Record */}
              <div className="flex flex-col gap-2">
                <div className="flex flex-row gap-2">
                                    
                  <div>
                    <h2 className="text-lg">Highest type speed:</h2>
                    <h2 className="text-lg text-center">{valueHighestType}wpm</h2>  
                  </div>
                </div>

                <div className="flex flex-row gap-2">
                  <div>
                    <h2 className="text-lg">Highest accuracy:</h2>
                    <h2 className="text-lg text-center">{valueHighestAccuracy}%</h2>  
                  </div>
                </div>
              </div>
            </div>
          </div>
    );
}