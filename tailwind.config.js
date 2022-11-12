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
          primary: "#0FCFEC",
          secondary: "#19D3AE",
          accent: "#3A4256",
          neutral: "#352636",
          "base-100": "#FDFBFD",
          info: "#399BD0",
          success: "#208D55",
          warning: "#F98A1A",
          error: "#a5f3fc",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
