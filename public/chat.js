var socket = io.connect("http://localhost:3000");

var message = document.getElementById("message");
var button = document.getElementById("send");
var username = document.getElementById("username");
var output = document.getElementById("output");

button.addEventListener("click", () => {
  socket.emit("sendMsg", {
    message: message.value,
    username: username.value,
  });
  message.value = "";
});

socket.on("broadcastMsg", (data) => {
  output.innerHTML += `<p><strong>${data.username}: </strong> ${data.message}</p>`;
});
