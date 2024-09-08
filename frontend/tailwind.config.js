/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // accent: '#4f46e5', 
        accent: 'rgb(63 135 228)', 
        base: 'rgb(0, 0, 0)',
      },
    },
    screens:{
      sm:'300px',
      md:'768px',
      lg:'960px',
      xl:'1200px',
    }
  },
  plugins: [],
}

