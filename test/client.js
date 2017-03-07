const WebSocket = require('ws')
const ws = new WebSocket('ws://192.168.1.9:5000')

ws.on('open', () => {
  console.log('Connected to stream')
})

ws.on('message', (data, flags) => {
  console.log(data)
})