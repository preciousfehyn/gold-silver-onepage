export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ['"Playfair Display"', "serif"],
      },
      boxShadow: {
        glow: "0 0 28px rgba(245, 158, 11, 0.30)",
      },
      letterSpacing: {
        luxury: "0.08em",
      },
    },
  },
  plugins: [],
};
