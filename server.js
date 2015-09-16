
var server = require('http').createServer()
  , url = require('url')
  , express = require('express')
  , app = express()
  , port = 8081
;

var path = require('path');
var fs = require('fs');


// serves files index.html etc
app.use('/', express.static(path.join(__dirname, 'dist')));


server.on('request', app);
server.listen(port, function () { console.log('Listening on ' + server.address().port) });


