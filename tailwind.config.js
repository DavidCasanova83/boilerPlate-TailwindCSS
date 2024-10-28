/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'customBackground': '#FAFAFA',
        'customBackgroundSecondary': '#FFFFFF',
        'customPrimary': '#18181B',
      },
  },
  },
  plugins: [],
}

