const Stream = require('node-rtsp-stream');
const WebSocket = require('ws');

const stream = new Stream({
  name: 'name',
  streamUrl: 'rtsp://192.168.1.27:5543/051c6519288cc2d8b07f026902be8c96/live/channel0',
  wsPort: 9911,
  ffmpegOptions: {
    '-stats': '',
    '-r': 30
  }
});

// WebSocket server instance
const wss = new WebSocket.Server({ port: 9911 });

wss.on('connection', (ws) => {
  console.log('New WebSocket client connected!');

  ws.on('close', () => {
    console.log('WebSocket client disconnected.');
  });
});

// Listen for RTSP stream events
stream.on('rtsp', () => {
  console.log('RTSP stream connected!');
});

stream.on('close', () => {
  console.log('RTSP stream disconnected.');
});

// Optionally handle errors
stream.on('error', (error) => {
  console.error('Stream error:', error);
});



// const onvif = require('node-onvif');
 
// // Create an OnvifDevice object
// let device = new onvif.OnvifDevice({
//   xaddr: 'http://192.168.1.27:8000/onvif/device_service',
//   user : 'agusfaudin',
//   pass : 'Komponen1!'
// });
 
// // Initialize the OnvifDevice object
// device.init().then(() => {
//   // Get the UDP stream URL
//   let url = device.getUdpStreamUrl();
//   console.log(url);
// }).catch((error) => {
//   console.error(error);
// });