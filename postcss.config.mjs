const config = {
  plugins: ['@tailwindcss/postcss', 'autoprefixer'],
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
    },
  },
};

export default config;
