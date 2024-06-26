import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-login': `linear-gradient(rgba(42, 40, 121, 0.9), rgba(77, 74, 223, 0.7))`,
        sidebar:
          'radial-gradient(circle 220px at left top, rgba(37, 93, 106, 0.2) 50%, transparent),radial-gradient(circle 220px at right top, rgba(42, 40, 121, 0.4) 50%, transparent),radial-gradient(circle 295px at center right, rgba(42, 40, 121, 0.2) 20%, transparent),radial-gradient(circle 295px at bottom left, rgba(37, 93, 106, 0.2) 20%, transparent)',
        'gradient-vertical':
          'linear-gradient(180deg, #7FD1CC 0%, #9694F5 100%)',
        'gradient-horizontal':
          'linear-gradient(90deg, #7FD1CC 0%, #9694F5 100%)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'nunito-sans': ['Nunito Sans', 'sans-serif'],
      },
      borderRadius: {
        xs: '2.5px',
        sm: '5px',
        md: '10px',
        lg: '20px',
        full: '99999px',
      },
      gridTemplateColumns: {
        app: '15rem 1fr',
        explore: 'repeat(3, minmax(0, 318px))',
      },
      spacing: {
        '1': '0.25rem',
        '2': '0.5rem',
        '3': '0.75rem',
        '4': '1rem',
        '5': '1.25rem',
        '6': '1.5rem',
        '7': '1.75rem',
        '8': '2rem',
        '10': '2.5rem',
      },
      colors: {
        white: '#FFFFFF',
        black: '#000000',

        green: {
          100: '#50B2C0',
          200: '#255D6A',
          300: '#0A313C',
        },

        purple: {
          100: '#8381D9',
          200: '#2A2879',
        },

        gray: {
          100: '#F8F9FC',
          200: '#E6E8F2',
          300: '#D1D6E4',
          400: '#8D95AF',
          500: '#303F73',
          600: '#252D4A',
          700: '#181C2A',
          800: '#0E1116',
        },
      },
      keyframes: {
        overlayShow: {
          from: { opacity: '0' },
          to: { opacity: '0.6' },
        },
        contentShow: {
          from: {
            opacity: '0',
            transform: 'translateX(110%)',
          },
          to: { opacity: '1', transform: 'translateX(0%)' },
        },
      },
      animation: {
        overlayShow: 'overlayShow 300ms ease-out',
        contentShow: 'contentShow 300ms ease-out',
      },
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      md: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
    },
    fontWeight: {
      regular: '400',
      medium: '500',
      bold: '700',
    },
    lineHeight: {
      shorter: '125%',
      short: '140%',
      base: '160%',
      tall: '180%',
    },
  },
  plugins: [],
}
export default config
