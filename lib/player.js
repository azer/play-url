var options = require("./options");
var api = require('./api');

module.exports = player;

function player (initialOptions) {
  options(initialOptions);
  return api;
}
