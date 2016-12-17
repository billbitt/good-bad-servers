
var http = require('http');

//server 1
//set the port 
var PORTPOS = 7000; 
// here we create a generic funciton to handle reuests and responses
function handlePositiveRequest(request, response){
    var responses = ['You are cool.', 'You are magical.', 'You are beautiful.'];
    var randomNumber = Math.floor(Math.random() * responses.length);
    response.end(responses[randomNumber]);
}
//use the NODE http package to create our server.
var serverPos = http.createServer(handlePositiveRequest);
//create the listener for the server
serverPos.listen(PORTPOS, function(){
    console.log('Server is listening on http://localhost:%s', PORTPOS);
});


//server 2
var PORTNEG = 7050;
function handleNegativeRequest(request, response){
    var responses = ['You are lame.', 'You are not cool.', 'You are a dumb.'];
    var randomNumber = Math.floor(Math.random() * responses.length);
    response.end(responses[randomNumber]);
}
var serverNeg = http.createServer(handleNegativeRequest);
serverNeg.listen(PORTNEG, function(){
    console.log('Server is listening on http://localhost:%s', PORTNEG);
});

