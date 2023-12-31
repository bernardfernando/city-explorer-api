//import express from node module
const express = require("express");

//import cors from node module
const cors = require("cors");

//run the config method of dotenv so we can have access to your environment variable
require("dotenv").config();

//tell the server what port to run on
const PORT = process.env.PORT || 8081;

//instanciating our instance of express into the app variable
const app = express();

//Cross-Origin Resource Sharing, cors is the bridge that allows the client to access the serve
//it is called a middle ware
//activate middleware
app.use(cors());

app.get("/", (request, res) => {
  res.send("hello world  gggggg");
});

//import the json data
const data = require("./data/weather.json");

app.get("/weather", (request, res) => {
  res.json(data);
});

function filterByLatandLon(lat, lon) {
  const city_name = data.filter((item) => item.lat == lat && item.lon == lon);
  return city_name;
}

app.get("/city", (request, response) => {
  let dataToReturn = data;
  if (request.query.lat && request.query.lon) {
    dataToReturn = filterByLatandLon(request.query.lat, request.query.lon);
  }
  response.json(dataToReturn);
});

app.listen(PORT, () => console.log(`app is running on port ${PORT}`));
