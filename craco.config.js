const path = require('path')

module.exports = {
  jest: {
    setupFilesAfterEnv: [
      './setupTests.ts',
    ],
    configure: {
        moduleNameMapper: {
            '^@/(.*)$': '<rootDir>/src/$1',
        },
    },
  },
  webpack: {
    alias: {
        '@': path.resolve(__dirname, 'src'),
    },
  },
};
