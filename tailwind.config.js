/* eslint-disable import/no-extraneous-dependencies, global-require */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      animation: {
        shine: 'shine 1s',
      },
      keyframes: {
        shine: {
          '100%': { left: '125%' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      'dim',
      {
        myTheme: {
          primary: '#FF6319',
          secondary: '#dbc81a',
          neutral: '#19212A',
          'base-100': '#212737',
          info: '#77A7D4',
          success: '#19C28D',
          warning: '#E2B512',
          error: '#EF2A4A',
        },
      },
    ],
  },
};
