// This file isn't transpiled, so much use CommonJS and ES5

// Register babel to transpile before our tests run.
require('babel-register')();

// Disable webpack features that Mocha doesn't understans (like CSS files)
require.extensions['.css'] = function(){};
