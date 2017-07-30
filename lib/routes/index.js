"use strict";

var path = require("path");

function base(req, res) {
  res.sendFile(path.join(__dirname, '../..', 'static/index.html'));
}

module.exports = {
  base
}
