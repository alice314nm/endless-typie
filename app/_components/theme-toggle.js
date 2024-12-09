'use client';

import React from "react";
import { UseTheme } from "./use-theme";

export default function ThemeToggle() {
  const { isDark, toggleTheme } = UseTheme();

  return (
    <div className="flex items-center gap-2">
      
      <p>light</p>
      <button
       onKeyDown={(e) => e.preventDefault()}
        className="focus:outline-none relative inline-flex items-center cursor-pointer w-11 h-5 rounded-full bg-green dark:bg-red"
        onClick={toggleTheme}
      >
        <span
          className={`dark:bg-lightestRed inline-block w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${
            isDark ? "translate-x-6" : "translate-x-1"
          }`}
        ></span>
      </button>
      <p>dark</p>
    </div>
  );
}
