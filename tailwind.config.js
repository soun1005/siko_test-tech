/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
export const content = ['./src/**/*.{js,ts,jsx,tsx,mdx}'];
export const theme = {
  // container setting
  container: {
    center: 'true',
    padding: {
      DEFAULT: '0 2rem',
      phoneMax: '0 1rem',
    },
    margin: '0 auto',
    'max-width': '1400px',
  },
  // doesn't effect core plugins
  extend: {
    colors: {
      background: '#0f0f11',
      blueAccent: '#35AFF9',
      greenAccent: '#2dfddf',
      yellowAccent: '#fff849',
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
    },
    screens: {
      tablet: { max: '850px' },
      phoneMax: { max: '500px' },
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
    });
  }),
];
