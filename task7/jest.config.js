module.exports = {
  testEnvironment: "jsdom",
  collectCoverage: true,
  coverageThreshold: {
    global: {
      statements: 60,
      branches: 60,
      functions: 60,
      lines: 60,
    },
  },
  coverageReporters: ["text", "html"],
  testMatch: ['**/*.test.js']
};
