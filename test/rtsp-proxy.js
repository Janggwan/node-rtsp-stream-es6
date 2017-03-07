var myArgs = process.argv.slice(2);
//console.log('myArgs: ', myArgs);

if(myArgs[0] == null) {
	console.log("node rtsp-proxy.js <rtsp://ip:port/url> <ws port>");
	return;
}
if(myArgs[1] == null) {
	console.log("node rtsp-proxy.js <rtsp://ip:port/url> <ws port>");
	return;
}

console.log("transform RTSP stream from "+myArgs[0]+" to "+myArgs[1]); 
const Stream = require('node-rtsp-stream-es6');

const options = {
	name: 'streamName',
	url: myArgs[0],
	port: myArgs[1]
}

stream = new Stream(options)

stream.start()

 


