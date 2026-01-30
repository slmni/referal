/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-body)", "sans-serif"]
      },
      colors: {
        ink: "#0a0908",
        ember: "#d7b37b",
        emberBright: "#f1d2a3"
      },
      boxShadow: {
        glow: "0 0 50px rgba(215, 179, 123, 0.18)",
        soft: "0 18px 45px rgba(0, 0, 0, 0.45)"
      },
      backgroundImage: {
        halo: "radial-gradient(circle at 20% 20%, rgba(215,179,123,0.18), transparent 55%)",
        haze: "radial-gradient(circle at 80% 10%, rgba(196,157,104,0.12), transparent 40%)"
      }
    }
  },
  plugins: []
};
