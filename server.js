
var server = require('http').createServer()
  , url = require('url')
  , WebSocketServer = require('ws').Server
  , wss = new WebSocketServer({ server: server })
  , express = require('express')
  , app = express()
  , port = 80;

var path = require('path');
var fs = require('fs');


// serves files index.html etc
app.use('/', express.static(path.join(__dirname, 'dist')));


server.on('request', app);
server.listen(port, function () { console.log('Listening on ' + server.address().port) });


