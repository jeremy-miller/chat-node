"use strict";

module.exports = function(io) {
  return {
    onConnect: function(socket) {
      io.emit('user connected');

      socket.on('chat message', function(msg) {
        io.emit('chat message', msg);
      });

      socket.on('disconnect', function() {
        io.emit('user disconnected');
      });
    }
  }
}
