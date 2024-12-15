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
  },
  plugins: [],
};
