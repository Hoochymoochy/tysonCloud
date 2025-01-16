import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        lwhite: "#d5d3cc",
        lslate: "#535455",
        lorange: "#ff4e29",
      },
      boxShadow: {
        "soft-white": "0 4px 8px rgba(255, 255, 255, 0.2)", // Adjust opacity for lightness
      },
    },
  },
  plugins: [],
} satisfies Config;
