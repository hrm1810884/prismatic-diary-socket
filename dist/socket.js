"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function socket({ io }) {
    io.on("connection", (socket) => {
        console.log(`User connected ${socket.id}`);
        socket.on("stream", (message) => {
            io.emit("receive", message);
        });
    });
}
exports.default = socket;
