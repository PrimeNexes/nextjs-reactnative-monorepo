/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
const path = require('path');
const customConfig = {
  resolver: {
    extraNodeModules: new Proxy(
      {
        '@olr/lib': path.resolve(__dirname, '../lib'),
      },
      {
        get: (defaultExtraModules, importedModule) => {
          // Designated parent directories
          if (defaultExtraModules[importedModule]) {
            return defaultExtraModules[importedModule];
          }

          // Parent directory file node module imports
          return path.join(process.cwd(), `../node_modules/${importedModule}`);
        },
      }
    ),
  },
  projectRoot: path.resolve(__dirname),
  watchFolders: [
    path.resolve(__dirname, '../lib'),
    path.resolve(__dirname, '../node_modules'),
  ],
};
module.exports = {
  ...customConfig,
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
};
