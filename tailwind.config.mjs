/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'], // Adjust paths to match your project structure
  theme: {
    extend: {
      colors: {
        mainColor: 'var(--mainColor)',
        secondaryColor: 'var(--secondaryColor)',
        accentColor: 'var(--accentColor)',
        accentOrangeColor: 'var(--accentOrangeColor)',
        accentTurquoiseColor: 'var(--accentTurquoiseColor)',
        accentYellowColor: 'var(--accentYellowColor)',
        accentPurpleColor: 'var(--accentPurpleColor)',
        whiteColor: 'var(--whiteColor)',
        whiteLightColor: 'var(--whiteLightColor)',
      },
      screens: {
        xs: '30rem',
        880: '55rem',
      },
    },
  },
  plugins: [],
};
