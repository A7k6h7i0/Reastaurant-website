
import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#1B4332',
          dark: '#081C15',
          light: '#2D6A4F',
        },
        olive: {
          DEFAULT: '#52796F',
          light: '#74A892',
        },
        sand: {
          DEFAULT: '#E8DCC4',
          light: '#F5F1E8',
        },
        coconut: {
          DEFAULT: '#6B4423',
          light: '#8B5A3C',
        },
        gold: {
          DEFAULT: '#D4AF37',
          light: '#E5C158',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      lineHeight: {
        relaxed: '1.8',
      },
    },
  },
  plugins: [],
} satisfies Config;
