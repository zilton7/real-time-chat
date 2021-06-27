const express = require("express");
const socket = require("socket.io");

var app = express();

var server = app.listen(3000, () => {
  console.log("Listening on Port 3000");
});

app.use(express.static("public"));

var serverWithSocket = socket(server);

serverWithSocket.on("connection", (socket) => {
  socket.on("sendMsg", (data) => {
    serverWithSocket.emit("broadcastMsg", data);
  });

  console.log("Websocket Connected", socket.id);
});
