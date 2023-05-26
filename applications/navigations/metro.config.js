/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
const path = require('path');

const projectRoot = path.resolve(__dirname, '.');
const watchFolderNodeModules = path.resolve(__dirname, '../../node_modules');

module.exports = {
  projectRoot: projectRoot,
  watchFolders: [watchFolderNodeModules],
  // resolver: {
  //   nodeModulesPaths: [
  //     path.resolve(__dirname, 'node_modules'),
  //     path.resolve(__dirname, '../../node_modules'),
  //   ],
  //   disableHierarchicalLookup: true,
  // },
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
};
