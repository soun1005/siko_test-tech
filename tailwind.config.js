/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    // container setting
    container: {
      padding: {
        DEFAULT: '0 2rem',
        phoneMax: '0 1rem',
      },
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
      fontSize: {
        titleXL: '40px',
        titleL: '24px',
        titleM: '18px',
        textNormal: '16px',
        textSmall: '14px',
      },
      // By default the spacing scale is inherited by the padding, margin, width, minWidth, maxWidth, height, minHeight, maxHeight, gap, inset, space, translate, scrollMargin, and scrollPadding core plugins.
      spacing: {
        space5: '5px',
        space10: '10px',
        space1r: '1rem',
        space2r: '2rem',
      },
      screens: {
        tablet: { max: '850px' },
        phoneMax: { max: '500px' },
      },
    },
  },
  plugins: [],
};
