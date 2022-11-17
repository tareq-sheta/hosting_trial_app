// Setup empty JS object to act as endpoint for all routes
projectData = {};
// Require Express to run server and routes
let express = require("express");

// Start up an instance of app
let app = express();

let bodyParser = require("body-parser");

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
let cors = require("cors");
app.use(cors());
/*let axios = require("axios");
app.use(axios);*/
// Initialize the main project folder
app.use(express.static("website"));

// Setup Server
let port = 7777;
app.listen(port, () => {
  console.log(`this is my server\nit is running on the port No. ${port}`);
});

//let myData = [];
app.post("/postDataToEndPoint", function (req, res) {
  projectData = req.body;
});
/*
 *
 *
 */
app.get("/getMyWeatherInfo", function (req, res) {
  res.send(projectData);
  console.log(projectData);
});
