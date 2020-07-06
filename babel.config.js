module.exports = (api) => {
  api.cache(true);

  return {
    sourceType: 'unambiguous',
    presets: [
      [
        '@babel/preset-env',
        {
          // targets: {
          //   chrome: '58',
          //   ie: '9',
          // },
          useBuiltIns: 'usage',
          corejs: {
            version: 3,
          },
        },
      ],
    ],
    plugins: ['@babel/plugin-syntax-dynamic-import'],
  };
};
