// This file isn't transpiled, so must use CommonJS and ES6

// Register babel to transpile before our test run.
require('babel-register')();
require("babel-polyfill");

// Disable webpack features that mocha doesn't understand.
require.extensions['.css'] = function () {};
