module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [
    './pages/**/*.js',
    './components/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        'p-blue': '#6474af',
      },
      borderWidth: {
        default: '1px',
        '1': '1px',
      }
    },
  },
  variants: {},
  plugins: [],
}
