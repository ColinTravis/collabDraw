var socket = io.connect('http://192.168.1.7:3000');
socket.on('connect', function(data){ //on connect, runs this function
  console.log("connected" + " id# " + socket.id); //socket API call to give user id
})


    $('.clear').click(function(){
      console.log("Screen Cleared");
      socket.emit('clearScreen', "Cleared")
  })
