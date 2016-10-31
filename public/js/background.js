var socket = io.connect('http://192.168.1.7:3000');
socket.on('connect', function(data){ //on connect, runs this function
  console.log("connected" + " id# " + socket.id); //socket API call to give user id
})


    $('.blue').click(function(){
      console.log("Blue Clicked");
      socket.emit('backgroundBlue', "BKGD Blue")
  })

  $('.green').click(function(){
    console.log("Green Clicked");
    socket.emit('backgroundGreen', "BKGD Green")
  })

  $('.red').click(function(){
    console.log("Red Clicked");
  socket.emit('backgroundRed', "BKGD Red")
  })

  $('.yellow').click(function(){
    console.log("Yellow Clicked");
  socket.emit('backgroundYellow', "BKGD Yellow")
  })
  $('.gray').click(function(){
    console.log("Gray Clicked");
  socket.emit('backgroundGray', "BKGD Gray")
  })
  $('.white').click(function(){
    console.log("White Clicked");
  socket.emit('backgroundWhite', "BKGD White")
  })
  $('.black').click(function(){
    console.log("Black Clicked");
  socket.emit('backgroundBlack', "BKGD Black")
  })
