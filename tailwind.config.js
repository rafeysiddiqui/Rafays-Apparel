/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'midnight-purple': '#4C1D95',
      },
      animation: {
        'slideDown': 'slideDown 0.5s ease-out',
        'bounce-slow': 'bounce 3s infinite',
        'fade-in-up': 'fadeInUp 0.5s ease-out forwards',
        'scale-dropdown': 'scaleIn 0.3s ease-out',
        'spin': 'spin 1.5s linear infinite',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      },
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-100%)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 }
        },
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        },
        scaleIn: {
          '0%': { opacity: 0, transform: 'scaleY(0.95)' },
          '100%': { opacity: 1, transform: 'scaleY(1)' },
        },
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        }
      }
    },
  },
  plugins: [],
}
