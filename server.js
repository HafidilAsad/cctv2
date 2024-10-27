const express = require('express');
const cors = require('cors');
const Stream = require('node-rtsp-stream');

const app = express();

// Gunakan middleware CORS
app.use(cors()); // Mengizinkan semua sumber

const stream = new Stream({
  name: 'name',
  streamUrl: 'rtsp://192.168.1.27:5543/051c6519288cc2d8b07f026902be8c96/live/channel0',
  wsPort: 9911,
  ffmpegOptions: {
    '-stats': '',
    '-r': 30
  }
});

// Jalankan server (misalnya pada port 3000)
app.listen(9912, () => {
  console.log('Server running on port 3000');
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