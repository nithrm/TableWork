// This enables babel in node.
require('babel-register')({
  presets: ['env', 'react']
});
module.exports = require('./app');
