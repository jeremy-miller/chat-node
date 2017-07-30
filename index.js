"use strict";

var express = require("express")
var app = express();
var http = require("http").Server(app);
var io = require("socket.io")(http);
var routes = require("./lib/routes");
var sockets = require("./lib/sockets")(io);

app.use("/static", express.static(__dirname + "/static"));  // expose static files

app.get("/", routes.base);

io.on("connection", sockets.onConnect);

http.listen(3000, function() {
  console.log("server started at http://localhost:3000");
});
