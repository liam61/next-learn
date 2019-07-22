module.exports = {
  plugins: {
    'postcss-easy-import': { prefix: '_' }, // keep this first
    'postcss-cssnext': {
      features: {
        autoprefixer: true,
        customProperties: {
          variables: {
            colorPrimary: '#51a9f2',
          },
        },
      },
    },
  },
};
