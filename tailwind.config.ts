import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      blue: {
        100: "#dbeafe",
        600: "#1d4ed8",
      },
      yellow: {
        100: "#fef3c7",
        600: "#facc15",
      },
      red: {
        100: "#fee2e2",
        600: "#dc2626",
      },
      green: {
        100: "#d1fae5",
        600: "#10b981",
      },
    },
  },
  plugins: [],
};
export default config;
