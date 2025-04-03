/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable class-based dark mode
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Space Mono', 'monospace'],
      },
      colors: {
        primary: '#e01e5a'
      },
      keyframes: {
        'glitch-crackle': {
          '0%': { transform: 'translate(0)', opacity: '1' },
          '20%': { transform: 'translate(-1px, 1px)', opacity: '0.98' },
          '40%': { transform: 'translate(1px, -1px)', opacity: '0.96' },
          '60%': { transform: 'translate(-1px, -1px)', opacity: '0.98' },
          '80%': { transform: 'translate(1px, 1px)', opacity: '0.99' },
          '100%': { transform: 'translate(0)', opacity: '1' },
        }
      },
      animation: {
        'glitch-crackle': 'glitch-crackle 1s linear 1',
      },
    },
  },
  plugins: [],
}
