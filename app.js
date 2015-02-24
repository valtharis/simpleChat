var express = require('express'),
	app = express(),
	server = require('http').createServer(app),
	io = require('socket.io').listen(server);
	
server.listen(3000, function(){
  var host = server.address().address
  var port = server.address().port

  console.log('Running server at http://%s:%s', host, port)
});

app.get('/', function(req,res){
	res.sendFile(__dirname + '/index.html');
});

io.sockets.on('connection', function(socket){
//on client connection

	socket.on('sendMessage',function(data){
	//on event 'sendMessage' do...
	//initiate new event 'newMessage' for response
		io.sockets.emit('newMessage', {'msg':data});
		
		//message for all clients 
		//socket.broadcast.emit('newMessage', data);
	});
});