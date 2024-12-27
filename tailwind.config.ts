import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          /* Firefox */
          'scrollbar-width': 'none',
          /* Internet Explorer 10+ */
          '-ms-overflow-style': 'none',
          /* Safari and Chrome */
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
      });
    },
  ],
} satisfies Config;