// This file is not transpiled , so must use commonjs or ES5

// Register babel to transpile before our tests run
require('babel-register')();

// Disable webpack features which mocha doesn't understand
require.extensions['.css'] = function() {};
