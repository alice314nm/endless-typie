/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)", 
        lightestGreen: "#FAFFEC",
        lightGreen: "#E0F3D8",
        green: "#A2B77D",
        darkGreen: "#0F2300",

        lightestRed: "#FFD6D6",
        lightRed: "#761010",
        red: "#4C0000",
        darkRed: "#130000",

        redLevelLight: '#ff9e9d',
        yellowLevelLight: '#fffb99',
        greenLevelLight: '#95fd98',

        
        redLevelDark: '#761010',
        yellowLevelDark: '#b38700',
        greenLevelDark: '#008504',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
