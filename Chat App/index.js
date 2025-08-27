const express = require('express');
const http = require('http');
const PORT = 3000;
const app = express();
const server = http.createServer(app);
// Public Directory access
const path = require('path');
app.use(express.static(path.resolve('./public')));
// Import Socket io
const { Server } = require('socket.io');

// Create socket IO Input and Output kay liya
const io = new Server(server);
io.on('connection', (socket) => {
    socket.on('data', (message) => {
        // Print the Respoance for the Server 
        // console.log("A new User Message",message);
        // Send the Data for Clinet Browser
      io.emit('message',message);
    });
});
app.get('/', (req, res) => {
    return res.sendFile('/public/index.html')
})

server.listen(PORT, () => {
    console.log(`Server Started ${PORT}`);
})