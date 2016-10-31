var socket = io.connect('http://150.253.88.129:3000');
socket.on('connect', function(data){ //on connect, runs this function
  // console.log("connected" + " id# " + socket.id); //socket API call to give user id
})

$('.pageinstruct').delay(5000).fadeOut('medium');


    $('.clear').click(function(){
      // console.log("Screen Saved");
      // console.log("Screen Cleared");
      socket.emit('saveCanvasScreen', "Screen Saved")
      socket.emit('clearScreen', "Cleared")
  })
