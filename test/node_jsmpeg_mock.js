
var MockBrowser = require('mock-browser').mocks.MockBrowser;
var AbstractBrowser = require('mock-browser').delegates.AbstractBrowser;

var opts = {};

if (typeof window === 'object') {
	opts.window = window;
} else {
	opts.window = MockBrowser.createWindow();
}

var browser = new AbstractBrowser (opts);

var document = browser.getDocument();

const WebSocket = require('ws');
var jsmpeg = require('jsmpeg');


var client = new WebSocket( 'ws://192.168.1.9:5000/' );
var canvas = document.getElementById('videoCanvas');
var player = new jsmpeg(client, {canvas:canvas});

player.play();

console.log('printing frames...');
var frame = null;
while ( (frame = player.nextFrame()) ) {
	console.log(frame);
}

console.log('done');
