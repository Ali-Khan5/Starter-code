

const express = require("express");
const bodyParser = require("body-parser");
// create express app
const app = express();

const cors = require('cors');
const cocoSsd = require('@tensorflow-models/coco-ssd');
const tf = require('@tensorflow/tfjs-node');
const fs = require('fs').promises;
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(bodyParser.json());
//
app.use(express.static(__dirname + "/public"));

//for cors
app.use(cors());
app.options('*', cors());


// define a simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Object Detect app " });
});



// //makes a get request
// app.get("/predict", function(req, res) {
//   // Load the Coco SSD model and image.
// Promise.all([cocoSsd.load(), fs.readFile('image1.jpg')])
// .then((results) => {
//   // First result is the COCO-SSD model object.
//   const model = results[0];
//   // Second result is image buffer.
//   const imgTensor = tf.node.decodeImage(new Uint8Array(results[1]), 3);
//   // Call detect() to run inference.
//   return model.detect(imgTensor);
// })
// .then((predictions) => {
//   console.log(JSON.stringify(predictions, null, 2));
  
// }).then(data=>{
//   return res.send(JSON.stringify(data, null, 2))
// });
// });

  





const port = process.env.PORT || 5000;
// listen for requests
app.listen(port, () => console.log(`Listening on port ${port}`));
