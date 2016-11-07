var socket = io.connect();
// var socket = io.connect('http://150.253.88.129:3000'); USE FOR LOCAL TESTING

// ======= TURN OFF TOUCH SCROLLING ========

var defaultPrevent=function(e){e.preventDefault();}
document.body.parentElement.addEventListener("touchstart", defaultPrevent);
document.body.parentElement.addEventListener("touchmove" , defaultPrevent);
document.body.addEventListener("touchstart", defaultPrevent);
document.body.addEventListener("touchmove" , defaultPrevent);

// ======= ALL P5 STUFF ==========

var gate = false;

function setup(){ // once at load
  createCanvas(windowWidth,windowHeight)
}
$('.pageinstruct').delay(5000).fadeOut('medium');


function draw(){ //this happening 30fps
  strokeWeight(1);
  stroke(0,0,0)
  // console.log(gate);
  if( mouseIsPressed || touchIsDown){
    if(gate == true){
      line(mouseX,mouseY,pmouseX,pmouseY)
      // console.log(mouseX + ',' + mouseY + "," + pmouseX + "," + pmouseY);
      var dataToSend = {
        x: mouseX,
        y: mouseY,
        px: pmouseX,
        py: pmouseY
      }
    socket.emit('clientDraw', dataToSend)
    }
    gate = true;
  }
}

function touchEnded(){
  gate = false;
}

$('.save').click(function(){
  // console.log("Screen Saved");
socket.emit('saveCanvasScreen', "Screen Saved")
})

socket.on('setClearScreen', function(data) {
  // console.log(data);
  clear()
  $('canvas').css("background-color","#505050");

})
