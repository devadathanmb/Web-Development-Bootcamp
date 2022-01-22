//jshint esversion:6

const express = require('express');
const app = express();

app.get("/", function(req, res){
  res.send("Hey");
});

app.get("/contact", function(req, res){
  res.send("You can't contact me lol");
});

app.listen(3000, function(){
  console.log("Server started on port 3000");
});

app.get("/about", function(req, res){
  res.send("<h2 style=\"color : blue\">This site is owned by Angela Yu </h2>");
});
