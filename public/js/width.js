var socket = io.connect('http://150.253.88.129:3000');
socket.on('connect', function(data){ //on connect, runs this function
  console.log("connected" + " id# " + socket.id); //socket API call to give user id
})

$('.pageinstruct').delay(5000).fadeOut('medium');

    $('.small').click(function(){
      console.log("Small Clicked");
      socket.emit('widthSmall', "Small")
  })

  $('.medium').click(function(){
    console.log("Medium Clicked");
    socket.emit('widthMedium', "Medium")
  })

  $('.large').click(function(){
    console.log("Large Clicked");
  socket.emit('widthLarge', "Large")
  })

  $('.huge').click(function(){
    console.log("Huge Clicked");
  socket.emit('widthHuge', "Huge")
  })
  $('.random').click(function(){
    console.log("Random Clicked");
  socket.emit('widthRandom', "Random")
  })
