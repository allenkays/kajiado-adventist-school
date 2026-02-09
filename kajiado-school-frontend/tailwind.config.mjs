/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FFF7E6",
        brown: "#7B4B2A",
        darkBrown: "#5A341F",
        lightBrown: "#A67C52",
      },
      animation: {
        kenburns: "kenburns 20s ease-in-out infinite",
        "fade-slide": "fadeSlide 0.8s ease-out forwards",
      },
      keyframes: {
        kenburns: {
          "0%": { transform: "scale(1) translateY(0)" },
          "100%": { transform: "scale(1.1) translateY(-10px)" },
        },
        fadeSlide: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },

    },
  },
  plugins: [],
};

export default config;
