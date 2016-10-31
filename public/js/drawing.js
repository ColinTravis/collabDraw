//init jQuery
$(function() {
    // mouse object (basically used to easily keep track of mouse)
    var mouse = {
        click: false,
        move: false,
        pos: {
            x: 0,
            y: 0
        },
        pos_prev: false
    };

    // create canvas
    var canvas = document.getElementById('drawing'); //my id from index.html
    var context = canvas.getContext('2d');
    var width = window.innerWidth;
    var height = window.innerHeight;
    var socket = io.connect();


    // set canvas to full browser width/height.
    canvas.width = width;
    canvas.height = height;

    // register mouse event handlers
    canvas.onmousedown = function(e) {
        mouse.click = true;
    };
    canvas.onmouseup = function(e) {
        mouse.click = false;
    };

    canvas.onmousemove = function(e) {
        // average out mouse position to range 0.0 - 1.0 (by multiplying the width and height given by the client window size)
        mouse.pos.x = e.clientX / width;
        mouse.pos.y = e.clientY / height;
        mouse.move = true;
    };

    //======END MOUSE HANDLERS=======

    // register touch event handlers

    canvas.touchstart = function(e) {
        mouse.click = true;
    };
    canvas.touchend = function(e) {
        mouse.click = false;
    };

    canvas.touchmove = function(e) {
        // average out mouse position to range 0.0 - 1.0 (by multiplying the width and height given by the client window size)
        touch.pos.x = e.clientX / width;
        touch.pos.y = e.clientY / height;
        touch.move = true;
    };
/*

    canvas.addEventListener("touchstart", function(e) {
            mousePos = getTouchPos(canvas, e);
        var touch = e.touches[0];
        var mouseEvent = new MouseEvent("mousedown", {
            clientX: touch.clientX / width,
            clientY: touch.clientY / height
        });
        canvas.dispatchEvent(mouseEvent);
    }, false);

canvas.addEventListener("touchend", function(e) {
    var mouseEvent = new MouseEvent("mouseup", {});
    canvas.dispatchEvent(mouseEvent);
}, false);

canvas.addEventListener("touchmove", function(e) {

    var touch = e.touches[0];
    var mouseEvent = new MouseEvent("mousemove", {
        clientX: touch.clientX,
        clientY: touch.clientY
    });
    canvas.dispatchEvent(mouseEvent);
}, false);

//Position of touch relative to canvas
  function getTouchPos(canvasDom, touchevent) {
    var rect = cavasDom.getBoundingClientRect();
    return {
      x: touchEvent.touches[0].clientX - rect.left,
      y: touchEvent.touches[0].clientY - rect.top
    };

  }
  */

document.body.addEventListener("touchstart", function (e) {
  if (e.target == canvas) {
    e.preventDefault();
  }
}, false);
document.body.addEventListener("touchend", function (e) {
  if (e.target == canvas) {
    e.preventDefault();
  }
}, false);
document.body.addEventListener("touchmove", function (e) {
  if (e.target == canvas) {
    e.preventDefault();
  }
}, false);

//====END TOUCH====



// draw line received from server (in app.js)
socket.on('draw_line', function(data) {
    var line = data.line;
    context.beginPath();
    context.moveTo(line[0].x * width, line[0].y * height);
    context.lineTo(line[1].x * width, line[1].y * height);
    context.stroke();
});

// main loop, running every 25ms
function mainLoop() {
    // check if the user is drawing
    if (mouse.click && mouse.move && mouse.pos_prev) {
        // send line to to the server
        socket.emit('draw_line', {
            line: [mouse.pos, mouse.pos_prev]
        });
        mouse.move = false;
    }
    mouse.pos_prev = {
        x: mouse.pos.x,
        y: mouse.pos.y
    };
    setTimeout(mainLoop, 25);
}
mainLoop();
//keep checking to see if user is drawing, makes it real-time.
});
