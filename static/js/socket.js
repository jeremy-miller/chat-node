/* global io $ */

const socket = io();

$("form").submit(() => {
  socket.emit("chat message", $("#message").val());
  $("#message").val("");
  return false;
});

function chatMessage(msg) {
  $("#messages").append($("<li>").text(msg));
}

function userConnected() {
  $("#messages").append($("<li>").text("--- user connected ---"));
}

function userDisconnected() {
  $("#messages").append($("<li>").text("--- user disconnected ---"));
}

socket.on("chat message", chatMessage);
socket.on("user connected", userConnected);
socket.on("user disconnected", userDisconnected);
