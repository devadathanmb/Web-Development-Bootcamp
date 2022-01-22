//jshint esversion:6
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var ans = num1 + num2;
  // res.send("The answer is " + ans);
  res.send(ans.toString());
});


//What happens when the user goes to this link
app.get("/bmicalculator", function(req, res){
  //Send this file
  res.sendFile(__dirname + "/bmiCalculator.html");
});


//What happens when the user posts the data
app.post("/bmicalculator", function(req, res){
  var height = parseFloat(req.body.height);
  var weight = parseFloat(req.body.weight);
  var bmi = weight/(Math.pow(height, 2));

  //Send a response back to the user
  res.send("Your BMI is " + bmi);
});

app.listen("3000");
