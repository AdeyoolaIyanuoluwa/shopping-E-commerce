module.exports = {
    collectCoverage: true,
    coverageDirectory: 'coverage',
    testEnvironment: 'jsdom',
    collectCoverageFrom: [
        './src/**',
        '!**/src/App.js',
        '!**/src/index.js',
        '!**/src/reportWebVitals.js',
],
    setupFilesAfterEnv: ['<rootDir>/setupTests.js']
}