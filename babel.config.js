// make sure to start the packager with
// react-native start --reset-cache
// when you change this file

module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@colors': 'your-colors-path',
            '@endpoints': 'your-endpoints-path',
          },
        },
      ],
    ],
  };
};
