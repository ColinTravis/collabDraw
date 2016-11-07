function setup() {
  createCanvas(windowWidth, windowHeight);
  socket = io.connect();
  // socket = io.connect('http://150.253.88.129:3000'); USE FOR LOCAL TESTING
  // make a named event called 'mouse' and write an
  // anonymous callback function
  socket.on('projectedDrawing',
    // When we receive data
    function(data) {
      // console.log("Got: " + data.x + " " + data.y + " " + data.px + " " + data.py);
      line(data.x, data.y, data.px, data.py);
    }
  );

  //======= STROKE COLOR =========

  socket.on('changeToGreen', function(data) {
    // console.log(data);
    stroke(0,255,0)
  })
  socket.on('changeToRed', function(data) {
    // console.log(data);
    stroke(255,0,0)
  })
  socket.on('changeToBlue', function(data) {
    // console.log(data);
    stroke(0,0,255)
  })
  socket.on('changeToYellow', function(data) {
    // console.log(data);
    stroke(234, 241, 105)
  })
  socket.on('changeToRandom', function(data) {
    r = random(255);
    g = random(255);
    b = random(255);
    // console.log(data);
    stroke(r, g, b)
  })


  //======= STROKE WIDTH =========

  socket.on('setStrokeSmall', function(data) {
    // console.log(data);
    strokeWeight(1);
  })
  socket.on('setStrokeMedium', function(data) {
    // console.log(data);
    strokeWeight(5);
  })
  socket.on('setStrokeLarge', function(data) {
    // console.log(data);
    strokeWeight(10);
  })
  socket.on('setStrokeHuge', function(data) {
    // console.log(data);
    strokeWeight(20);
  })
  socket.on('setStrokeRandom', function(data) {
    // console.log(data);
    strokeWeight(random(1,30));
  })

  //======= BACKGROUND COLOR =========
  socket.on('setBackgroundRed', function(data) {
    // console.log(data);
    $('canvas').css("background-color","#ff5252");

  })
  socket.on('setBackgroundBlack', function(data){
    // console.log(data);
    $('canvas').css("background-color","#000000");
  })
  socket.on('setBackgroundWhite', function(data){
    // console.log(data);
    $('canvas').css("background-color","#ffffff");
  })
  socket.on('setBackgroundGray', function(data){
    // console.log(data);
    $('canvas').css("background-color","#505050");
  })
  socket.on('setBackgroundBlue', function(data){
    // console.log(data);
    $('canvas').css("background-color","#3f51b5");
  })
  socket.on('setBackgroundYellow', function(data){
    // console.log(data);
    $('canvas').css("background-color","#ffeb3b");
  })

//======= CLEAR SCREEN ======
  socket.on('setClearScreen', function(data) {
    // console.log(data);
    clear()
    $('canvas').css("background-color","#505050");

  })

//======= SAVE SCREEN ======
  socket.on('saveScreen', function(data) {
    // console.log(data);
    saveCanvas('myCanvas', 'jpg');
  })

}
