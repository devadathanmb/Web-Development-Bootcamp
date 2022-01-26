const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.get("/", function(req, res){
  res.send("Hello World!");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
  console.log("Server up and running at " + PORT);
})
