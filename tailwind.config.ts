import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FAF6EE',
        sage: {
          DEFAULT: '#7A9B76',
          dark: '#5D7A5A',
        },
        terracotta: '#D88C6A',
        ink: '#2C2A26',
        bark: '#6B5235',
      },
      fontFamily: {
        heading: ['var(--font-fraunces)', 'serif'],
        body: ['var(--font-nunito)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
