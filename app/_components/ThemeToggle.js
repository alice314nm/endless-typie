'use client';

import React from "react";
import { useTheme } from "./useTheme";

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="flex items-center gap-2">
      
      <p>light</p>
      <button
        className="relative inline-flex items-center cursor-pointer w-11 h-5 rounded-full bg-[#A2B77D] dark:bg-[#4C0000]"
        onClick={toggleTheme}
      >
        <span
          className={`dark:bg-[#FFD6D6] inline-block w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${
            isDark ? "translate-x-6" : "translate-x-1"
          }`}
        ></span>
      </button>
      <p>dark</p>
    </div>
  );
}
