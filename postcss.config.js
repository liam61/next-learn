module.exports = {
  plugins: {
    'postcss-easy-import': { prefix: '_' }, // keep this first
    'postcss-preset-env': {
      browsers: 'last 2 versions',
    },
    autoprefixer: {},
  },
};
