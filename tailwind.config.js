/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light: "var(--light)",
        black: "var(--black)",
        primary: "var(--primary)",
        shadow: "var(--shadow)",
        "secondary-light": "var(--secondary-light)",
        "secondary-primary": "var(--secondary-primary)",
        gray: "var(--gray)",
      },
      fontFamily: {
        title: ["Amatic SC", "sans-serif"],
        subTitle: ["Raleway", "sans-serif"],
        text: ["Inter", "sans-serif"],
      },
    },
    screens: {
      Phonel: { max: "425px" },

      Tablets: { max: "576px" },

      Tablet: { max: "900px" },

      Laptop: { max: "1024px" },

      Desktop: { max: "1220px" },
    },
  },
  plugins: [],
};
