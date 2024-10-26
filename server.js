Stream = require('node-rtsp-stream')
stream = new Stream({
  name: 'name',
  streamUrl: 'rtsp://192.168.1.27:5543/051c6519288cc2d8b07f026902be8c96/live/channel0',
  wsPort: 9999,
  ffmpegOptions: { // options ffmpeg flags
    '-stats': '', // an option with no neccessary value uses a blank string
    '-r': 30 // options with required values specify the value after the key
  }
})


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