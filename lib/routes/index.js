"use strict";

var path = require("path");

module.exports = {};

module.exports.base = function(req, res) {
  res.sendFile(path.join(__dirname, "../..", "static/index.html"));
}
