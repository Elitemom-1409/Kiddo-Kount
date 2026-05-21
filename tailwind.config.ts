import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cosmic: {
          indigo: '#1a1147',
          deep: '#0d0a2e',
          blue: '#1e3a5f',
        },
        nebula: {
          violet: '#5b2c9e',
          purple: '#3d1a7e',
        },
        candy: {
          cherry: '#ff4d6d',
          sunshine: '#ffd60a',
          leaf: '#06d6a0',
          cyan: '#4cc9f0',
          bubblegum: '#ff70a6',
          pink: '#e040a0',
        },
        cloud: {
          white: '#fefae0',
          cream: '#fff8e7',
        },
        ralph: {
          skin: '#ffd9b8',
          overalls: '#e63946',
          shirt: '#4cc9f0',
          hair: '#f5d76e',
          eyes: '#4a90d9',
        },
      },
      fontFamily: {
        display: ['"Fredoka"', 'sans-serif'],
        body: ['"Nunito"', 'sans-serif'],
        numerals: ['"Baloo 2"', 'sans-serif'],
      },
      borderRadius: {
        'glass': '1.5rem',
        'pill': '100px',
      },
      boxShadow: {
        'glass': '0 8px 32px rgba(31, 38, 135, 0.2)',
        'glass-hover': '0 12px 48px rgba(31, 38, 135, 0.3)',
        'glow-cherry': '0 0 30px rgba(255, 77, 109, 0.4)',
        'glow-cyan': '0 0 30px rgba(76, 201, 240, 0.4)',
        'glow-sunshine': '0 0 30px rgba(255, 214, 10, 0.4)',
        'glow-leaf': '0 0 30px rgba(6, 214, 160, 0.4)',
        'glow-bubblegum': '0 0 30px rgba(255, 112, 166, 0.4)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-fast': 'float 4s ease-in-out infinite',
        'twinkle': 'twinkle 3s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
        'bounce-gentle': 'bounceGentle 2s ease-in-out infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.6s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
        'rainbow': 'rainbow 4s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(0.8)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(76, 201, 240, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(76, 201, 240, 0.6)' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.8)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        rainbow: {
          '0%': { filter: 'hue-rotate(0deg)' },
          '100%': { filter: 'hue-rotate(360deg)' },
        },
      },
      backgroundSize: {
        'shimmer': '200% 100%',
      },
    },
  },
  plugins: [],
};
export default config;
