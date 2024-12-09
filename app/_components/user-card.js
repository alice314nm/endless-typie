'use client';

import React, { useEffect, useState } from 'react';
import { useUserAuth } from '../_utils/auth-context';
import { dbGetUserLessonsLevelsById } from '../_services/user_stats_services';

export default function UserCard({ userName, testsNumber }) {
  const { user } = useUserAuth();

  const [lessonsData, setLessonsData] = useState([]);

  useEffect(() => {
    if (user) {
      dbGetUserLessonsLevelsById(user.uid, setLessonsData);
    }
  }, [user]);

  return (
    <div className="flex flex-col bg-lightestGreen rounded-lg gap-4 p-4 w-full dark:bg-red dark:text-lightestRed">
      <div className="flex flex-row pb-2 items-center justify-between gap-2 border-b border-r-darkGreen dark:border-b-lightestRed">
        <div className="flex flex-row items-center justify-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="24" height="24" className="fill-current">
            <path d="M12,12A6,6,0,1,0,6,6,6.006,6.006,0,0,0,12,12ZM12,2A4,4,0,1,1,8,6,4,4,0,0,1,12,2Z" />
            <path d="M12,14a9.01,9.01,0,0,0-9,9,1,1,0,0,0,2,0,7,7,0,0,1,14,0,1,1,0,0,0,2,0A9.01,9.01,0,0,0,12,14Z" />
          </svg>
          <h2 className="text-xl font-bold">{userName} |</h2>
          <p>Tests taken: {testsNumber}</p>
        </div>
        
        <button onClick={() => firebaseSignOut()} className='bg-green border-2 px-1 border-green rounded-lg dark:bg-lightRed hover:bg-lightestGreen dark:hover:bg-red dark:border-lightRed'>Sign out</button>
      </div>

      <div className="flex flex-col justify-between w-full gap-4 items-end">
        {/* Lessons Data */}
        <div className="flex flex-row justify-between w-full">
          {lessonsData.map((lesson, index) => (
            <div key={index} className="border-l-8 pl-2 border-l-yellowLevelLight">
              <p className="border-b border-b-darkGreen dark:border-b-lightestRed">Lesson {index+1}</p>
              <p>{lesson.completedLevels} out of {lesson.totalLevels}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
