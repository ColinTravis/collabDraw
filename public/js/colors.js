var socket = io.connect('http://150.253.88.129:3000');
socket.on('connect', function(data){ //on connect, runs this function
  console.log("connected" + " id# " + socket.id); //socket API call to give user id
})

$('.pageinstruct').delay(5000).fadeOut('medium');


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
