function setup() {
  createCanvas(windowWidth, windowHeight);
  socket = io.connect('http://192.168.1.7:3000');
  // make a named event called 'mouse' and write an
  // anonymous callback function
  socket.on('projectedDrawing',
    // When we receive data
    function(data) {
      console.log("Got: " + data.x + " " + data.y + " " + data.px + " " + data.py);
      line(data.x, data.y, data.px, data.py);
    }
  );

  socket.on('changeToGreen', function(data) {
    console.log(data);
    stroke(0,255,0)
  })
  socket.on('changeToRed', function(data) {
    console.log(data);
    stroke(255,0,0)
  })
  socket.on('changeToBlue', function(data) {
    console.log(data);
    stroke(0,0,255)
  })
  socket.on('changeToYellow', function(data) {
    console.log(data);
    stroke(234, 241, 105)
  })
  socket.on('setStrokeSmall', function(data) {
    console.log(data);
    strokeWeight(1);
  })
  socket.on('setStrokeMedium', function(data) {
    console.log(data);
    strokeWeight(5);
  })
  socket.on('setStrokeLarge', function(data) {
    console.log(data);
    strokeWeight(10);
  })
  socket.on('setStrokeHuge', function(data) {
    console.log(data);
    strokeWeight(20);
  })
  socket.on('setStrokeRandom', function(data) {
    console.log(data);
    strokeWeight(random(1,30));
  })
  socket.on('setBackgroundBlack', function(data) {
    console.log(data);
    strokeWeight(random(1,30));
  })
  socket.on('setStrokeRandom', function(data) {
    console.log(data);
    strokeWeight(random(1,30));
  })
  socket.on('setStrokeRandom', function(data) {
    console.log(data);
    strokeWeight(random(1,30));
  })
  socket.on('setStrokeRandom', function(data) {
    console.log(data);
    strokeWeight(random(1,30));
  })
  socket.on('setStrokeRandom', function(data) {
    console.log(data);
    strokeWeight(random(1,30));
  })
  socket.on('setBackgroundRed', function(data) {
    console.log(data);
    background('#ff5252');
  })

  socket.on('setBackgroundBlack', function(data){
    console.log(data);
    background('#000000');
  })
  socket.on('setBackgroundWhite', function(data){
    console.log(data);
    background('#ffffff');
  })
  socket.on('setBackgroundGray', function(data){
    console.log(data);
    background('#505050');
  })
  socket.on('setBackgroundBlue', function(data){
    console.log(data);
    background('#3f51b5');
  })
  socket.on('setBackgroundYellow', function(data){
    console.log(data);
    background('#ffeb3b');
  })

  socket.on('setClearScreen', function(data) {
    console.log(data);
    clear()
  })

  socket.on('saveScreen', function(data) {
    console.log(data);
    saveCanvas('myCanvas', 'jpg');
  })

}
