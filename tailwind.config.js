module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        'agencyDark': '#121517',
        'agencyGrey': '#1E2125',
        'agencyOutline': '#353B43',
        'agencyBlue': '#4D96DA',
        'agencyLightGrey': '#31313C',
        'agencyBackground': '#121517',
        'agencySearch': '#1E2125',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}