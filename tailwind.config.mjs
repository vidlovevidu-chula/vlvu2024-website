/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      screens: {
        mobile: "480px",
      },
      boxShadow: {
        shadow1: "0px -10px 0 0  #FBAEB4;",
      },
      colors: {
        "web-bg": "#FBAEB4",
        pink: "#FF6B84",
        text: "#EA3957",
        "card-orange": "#FFF5EF",
        สีที่นีรชอบ: "#F7A07C",
        "blue-pink": "#BEBEF0",
      },
      fontFamily: {
        line: ["LINE", "sans-serif"],
        gently: ["GentlyDemo", "sans-serif"],
        tomyam: ["Tomyam", "sans-serif"],
      },
    },
  },
  plugins: [],
};
