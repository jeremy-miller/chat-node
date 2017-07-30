"use strict";

var express = require('express')
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use('/static', express.static(__dirname + "/static"));  // expose static files

app.get('/', defaultRoute);

http.listen(3000, listen);

io.on('connection', socketConnection);

function defaultRoute(req, res) {
  res.sendFile(__dirname + '/static/index.html');
}

function listen() {
  console.log('listening on *:3000');
}

function socketConnection(socket) {
  io.emit('user connected');
  socket.on('chat message', function(msg) {
    io.emit('chat message', msg);
  });
  socket.on('disconnect', function() {
    io.emit('user disconnected');
  });
}
