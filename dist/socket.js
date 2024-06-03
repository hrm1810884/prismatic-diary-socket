"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function socket({ io }) {
    io.on("connection", (socket) => {
        console.log(`User connected ${socket.id}`);
        socket.on("sendMessage", (message) => {
            console.log(message);
        });
    });
}
exports.default = socket;
