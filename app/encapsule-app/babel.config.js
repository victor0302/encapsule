module.exports = function (api) {
  api.cache(true); // Caches the config for faster reloads

  return {
    presets: ["babel-preset-expo"], // Tells Babel this is an Expo/React Native app

    plugins: [
      [
        "module:react-native-dotenv", // Enables .env variable support
        {
          moduleName: "@env",
          path: ".env",
          safe: false,
          allowUndefined: true
        }
      ]
    ]
  };
};
