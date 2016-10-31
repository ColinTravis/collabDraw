// var socket = io.connect('http://150.253.88.129:3000');

var options = ['sketch.html', 'width.html', 'colors.html', 'background.html', 'clear.html']

rand = Math.floor(Math.random()* options.length)

window.location.replace( options[rand] );
