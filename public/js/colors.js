var socket = io.connect('http://192.168.1.7:3000');
socket.on('connect', function(data){ //on connect, runs this function
  console.log("connected" + " id# " + socket.id); //socket API call to give user id
})


    $('.blue').click(function(){
      console.log("Blue Clicked");
      socket.emit('colorBlue', "Stroke Blue")
  })

  $('.green').click(function(){
    console.log("Green Clicked");
    socket.emit('colorGreen', "Stroke Green")
  })

  $('.red').click(function(){
    console.log("red Clicked");
  socket.emit('colorRed', "Stroke Red")
  })

  $('.yellow').click(function(){
    console.log("Yellow Clicked");
  socket.emit('colorYellow', "Stroke Yellow")
})
