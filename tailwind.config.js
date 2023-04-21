/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts,tsx}'],
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
  theme: {
    // colors: {
    //   // ...
    //   mealie: {
    //     light: '#282828',
    //     DEFAULT: '#06b6d4',
    //     dark: '#212121',
    //   }
    // },
    extend: {}
  }
}
