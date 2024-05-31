/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontFamily :{        
        Arka: ["Arka","cursive"], 
        Trojan: ["TrajanRegular","cursive"],
      },
      colors: {
        'ambition-text-color': '#ffe400',
      },
      backgroundImage:{
        // Cepage Section
        'cepage-bg-img':"url(./src/assets/images/page-bg.jpg)",
        'lemerlot-bg':"url(./src/assets/images/le-merlot-bg.jpg)",
        'ugni-blanc-bg':"url(./src/assets/images/ugni-blanc-bg.jpg)",
        'baco-bg':"url(./src/assets/images/baco-bg.jpg)",
        'chardonnay-bg':"url(./src/assets/images/chardonnay-bg.jpg)",
        'cepage-bg-odd':"url(./src/assets/images/cepage-bg-odd-1.jpg)",
        'cepage-cabernet-icons' : "url(./src/assets/images/cepage-cabernet.png)",
        'title-bg' : "url(./src/assets/images/title-bg.png)",
        'caberbet-grapes' : "url(./src/assets/images/carbanet-grapes.png)",
        // Ambition Section
        'ambition-bg-odd':"url(./src/assets/images/ambition-bg-odd.jpg)",
        'ambition-bg-even':"url(./src/assets/images/ambition-bg-even.jpg)",
      },
    },
  },
  plugins: [],
}

