/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx.mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./*.js"],
  theme: {
    extend: {},
    listStyleType: {
      none: 'none',
      disc: 'disc',
      circle: 'circle',
    },
  },
  plugins: [],
}
