import React from 'react'

export default function UserCard({userName, testsNumber}){
    return(
        <div className="flex flex-row bg-lightestGreen rounded-lg gap-4 p-4 w-full dark:bg-red dark:text-lightestRed">
            <div className="flex flex-col border-r-2 border-r-darkGreen pr-4 dark:border-r-lightestRed">
              <div className="flex flex-row items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="Outline"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  className="fill-current"
                >
                  <path d="M12,12A6,6,0,1,0,6,6,6.006,6.006,0,0,0,12,12ZM12,2A4,4,0,1,1,8,6,4,4,0,0,1,12,2Z" />
                  <path d="M12,14a9.01,9.01,0,0,0-9,9,1,1,0,0,0,2,0,7,7,0,0,1,14,0,1,1,0,0,0,2,0A9.01,9.01,0,0,0,12,14Z" />
                </svg>
                <h2 className="text-xl font-bold">{userName}</h2>
              </div>
              <p>Tests taken: {testsNumber}</p>
            </div>

            <div className="flex flex-col justify-between w-full gap-4 items-end">
              {/* Levels */}
              <div className="flex flex-row justify-between w-full">
                <div className="border-l-8 pl-2 border-l-yellowLevelLight">
                  <p className="border-b border-b-darkGreen dark:border-b-lightestRed">Level 1</p>
                  <p>0 out of 7</p>
                </div>
                <div className="border-l-8 pl-2 border-l-yellowLevelLight">
                <p className="border-b border-b-darkGreen dark:border-b-lightestRed">Level 1</p>
                <p>0 out of 7</p>
                </div>
                <div className="border-l-8 pl-2 border-l-yellowLevelLight">
                <p className="border-b border-b-darkGreen dark:border-b-lightestRed">Level 1</p>
                <p>0 out of 7</p>
                </div>
                <div className="border-l-8 pl-2 border-l-yellowLevelLight">
                <p className="border-b border-b-darkGreen dark:border-b-lightestRed">Level 1</p>
                <p>0 out of 7</p>
                </div>
                <div className="border-l-8 pl-2 border-l-yellowLevelLight">
                <p className="border-b border-b-darkGreen dark:border-b-lightestRed">Level 1</p>
                <p>0 out of 7</p>
                </div>
                <div className="border-l-8 pl-2 border-l-yellowLevelLight">
                <p className="border-b border-b-darkGreen dark:border-b-lightestRed">Level 1</p>
                <p>0 out of 7</p>
                </div>                
              </div>

              {/* Go to last level */}
              <a className="p-2 bg-green rounded-lg hover:cursor dark:bg-lightRed">Go to the last level</a>
            </div>
          </div>
    );
}