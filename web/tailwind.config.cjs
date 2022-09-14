/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    fontFamily: {
      sans: ['inter', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        galaxy: "url('/bg-galaxy.png')",
        'red-gradient': 'linear-gradient(89.86deg, #e9484a 32.08%, #b1252a 43.94%, #e55910 50.57%)',
        'galaxy-gradient': 'linear-gradient(90deg, #e9484a 0%, #b1252a 50.52%, #e55910 100%)',
        'game-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%)'
      }
    },
  },
  plugins: [],
}
