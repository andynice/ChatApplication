var socket = io();

$("form").on("submit", function(){
	var initials = $("#initials").val();
	var message = $("#message").val();
	socket.emit('message', initials + " says: " + message);
	$("#message, #initials").val('');
	return false;
});


socket.on('message', function(msg){
	$('<li>').text(msg).appendTo('#history');
});




