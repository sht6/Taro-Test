// eslint-disable-next-line import/no-commonjs
const defineJestConfig =
  // eslint-disable-next-line import/no-commonjs
  require("@tarojs/test-utils-react/dist/jest.js").default;

module.exports = defineJestConfig({
  testEnvironment: "jsdom",
  testMatch: ["<rootDir>/__tests__/?(*.)+(spec|test).[jt]s?(x)"],
});