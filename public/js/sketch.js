var socket = io.connect('http://192.168.1.7:3000');

// ======= TURN OFF TOUCH SCROLLING ========

var defaultPrevent=function(e){e.preventDefault();}
document.body.parentElement.addEventListener("touchstart", defaultPrevent);
document.body.parentElement.addEventListener("touchmove" , defaultPrevent);
document.body.addEventListener("touchstart", defaultPrevent);
document.body.addEventListener("touchmove" , defaultPrevent);

// ======= ALL P5 STUFF ==========

function setup(){ // once at load
  createCanvas(windowWidth,windowHeight)
}


function draw(){ //this happening 30fps
  strokeWeight(1);
  stroke(0,0,0)

  if(mouseIsPressed || touchIsDown){
    line(mouseX,mouseY, pmouseX, pmouseY)

      console.log(mouseX + ',' + mouseY + "," + pmouseX + "," + pmouseY);
      var dataToSend = {
        x: mouseX,
        y: mouseY,
        px: pmouseX,
        py: pmouseY
      }
  socket.emit('clientDraw', dataToSend)
  }
}
$('.save').click(function(){
  console.log("Screen Saved");
socket.emit('saveCanvasScreen', "Screen Saved")
})
