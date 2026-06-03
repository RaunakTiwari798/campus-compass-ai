/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Syne', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        display: ['Syne', 'system-ui', 'sans-serif'],
      },
      colors: {
        void: {
          950: '#02020A',
          900: '#05050F',
          800: '#0A0A1A',
          700: '#0F0F24',
          600: '#14142E',
        },
        plasma: {
          400: '#7C6EFA',
          500: '#6C5CE7',
          600: '#5A4BD6',
        },
        nova: {
          400: '#00D2FF',
          500: '#00B8E6',
          600: '#009ECC',
        },
        ember: {
          400: '#FF6B6B',
          500: '#FF4757',
          600: '#E63950',
        },
        circuit: {
          400: '#00F5A0',
          500: '#00D68F',
          600: '#00B87A',
        },
        stellar: {
          400: '#FFB347',
          500: '#FF9500',
          600: '#E68600',
        }
      },
      backgroundImage: {
        'grid-pattern': 'radial-gradient(circle, rgba(124,110,250,0.15) 1px, transparent 1px)',
        'glow-plasma': 'radial-gradient(circle at 50% 50%, rgba(124,110,250,0.2) 0%, transparent 70%)',
        'glow-nova': 'radial-gradient(circle at 50% 50%, rgba(0,210,255,0.2) 0%, transparent 70%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'slide-up': 'slideUp 0.6s ease-out',
        'fade-in': 'fadeIn 0.8s ease-out',
        'gradient-shift': 'gradientShift 8s ease infinite',
        'orbit': 'orbit 20s linear infinite',
        'twinkle': 'twinkle 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        orbit: {
          from: { transform: 'rotate(0deg) translateX(120px) rotate(0deg)' },
          to: { transform: 'rotate(360deg) translateX(120px) rotate(-360deg)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.2' },
          '50%': { opacity: '1' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
