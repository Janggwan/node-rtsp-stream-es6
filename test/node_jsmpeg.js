

var jsdom = require("jsdom").jsdom;
var document = jsdom("hello world");
var window = document.defaultView;




const WebSocket = require('ws');
var jsmpeg = require('jsmpeg');


var mpegLoaded = function( player ) {
	console.log('Loaded', player);
}

var client = new WebSocket( 'ws://192.168.1.9:5000/' );
var canvas = document.getElementById('videoCanvas');
var player = new jsmpeg(client, {canvas:canvas, onload:mpegLoaded });


console.log('printing frames...');
var frame = null;
while ( (frame = player.nextFrame()) ) {
	frame = player.nextFrame(); 
	console.log(frame);
}

console.log('done');
