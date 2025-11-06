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
          tannengruen: '#26392f', // dunkel, natürlich


          primary: '#F9C74F',   // Buttons, CTAs #f6bd60 oder #66AB8C oder #2a9d8f oder #f07167 oder #F9C74F
          secondary: '#26392f',  //<<< '#4a4e69', >>> // Text, Footer #84a59d oder #6EC4DB oder #457B9D oder #0081A7 oder #FED9B7 oder #92ABD1
          accent: '#b71818',    // Hover, Highlights #f28482 oder #FA7C92 oder #f1c40F oder #ff6f61 oder #f9afaf
          surface: '#f6f6f6',   // Hintergrund #f6f3f0 oder #f7ede2 oder #f1faee (!) oder #fdf4f4ff
          hoverSurface: '#e0e0e0', // Hover Oberfläche #e0e0e0 oder #ece2db oder #a8dadc oder rgb(238, 238, 239)
          soft: '#66AB8C', // <<<'#a8dadc',>>>      // Karten #f5cac3 oder #f7ede2 oder #a8dadc oder #00AFB9 oder #f7cac9
          text: '#1b2631', // #2e2e2e oder 
        },
      },
      // tailwind.config.js
      fontFamily: {
        display: ['"Baloo 2"', 'Quicksand', 'Verdana', 'Rounded', // macOS
          'ui-rounded', // iOS
          'system-ui', 'sans-serif'],
        body: ['"Nunito Sans"',
          'Inter', // moderne Sans-Serif Backup
          '-apple-system',       // iOS/macOS
          'BlinkMacSystemFont',  // macOS
          'Segoe UI',            // Windows
          'Roboto',              // Android
          'system-ui',
          'sans-serif'
          ],
        patrick: [
          '"Patrick Hand"',
          'Comic Sans MS',       // handschriftlich, überall verfügbar
          'Bradley Hand',        // macOS handschriftlich
          'Brush Script MT',     // Windows handschriftlich
          'cursive',
          'sans-serif'           // letzter Fallback
          ],
      },

      // fontFamily: {
      //   display: ['"Baloo 2"', 'sans-serif'], // kinderfreundlich, lesbar
      //   body: ['"Nunito Sans"', 'sans-serif'], // professionell und klar,
      //   // caveat: ['"Caveat Brush"', 'cursive'],
      //   patrick: ['"Patrick Hand"', 'cursive'],
      // },
    },
  },
  plugins: [],
}
