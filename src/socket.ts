import { Server, Socket } from "socket.io";

function socket({ io }: { io: Server }) {
  io.on("connection", (socket: Socket) => {
    console.log(`User connected ${socket.id}`);

    socket.on("stream", (message) => {
      io.emit("receive", message);
    });
  });
}

export default socket;
