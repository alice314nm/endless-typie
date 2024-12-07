'use client';

import Link from "next/link";
import React, { useEffect } from "react";
import ThemeToggle from "./theme-toggle";
import { useUserAuth } from "../_utils/auth-context";

export default function Header() {

  const { user }  = useUserAuth();

  useEffect(() => {

    // if(user){
    //     dbGetItemsByUser(user.uid, setItemList)
    // }

    }, [user]
  )

  const liStyle = "cursor-pointer hover:text-green dark:hover:text-red"
  
  return (
    <header className="w-screen border-b border-[#0F2300] bg-[#E0F3D8] py-4 mb-5 dark:bg-[#130000] dark:border-[#761010] dark:text-[#FFD6D6]">
      <ul className="flex items-center justify-between mx-auto max-w-6xl px-4">
        {/* App Logo */}
        <div className="flex flex-row gap-16 flex-shrink-0">
          <div>
            <Link href="/">
                <p>Endless Typie</p>
            </Link>
          </div>
          <div className="flex gap-10">
                <Link href="/lessons/">
                    <li className={liStyle}>lessons</li>
                </Link>
                <p>|</p>
                <Link href="/">
                    <li className={liStyle}>practice</li>
                </Link>
                <p>|</p>
                <Link href="/analytics/">
                    <li className={liStyle}>analytics</li>
                </Link>
            </div>
        </div>

        {/* Right Section */}
        <div className="flex gap-4">
        <Link href="/login">
            <div className="flex gap-2">
                
                <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="20" height="20" className="fill-current dark:text-[#FFD6D6]">
                    <path d="M12,12A6,6,0,1,0,6,6,6.006,6.006,0,0,0,12,12ZM12,2A4,4,0,1,1,8,6,4,4,0,0,1,12,2Z"/>
                    <path d="M12,14a9.01,9.01,0,0,0-9,9,1,1,0,0,0,2,0,7,7,0,0,1,14,0,1,1,0,0,0,2,0A9.01,9.01,0,0,0,12,14Z"/>
                </svg>

                {
                  user ? (
                    <li className={liStyle}>{user.displayName || user.email}</li>  
                  ) : (
                    <li className={liStyle} href="./signin">sign in</li>
                  )
                }
            </div>
          </Link>
          <p>|</p>
          <ThemeToggle/>
        </div>
      </ul>
    </header>
  );
}
