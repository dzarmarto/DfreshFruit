/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#EEF7F1',
          100: '#DCEFE2',
          200: '#B3DEC0',
          300: '#83C99B',
          400: '#4FAE73',
          500: '#2D8C54',
          600: '#1F6E43',
          700: '#185737',
          800: '#13442B',
          900: '#0F3522',
        },
        citrus: {
          50: '#FFF3EA',
          100: '#FFE3CC',
          200: '#FFC899',
          300: '#FFAB66',
          400: '#FF8F40',
          500: '#FF7A30',
          600: '#F2611A',
          700: '#C84C12',
          800: '#9C3A0E',
          900: '#7A2E0B',
        },
        cream: {
          50: '#FFFDFB',
          100: '#FFF8F0',
          200: '#FFF1E2',
        },
        ink: {
          900: '#15201A',
          800: '#1A2421',
          700: '#2B3530',
          500: '#5B6962',
          400: '#8A968F',
        },
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 8px 30px -8px rgba(15, 53, 34, 0.18)',
        'card-hover': '0 20px 45px -12px rgba(15, 53, 34, 0.28)',
        soft: '0 4px 16px -4px rgba(15, 53, 34, 0.10)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        float: 'float 6s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 2.4s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(-1deg)' },
          '50%': { transform: 'translateY(-14px) rotate(1deg)' },
        },
        pulseSoft: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(34,197,94,0.35)' },
          '50%': { boxShadow: '0 0 0 10px rgba(34,197,94,0)' },
        },
      },
    },
  },
  plugins: [],
}
