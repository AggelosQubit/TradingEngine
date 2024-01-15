const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const PORT = 8080;
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/views/index.html');
});
let userConnected = 0;
let UsersConnectionList = [];

io.on('connection', (socket) => {
    userConnected++;
    console.log('A user connected');
    // Emit a 'hello' event to the connected client
    socket.on('userConnect', (ip) => {
        console.log("IP of the Client Connecting : ", ip);
        //socket.emit('userConnected',GetUserConnectName(ip))
    });
    socket.on('sendNewOrder', (newOrder) => { console.log("We have a new order", newOrder); });

    socket.on('disconnect', () => {
        console.log('User disconnected');
        userConnected--;
    });
});
function GetUserConnectName(ip) {
    let index = 0;
    index = UsersConnectionList.indexOf(ip);
    //(index===0) ? index =:
    return 0;
}
server.listen(PORT, () => {
    console.log('Server listening on port 3000');
});
