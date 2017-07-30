var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', defaultRoute);

http.listen(3000, listen);

io.on('connection', socketConnection);

function defaultRoute(req, res) {
  res.sendFile(__dirname + '/public/view/index.html');
}

function listen() {
  console.log('listening on *:3000');
}

function socketConnection(socket) {
  console.log('a user connected');
  socket.on('chat message', function(msg) {
    io.emit('chat message', msg);
  });
  socket.on('disconnect', function() {
    console.log('a user disconnected');
  });
}
