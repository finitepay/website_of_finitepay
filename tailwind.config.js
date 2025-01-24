/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        autoRun: 'autoRun 10s linear infinite',
        reversePlay: 'reversePlay 10s linear infinite',
      },
      keyframes: {
        autoRun: {
          '0%': { left: '100%' },
          '100%': { left: 'calc(100px * -1)' },
        },
        reversePlay: {
          '0%': { left: 'calc(100px * -1)' },
          '100%': { left: '100%' },
        },
      },
    },
  },
  plugins: [],
};
