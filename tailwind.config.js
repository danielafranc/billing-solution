/** @type {import('tailwindcss').Config} */
export default {
  daisyui: {
    themes: [
      {
        mytheme: {
        
        "primary": "#427cac",
                
        "secondary": "#91C8F6",
                
        "accent": "#ffffff",
                
        "stroke": "#ECECEC",
                
        "base-100": "#ffffff",
        
        "input": "#F8FAFC",

        "info": "#ffffff",
                
        "success": "#91C8F6",
                
        "warning": "#ffffff",
                
        "error": "#C14646",
                },
      },
    ],
  },
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Jakarta:  ['JakPlus Jakarta Sansarta', 'sans-serif']
      }
    },
  },
  plugins: [require("daisyui")],
}