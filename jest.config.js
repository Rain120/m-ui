module.exports = {
  rootDir: '.',
  moduleFileExtensions: [
    'ts',
    'tsx',
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
  ],
  transformIgnorePatterns: [
    '/node_modules/(?!transpile-me|transpile-me-too).+(ts|tsx)$'
  ],
  testRegex: '.*\\.test\\.tsx$',
  collectCoverage: false,
  collectCoverageFrom: [
    'components/**/*',
  ],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.ts",
    "\\.(css|less|scss)$": "<rootDir>/__mocks__/styleMock.ts"
  },
  // transform: {
  //   "^.+\\.(tsx|tx)$": "babel-jest"
  // },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']  
};
