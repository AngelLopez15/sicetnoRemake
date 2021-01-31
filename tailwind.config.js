module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'naranjaSicetno': '#F35920',
        'verdeSicetno': '#AFD532',
        'moradoSicetno': '#5B1048'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
