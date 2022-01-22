//jshint esversion:6
const express = require("express");
const app = express();
const https = require("https");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));




app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
  const query = req.body.cityName;
  const apiKey = "cf174489e767f4d316cbf2d07cb456e0";
  const unit = "metric";
  const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey + "&units=" + unit;
  https.get(url, function(response) {
    console.log(response.statusCode);
    response.on("data", function(data) {
      const weatherData = JSON.parse(data);
      const weatherImageCode = weatherData.weather[0].icon;
      const imageURL = "https://openweathermap.org/img/wn/" + weatherImageCode + "@2x.png";
      const weatherDescription = weatherData.weather[0].description;
      const temperature = weatherData.main.temp;
      console.log(temperature);
      console.log(weatherDescription);
      res.write("<p>The weather is currently " + weatherDescription + " </p>");
      res.write("<h1>The temperature in " + query + " is " + temperature + " degree Celcius</h1>");
      res.write("<img src=" + imageURL + ">");
      res.send();
    });
  });
});




app.listen(3000, function() {
  console.log("The server is running on port 3000");
});
