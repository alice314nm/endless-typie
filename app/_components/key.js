import React from 'react';

export default function Key({ dataKey, topLabel, bottomLabel, styleClass }) {

    const keyLightColors = {
    red: 'bg-[#ff9e9d] dark:bg-[#690101]',
    yellow: 'bg-[#fffb99] dark:bg-[#b38700]',
    green: 'bg-[#95fd98] dark:bg-[#00ab05]',
    blue: 'bg-[#90f0e9] dark:bg-[#0283ab]', 
    purple: 'bg-[#f999ff] dark:bg-[#ac02b8]',
    };

  const keyStyles = `
    flex flex-col justify-center items-center p-2 m-1 text-center 
    rounded-md text-xs h-8 w-10
  `;

  const customWidths = {
    8: "w-[97px]", // Backspace
    9: "w-[68px]", // Tab
    220: "w-[68px]", // |
    20: "w-[84px]", // Caps Lock
    13: "w-[98px]", // Enter
    16: "w-[114px]", // Shift
    616: "w-[114px]", // Shift
    17: "w-[55px]", // Control
    32: "w-[268px]", // Space
  };

  const keyBackground = keyLightColors[styleClass] || 'bg-gray-100 dark:bg-[#6e6565]';  

  return (
    <div
      className={`${keyStyles} ${customWidths[dataKey] || ""} ${keyBackground} `}
      data-key={dataKey}
    >
      <center className="dark:text-white">
        <p>{topLabel}</p>
        {bottomLabel && <p>{bottomLabel}</p>}
      </center>
    </div>
  );
}