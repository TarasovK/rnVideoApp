const { defaults: tsjPreset } = require('ts-jest/presets');

module.exports = {
    ...tsjPreset,
    preset: 'react-native',
    modulePaths: [
        '<rootDir>/node_modules/'
      ],
    moduleFileExtensions: [
        'ts',
        'tsx',
        'js'
    ],
    moduleNameMapper: {
        "^react-native-reanimated$": "<rootDir>/node_modules/react-native-reanimated/src/Animated.js"
      },
    setupFiles: [
        "<rootDir>/jest/setup.js"
      ],
    transform: {
        ...tsjPreset.transform,
        '^.+\\.(js)$': '<rootDir>/node_modules/babel-jest',
        '\\.(ts|tsx)$': '<rootDir>/node_modules/ts-jest/preprocessor.js'
    },
    globals: {
        'ts-jest': {
            babelConfig: true,
        }
    },
    testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
    testPathIgnorePatterns: [
        '\\.snap$',
        '<rootDir>/node_modules/'
    ],
    cacheDirectory: '.jest/cache',
  }