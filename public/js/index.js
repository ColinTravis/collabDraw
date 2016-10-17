//io.connect from socket.io API
var socket = io.connect('http://localhost:3000')

socket.on('connect', function(data){ //on connect, runs this function
  console.log("connected" + " id# " + socket.id); //socket API call to give user id
})
