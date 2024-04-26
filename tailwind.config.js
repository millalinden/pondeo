/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "neon-green": "#CAFF33",
        "graymatter-gray": "#1C1C1C",
        "adventure-white": "#E4E4E7",
        "adventure-whitegray": "rgba(228, 228, 231, 1)",
        "deep-black": "#0D0D0D",
        "error-red": "rgba(255, 107, 107, 1)",
        "success-green": "rgba(76, 175, 80, 1)",
        "information-blue": "rgba(0, 116, 217, 1)",
        "rgba-green-20": "rgba(202, 255, 51, 0.2)",
        "rgba-green-10": "rgba(202, 255, 51, 0.1)",
        "hover-button": "#E5FF99",
        "clicked-button": "#A3CE29",
        blue: "rgba(72, 98, 132, 0.16)",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      fontSize: {
        // HEADING 1
        "custom-heading-1": [
          "3.75rem",
          {
            lineHeight: "4.5rem",
            letterSpacing: "0.02813rem",
            fontWeight: "700",
          },
        ],
        // HEADING 2
        "custom-heading-2": [
          "3rem",
          {
            lineHeight: "4rem",
            letterSpacing: "0.02813rem",
            fontWeight: "400",
          },
        ],
        // HEADING 2 BOLD
        "custom-heading-2-bold": [
          "3rem",
          {
            lineHeight: "4rem",
            letterSpacing: "0.02813rem",
            fontWeight: "700",
          },
        ],
        // HEADING 2 UPPERCASE
        "custom-heading-2-uppercase": [
          "3rem",
          {
            lineHeight: "4rem",
            letterSpacing: "0.00625rem",
            fontWeight: "700",
          },
        ],
        // HEADING 3
        "custom-heading-3": [
          "2.5rem",
          {
            lineHeight: "3rem",
            letterSpacing: "0.02813rem",
            fontWeight: "500",
          },
        ],
        // SUBTITLE 1
        "custom-subtitle-1": [
          "2vw",
          {
            lineHeight: "3vw",
            letterSpacing: "0.025rem",
            fontWeight: "400",
          },
        ],
        // SUBTITLE 2
        "custom-subtitle-2": [
          "1.125rem",
          {
            lineHeight: "1.75rem",
            letterSpacing: "0.025rem",
            fontWeight: "700",
            textTransform: "uppercase",
          },
        ],
        // BODY 1 (SemiBold)
        "custom-body-1-semibold": [
          "3.75rem",
          {
            lineHeight: "4.5rem",
            letterSpacing: "0.02813rem",
            fontWeight: "700",
          },
        ],
        // BODY 1 (Regular)
        "custom-body-1": [
          "1.2vw",
          {
            lineHeight: "1.6vw",
            letterSpacing: "0.02813rem",
            fontWeight: "500",
          },
        ],
        // BODY 2 (SemiBold)
        "custom-body-2-semibold": [
          "1rem",
          {
            lineHeight: "1.5rem",
            letterSpacing: "0.02813rem",
            fontWeight: "600",
          },
        ],
        // BODY 2 (Regular)
        "custom-body-2": [
          "1rem",
          {
            lineHeight: "1.5rem",
            letterSpacing: "0.02813rem",
            fontWeight: "500",
          },
        ],
      },
      boxShadow: {
        "custom-green":
          "-1px 4px 6px 0px rgba(202, 255, 51, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25), 1px 0px 6px 0px #CAFF33",
      },
    },
  },
  plugins: [],
};
