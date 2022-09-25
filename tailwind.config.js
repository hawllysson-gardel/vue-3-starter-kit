/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  prefix: 'tw-',
  content: ['./src/**/*.vue'],
  theme: {
    extend: {
      colors: {
        primary: colors.violet,
        accent: colors.fuchsia,
        success: colors.green,
        info: colors.blue,
        warning: colors.amber,
        danger: colors.red,
        default: colors.slate,
      },
      fontFamily: {
        sans: ['Nunito', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
