/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-bg': '#ffedd5',
        'secondary-bg': '#374151',
        'primary-btn': "#0d1117",
        'secondary-text': "#21262d",
        'primary-text': "#f97520",
        'primary-hover-text': "#fdba74",
        'secondary-btn': "#0d1117",
        'sidebar-bg': "#fdba74"
      },
      boxShadow: {
        'custom_Shadow': ' 0px 23px 21px -8px rgba(136, 160, 255, 0.25)'
      }

    },
  },
  plugins: [],
}

