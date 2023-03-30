/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        doctor_theme: {
          primary: "#3b82f6",
          secondary: "#0891b2",
          accent: "#3A4256",
          neutral: "#352636",
          "base-100": "#FDFBFD",
          info: "#399BD0",
          success: "#208D55",
          warning: "#C17606",
          error: "#EE1B34",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
