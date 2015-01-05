var http = require('http');
var ip = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1',
    port = process.env.OPENSHIFT_NODEJS_PORT || 8080;

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(port, ip);
console.log('Server running at http://'+ip+':'+port+'/');

//var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
//var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'
 
//server.listen(server_port, server_ip_address, function () {
//  console.log( "Listening on " + server_ip_address + ", server_port " + port )
//});
