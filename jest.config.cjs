module.exports = {
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest",
  },
  moduleNameMapper: {
    "^.+\\.(jpg|jpeg|png|gif|webp|svg|css)$": "jest-transform-stub",
    "\\.(mp4)$": "<rootDir>/src/__mocks__/Outreach.mp4.js",
  },
  testEnvironment: "jsdom",
  testPathIgnorePatterns: [
    "<rootDir>/node_modules/",
    "node_modules/(?!(Outreach\\.mp4))",
  ],
};
