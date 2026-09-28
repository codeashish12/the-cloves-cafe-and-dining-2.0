/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        espresso: {
          50: '#F5F3F1',
          100: '#E6E0DC',
          200: '#D1C4BC',
          300: '#AB9386',
          400: '#846657',
          500: '#644A3D',
          600: '#4F382E',
          700: '#3D2A22',
          800: '#281B15',
          900: '#1C130E',
          950: '#120B08',
        },
        cream: {
          50: '#FFFFFF',
          100: '#FDFBF7',
          200: '#F8F4EE',
          300: '#EFE6DA',
          400: '#E2D4C1',
          500: '#CFBAA2',
        },
        gold: {
          50: '#FAF7EC',
          100: '#F4ECCF',
          200: '#E9D69D',
          300: '#DEBF6C',
          400: '#D5AA43',
          500: '#C59A30',
          600: '#A37923',
          700: '#7B571B',
          800: '#563C16',
          900: '#3A270F',
        },
        terracotta: {
          500: '#8C5A4C',
          600: '#75473A',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        }
      }
    },
  },
  plugins: [],
};
