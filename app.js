var express = require('express') //we want to use express
var app = express(); //starts express
var server = require('http').Server( app ) // start a server instance on a port
var io = require('socket.io')(server) //use socket.io for real time connections aka. wesockets
var port = process.env.PORT || 8000

server.listen(port, function(){ // set up a server on port 3000, do a callback when it starts successfully
  console.log("App is runnin on port" + port);
})
// server.listen(3000, function(){ // set up a server on port 3000, do a callback when it starts successfully
//   console.log("server started on 3000");
// })

app.use ( express.static('public') ) //serve out everything in the public folder

io.on('connect', function(socket){ //turn on socket on connect. If socket.io sees a new connection, do something...
// console.log(socket.id); //prints out socket that connected. (ie. all users + the projection)

  socket.on('clientDraw', function(dataToSend){ //look for any messages with the 'clientDraw'
    // console.log("clientDraw" + " " + dataToSend)
    io.emit('projectedDrawing', dataToSend);
  })

  socket.on('colorGreen', function(sendGreen){
    // console.log("colorGreen" + " " + sendGreen)
    io.emit('changeToGreen', sendGreen);
  })
  socket.on('colorYellow', function(sendYellow){
    // console.log("colorYellow" + " " + sendYellow)
    io.emit('changeToYellow', sendYellow);
  })
  socket.on('colorBlue', function(sendBlue){
    // console.log("colorBlue" + " " + sendBlue)
    io.emit('changeToBlue', sendBlue);
  })
  socket.on('colorRed', function(sendRed){
    // console.log("colorRed" + " " + sendRed)
    io.emit('changeToRed', sendRed);
  })
  socket.on('colorRandom', function(sendRandom){
    // console.log("colorRandom" + " " + sendRandom)
    io.emit('changeToRandom', sendRandom);
  })
  socket.on('widthSmall', function(sendSmall){
    // console.log(sendSmall)
    io.emit('setStrokeSmall', sendSmall);
  })
  socket.on('widthMedium', function(sendMedium){
    // console.log(sendMedium)
    io.emit('setStrokeMedium', sendMedium);
  })
  socket.on('widthLarge', function(sendLarge){
    // console.log(sendLarge)
    io.emit('setStrokeLarge', sendLarge);
  })
  socket.on('widthHuge', function(sendHuge){
    // console.log(sendHuge)
    io.emit('setStrokeHuge', sendHuge);
  })
  socket.on('widthRandom', function(sendRandom){
    // console.log(sendRandom)
    io.emit('setStrokeRandom', sendRandom);
  })
  socket.on('backgroundBlack', function(sendBackBlack){
    // console.log(sendBackBlack)
    io.emit('setBackgroundBlack', sendBackBlack);
  })
  socket.on('backgroundWhite', function(sendBackWhite){
    // console.log(sendBackWhite)
    io.emit('setBackgroundWhite', sendBackWhite);
  })
  socket.on('backgroundGray', function(sendBackGray){
    // console.log(sendBackGray)
    io.emit('setBackgroundGray', sendBackGray);
  })
  socket.on('backgroundBlue', function(sendBackBlue){
    // console.log(sendBackBlue)
    io.emit('setBackgroundBlue', sendBackBlue);
  })
  socket.on('backgroundYellow', function(sendBackYellow){
    // console.log(sendBackYellow)
    io.emit('setBackgroundYellow', sendBackYellow);
  })
  socket.on('backgroundRed', function(sendBackRed){
    // console.log(sendBackRed)
    io.emit('setBackgroundRed', sendBackRed);
  })
  socket.on('clearScreen', function(sendClear){
    // console.log(sendClear)
    io.emit('setClearScreen', sendClear);
  })
  socket.on('saveCanvasScreen', function(sendSave){
    // console.log(sendSave)
    io.emit('saveScreen', sendSave);
  })


})
