
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);  // Correct instantiation of Socket.io server

io.on('connection', (socket) => {  // Use 'socket' instead of 'Socket' for conventional naming
    console.log('socket connected ', socket.id);
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Listening on port ${PORT}`));
  // Use backticks for template string
