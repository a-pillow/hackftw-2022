module.exports = {
  content: [
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero": "url('/src/assets/valley.png')",
      },
      animation: {
        top: "toTop 3s ease-in-out infinite, in 3s ease-in-out",
      },
      keyframes: {
        toTop: {
          "0%": { transform: 'translateY(0px)'},
          "25%": { transform: 'translateY(20px)'},
          "50%": { transform: 'translateY(0px)'},
          "75%": { transform: 'translateY(20px)'},
          "100%": { transform: 'translateY(0px)'},
        },
        in: {
          "0%": {opacity:0},
          "25%": { opacity: 100},
        }
      }
    },
  },
  plugins: [],
}
