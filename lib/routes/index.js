const path = require("path");

module.exports = {};

module.exports.base = (req, res) =>
  res.sendFile(path.join(__dirname, "../..", "static/index.html"));
