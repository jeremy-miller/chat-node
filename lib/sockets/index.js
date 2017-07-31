// eslint-disable-next-line func-names
module.exports = function(io) {
  return {
    onConnect: socket => {
      io.emit("user connected");
      socket.on("chat message", msg => io.emit("chat message", msg));
      socket.on("disconnect", () => io.emit("user disconnected"));
    }
  };
};
