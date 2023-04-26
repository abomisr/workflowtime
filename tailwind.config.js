/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor:{
        "first-light":"#F0F0F0",
        "second-light":"#FFFFFF",
        "first-dark":"#150125",
        "second-dark":"#350460"
      },
      
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
    },
    
  },
  variants: {
    extend: {
      backgroundColor: ['dark'],
      borderColor: ['dark'],
    },
  },
  plugins: [],
}
