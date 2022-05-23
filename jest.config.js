module.exports = {
  bail: true,
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "./tests/coverage",
  preset: "ts-jest",
  testEnvironment: "node",
  setupFiles: ["dotenv/config"],
};
