import { withTV } from "tailwind-variants/dist/transformer.js";
import type { Config } from "tailwindcss";

const config: Config = withTV({
  content: ["./src/**/*.tsx"],
  darkMode: "class",
  theme: {
    extend: {
      gridTemplateColumns: {
        app: "minmax(18rem, 20rem) 1fr",
        form: "minmax(7.5rem, 17.5rem) minmax(25rem, 1fr) minmax(0, 15rem)",
      },

      maxWidth: {
        app: "700px",
      },

      borderWidth: {
        6: "6px",
      },

      colors: {
        primary: "#8257E6",
      },

      keyframes: {
        slideDownAndFade: {
          from: { opacity: "0", transform: "translateY(-2px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },

      animation: {
        slideDownAndFade:
          "slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.6, 1)",
      },
    },
  },
  plugins: [],
});

export default config;
