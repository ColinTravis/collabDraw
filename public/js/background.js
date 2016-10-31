var socket = io.connect('http://150.253.88.129:3000');
socket.on('connect', function(data){ //on connect, runs this function
  console.log("connected" + " id# " + socket.id); //socket API call to give user id
})

$('.pageinstruct').delay(5000).fadeOut('medium');


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
