//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req, res){
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  console.log(firstName + " " + lastName + " " + email);
});

app.listen(3000, function(){
  console.log("Server is up and running on port 3000");
});


// 07c6b868647a6ad628a35e9e2c1ae9f7-us20
// c26f8fc02e
