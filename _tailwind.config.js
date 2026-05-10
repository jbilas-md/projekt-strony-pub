/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'nova-blue': '#0070f3', // upewnij się, że masz tu swoje kolory
        'nova-dark': '#1a1a1a',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}