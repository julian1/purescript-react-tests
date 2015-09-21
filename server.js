
var server = require('http').createServer()
  , url = require('url')
  , express = require('express')
  , app = express()
  , port = 8081
;

var path = require('path');
var fs = require('fs');


// serves files index.html etc
// app.use('/', express.static(path.join(__dirname, 'dist')));

// serve static assets normally
app.use(express.static(__dirname + '/dist'))


// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
app.get('*', function(request, response){
  response.sendFile(path.resolve(__dirname, 'dist', 'index.html'))
})


server.on('request', app);
server.listen(port, function () { console.log('Listening on ' + server.address().port) });


