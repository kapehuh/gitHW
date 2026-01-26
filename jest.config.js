module.exports = {
  testEnvironment: 'jsdom',
  collectCoverageFrom: ['script.js'],
  coverageThreshold: {
    global: {
      statements: 60,
      branches: 60,
      functions: 60,
      lines: 60,
    },
  },
};
