import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import cors from "cors";
const app = express();

app.use(cors());
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("a user connected", socket.id);


  socket.on("start-chat", (data) => {
    console.log("Chat data: ", data);
    io.emit("start-chat", data);
  });
  socket.on("chat", (data) => {
    console.log("Chat data: ", data);
    io.emit("chat", data);
  });


  socket.on("disconnect", () => {
    console.log("user disconnected", socket.id);
  });
});


httpServer.listen(3000, () => {
  "Server is running on port 3000";
});
