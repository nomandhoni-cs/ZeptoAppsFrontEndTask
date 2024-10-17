/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#E4E7D4",
        secondary: "#DD845A",
        success: "#28a745",
        headingText: "#554333",
        warning: "#ffc107",
        iconBg: "#FFF4D6",
      },
    },
  },
  plugins: [],
};
