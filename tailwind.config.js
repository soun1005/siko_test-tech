/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
export const content = ['./src/**/*.{js,ts,jsx,tsx,mdx}'];
export const theme = {
  // container setting
  container: {
    center: 'true',
    padding: {
      DEFAULT: '2rem',
      phoneMax: '1rem',
    },
    // margin: '0 auto',
    'min-width': '1400px',
  },
  // doesn't effect core plugins
  extend: {
    colors: {
      background: '#0f0f11',
      blueAccent: '#35AFF9',
      greenAccent: '#2dfddf',
      yellowAccent: '#fff849',
      logoColor: '#3b82f6',
      gray1: '#1b1b1d',
      gray2: '#4F4F4F',
      gray3: '#828282',
      gray4: '#BDBDBD',
      gray5: '#E0E0E0',
    },
    borderColor: {
      yellow: '#fff849',
    },
    fontSize: {
      titleXL: '40px',
      titleL: '32px',
      titleM: '24px',
      titleS: '18px',
      basic: '16px',
      medium: '14px',
    },
    // By default the spacing scale is inherited by the padding, margin, width, minWidth, maxWidth, height, minHeight, maxHeight, gap, inset, space, translate, scrollMargin, and scrollPadding core plugins.
    spacing: {
      space5: '5px',
      space10: '10px',
      space1r: '1rem',
      space2r: '2rem',
      space4r: '4rem',
      pageGap: '87px',
    },
    screens: {
      tablet: { max: '850px' },
      phoneMax: { max: '500px' },
    },
    backgroundSize: {
      '180%': '180%',
      '200%': '200%',
    },
    animation: {
      'spin-slow': 'spin 3s linear infinite',
      wiggle: 'wiggle 500ms linear infinite',
      vibrate: 'vibration 500ms linear infinite',
      float5: 'floating5 1s ease-out infinite',
      float10: 'floating10 1s ease-out infinite',
      gradient: 'animatedgradient 3s ease infinite alternate',
      gradientSlow: 'animatedgradient 6s ease-in-out infinite alternate',
    },
    keyframes: {
      wiggle: {
        '0%, 100%': { transform: 'rotate(-3deg)' },
        '50%': { transform: 'rotate(3deg)' },
      },
      vibration: {
        '0%': { transform: 'translateX(0)' },
        '25%': { transform: 'translateX(5px)' },
        '50%': { transform: 'translateX(-5px)' },
        '75%': { transform: 'translateX(5px)' },
        '100%': { transform: 'translateX(0)' },
      },
      floating5: {
        '0%': { transform: 'translateY(0)' },
        '50%': { transform: 'translateY(-5px)' },
        '100%': { transform: 'translateY(0)' },
      },
      floating10: {
        '0%': { transform: 'translateY(0)' },
        '50%': { transform: 'translateY(-10px)' },
        '100%': { transform: 'translateY(0)' },
      },
      animatedgradient: {
        '0%': { backgroundPosition: '0% 10%' },
        '50%': { backgroundPosition: '100% 50%' },
        '100%': { backgroundPosition: '0% 50%' },
      },
    },
  },
};
export const plugins = [
  plugin(function ({ matchUtilities }) {
    matchUtilities({
      // displayFlex-[justifyContent value]
      displayFlex: (justifyContent) => ({
        display: 'flex',
        'align-items': 'center',
        'justify-content': justifyContent,
      }),

      // flexColumn-[align items value]
      flexColumn: (alignItems) => ({
        display: 'flex',
        'align-items': alignItems,
        'flex-direction': 'column',
      }),
    });
  }),
];
