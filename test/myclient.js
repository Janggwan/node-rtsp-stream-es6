
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');

  res.end(`

		<!DOCTYPE html>
<html>
<head>
	<meta name="viewport" content="width=320, initial-scale=1"/>
	<title>jsmpeg streaming</title>
	<style type="text/css">
		body {
			background: #333;
			text-align: center;
			margin-top: 10%;
		}
		#videoCanvas {
			width: 352px;
			height: 288px;
		}
	</style>
</head>
<body>
	<!-- The Canvas size specified here is the "initial" internal resolution. jsmpeg will
		change this internal resolution to whatever the source provides. The size the
		canvas is displayed on the website is dictated by the CSS style.
	-->
	<canvas id="videoCanvas" width="352" height="288">
		<p>
			Please use a browser that supports the Canvas Element, like
			<a href="http://www.google.com/chrome">Chrome</a>,
			<a href="http://www.mozilla.com/firefox/">Firefox</a>,
			<a href="http://www.apple.com/safari/">Safari</a> or Internet Explorer 10
		</p>
	</canvas>
	<script type="text/javascript" src="https://raw.githubusercontent.com/phoboslab/jsmpeg/v0.2/jsmpg.js"></script>
	<script type="text/javascript">
		// Setup the WebSocket connection and start the player
		var client = new WebSocket( 'ws://192.168.1.9:5000/' );
		var canvas = document.getElementById('videoCanvas');
		var player = new jsmpeg(client, {canvas:canvas});
	</script>
</body>
</html>

	`);



/*
  res.end(`

	<video id="test_video" controls autoplay src="rtsp://192.168.1.34/Slave-0"></video>
	<script>

		import * as rtsp from 'rtsp_player';
 
		rtsp.RTSP_CONFIG['websocket.url'] = "ws://192.168.1.9:5000"; // You should specify address of proxy described below
 
		let player = rtsp.attach(document.getElementById('test_video'));

	</script>

	`);

*/
/*
  res.end(`
	<canvas id="videoCanvas" width="640" height="480">
		<p>
			Please use a browser that supports the Canvas Element, like
			<a href="http://www.google.com/chrome">Chrome</a>,
			<a href="http://www.mozilla.com/firefox/">Firefox</a>,
			<a href="http://www.apple.com/safari/">Safari</a> or Internet Explorer 10
		</p>
	</canvas>
	<script type="text/javascript" src="https://raw.githubusercontent.com/phoboslab/jsmpeg/v0.2/jsmpg.js"></script>
	<script type="text/javascript">
		// Setup the WebSocket connection and start the player
		var client = new WebSocket( 'ws://192.168.1.9:5000/' );

		var canvas = document.getElementById('videoCanvas');
		var player = new jsmpeg(client, {canvas:canvas});
	</script>
	`);
*/



});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
