/* eslint-disable import/no-extraneous-dependencies, global-require */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}',
    './node_modules/astro-boilerplate-components/**/*.{js,ts,jsx,tsx}',
  ],
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
    themes: ['night'],
  },
};
