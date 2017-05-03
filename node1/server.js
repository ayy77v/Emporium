var http = require("http");
var url = require("url");

function start(route,handlers) {
	function onRequest(request, response) {
		var pathname = url.parse(request.url).pathname;
		console.log("Request for " + pathname + " received.");
		console.log("Request for" + "received.");

		route(pathname, handlers, response);

		response.writeHead(200, {"Content-Type": "text/plan"});
		response.write("Dearing");
		response.end();
	}

	http.createServer(onRequest).listen(8080);
	console.log("Here comes the strating of the server");
}

exports.start = start;