import express from 'express';
import http from 'http';
import { Server, Socket } from 'socket.io';

// Create an Express application
const app = express();

// Create an HTTP server using the Express app
const server = http.createServer(app);

// Attach Socket.IO to the HTTP server
const io = new Server(server, {
  cors: {
    origin: "*", // Allow all origins for simplicity (use specific origins in production)
  },
});

io.on("connection", (socket: Socket) => {
  console.log("User connected:", socket.id);

  // Event listener for custom events
  socket.on("message", (data: string) => {
    console.log(`Message received from ${socket.id}: ${data}`);
    // Broadcast the message to all connected clients
    io.emit("message", data);
  });

  // Handle disconnection
  socket.on("disconnect", () => {
    console.log(`User disconnected: ${socket.id}`);
  });

});

// Start the server
const PORT = 8000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});