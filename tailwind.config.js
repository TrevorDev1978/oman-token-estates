/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}


theme: {
  extend: {
    fontFamily: {
      signature: ['"Great Vibes"', 'cursive'],
    },
  },
}

@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');

.font-signature {
  font-family: 'Great Vibes', cursive;
}
