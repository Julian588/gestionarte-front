/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        small: {
          to: { paddingBlock: ".2rem" },
        },
        logoSmall: {
          to: { width: "5rem", height: "5rem" },
        },
      },
      animation: {
        small: "small linear both",
        logoSmall: "small linear both",
      },
      transitionDuration: {
        default: "300ms",
        fast: "150ms",
        slow: "1000ms",
      },
      textShadow: {
        default: "2px 2px 4px rgba(0, 0, 0, 0.3)",
        md: "3px 3px 6px rgba(0, 0, 0, 0.5)",
        lg: "4px 4px 8px rgba(0, 0, 0, 0.7)",
        none: "none",
      },
    },
    screens: {
      "2xl": { max: "1535px" },
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      md: { max: "767px" },
      sm: { max: "639px" },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".text-shadow": {
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
        },
        ".text-shadow-md": {
          textShadow: "3px 3px 6px rgba(0, 0, 0, 0.5)",
        },
        ".text-shadow-lg": {
          textShadow: "4px 4px 8px rgba(0, 0, 0, 0.7)",
        },
        ".text-shadow-none": {
          textShadow: "none",
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
