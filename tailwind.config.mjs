/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      colors: {
        sunyellow: "#FBBE00",
        skyblue: "#2DB6C0",
        hotpink: "#E92E63",
        darkgray: "#333333",
        beige: "#FFF6E5",
        
        lightblue: "#eef6f9",
        green: "#6faf75",
        darkyellow: "#ebc181",
        darkerblue: "#a6c5c9",
        darkblue: "#566181"
      }
    },
  },
  plugins: [],
}
