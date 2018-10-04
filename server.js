var express = require('express');
var app = express();

var http = require('http');
var server = http.Server(app);

app.use(express.static('client'));

var io = require('socket.io')(server);

var messages = [];

io.on('connection', function(socket){
	for( var i = 0; i < messages.length; i++){
		socket.emit('message', messages[i]);
	}
	
	socket.on('message', function(msg){
		messages.push(msg);
		io.emit('message', msg);
	});
});

server.listen(8080, function(){
	console.log("Chat server running!");
});