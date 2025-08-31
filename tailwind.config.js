/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'arabic': ['Cairo', 'sans-serif'],
      },
      textAlign: {
        'inherit': 'inherit',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '[dir="rtl"] .rtl-text-right': {
          'text-align': 'right !important',
        },
        '[dir="rtl"] .rtl-text-left': {
          'text-align': 'left !important',
        },
        '[dir="rtl"] .rtl-text-center': {
          'text-align': 'center !important',
        },
      }
      addUtilities(newUtilities)
    }
  ],
};
