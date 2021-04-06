const express = require("express");
const http = require("http");
const router = require("./router/index");
const socketIo = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "*",
  },
});

app.use(express.static("public"));
app.use(router);

io.sockets.on("connection", (socket) => {
  console.log("Client has connected!");
  socket.on("join", ({ name, room }) => {
    console.log(name, room);
  });
});

console.log("Server started.");
server.listen(5000);
