/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'main-color': '#222E50',
        'blue-color': '#00c8ff',
        'black-color': '#000000',
        'purple-color': '#800080',
        'gray-color': '#808080',
        'white-color': '#ffffff'
      },
      textColor: {
        'main-color': '#222E50',
        'yellow-color': '#fbc846',
      },
    },
  },
  plugins: [],
};
