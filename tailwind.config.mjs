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
        darkyellow: "#f8c291", //"#ebc181"
        darkerblue: "#a6c5c9",
        darkblue: "#566181",
        night: "#1b2631",
        lightpink: "#f9afaf",
        darkviolet: "#4a4e69",

        yellow: "#ffe494ff",

        adobepink: "#F20574",
        adobeyellow: "#FFC000",
        adobelightyellow: "#fef6b3ff",
        adobegreen: "#0BD904",
        adobeblue: "#05C7F2",
        adobedarkblue: "#004766",
        adobelightblue: "#E8FFFF",
        adobeblack: "#262626",
        adobedarkerblack: "#121212",
        adobewhite: "#F2F2F2",

        brand: {
          yellow: '#f6bd60',   // warm & freundlich – primary
          linen: '#f7ede2',    // weicher Hintergrund
          rose: '#f5cac3',     // pastellig – Flächen, Karten
          green: '#84a59d',    // ruhig & professionell – Text, Footer
          coral: '#f28482',    // lebendig – Akzente, Hover
          dark: '#2e2e2e',     // Textfarbe für gute Lesbarkeit
          light: '#ffffff',    // Weiß, als Kontrast

          primary: '#f6bd60',   // Buttons, CTAs
          secondary: '#84a59d', // Text, Footer
          accent: '#f28482',    // Hover, Highlights
          surface: '#f7ede2',   // Hintergrund
          soft: '#f5cac3',      // Karten
          text: '#2e2e2e',
        },
      },
      fontFamily: {
        display: ['"Baloo 2"', 'sans-serif'], // kinderfreundlich, lesbar
        body: ['"Nunito Sans"', 'sans-serif'], // professionell und klar,
        caveat: ['"Caveat Brush"', 'cursive'],
        patrick: ['"Patrick Hand"', 'cursive'],
      },
    },
  },
  plugins: [],
}
