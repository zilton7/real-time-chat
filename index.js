const express = require("express");
const socket = require("socket.io");

var app = express();

var server = app.listen(3000, () => {
  console.log("Listening on Port 3000");
});

app.use(express.static("public"));

var upgradeServer = socket(server);

upgradeServer.on("connection", () => {
  console.log("Websocker Connected", socket.id);
});
