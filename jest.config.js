module.exports = {
  testEnvironment: 'jsdom',
  testMatch: [
    '**/task7/script.test.js',
  ],
  collectCoverageFrom: ['task7/script.js'],
  coverageThreshold: {
    global: {
      statements: 60,
      branches: 60,
      functions: 60,
      lines: 60,
    },
  },
};
