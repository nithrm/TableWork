// This enables babel in node.
require('babel-register')({
  presets: ['env', 'react']
});
require('./app');
