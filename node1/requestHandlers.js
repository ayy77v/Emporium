function start(res) {
	console.log("Handler 'start' is started");
}

function send(res) {
	console.log( "Handler 'send' is started")
}

exports.start = start;
exports.send = send;