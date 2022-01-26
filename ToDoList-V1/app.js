const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const items = ["Buy vegetables", "Cook Food", "Eat Food"];
const workItems = [];
const app = express();
app.use(bodyParser.urlencoded());
app.use(express.static(__dirname + "/public/"));
app.set("view engine", "ejs");
app.get("/", function(req, res) {

  let day = date.getDate();
  res.render("list", {
    listTitle: day,
    newListItems: items
  });
});

app.post("/", function(req, res) {
  let item = req.body.newItem;
  if (req.body.list === "Work List") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }

})

app.get("/work", function(req, res) {
  res.render("list", {
    listTitle: "Work List",
    newListItems: workItems
  });
});

app.post("/work", function(req, res) {
  let item = req.body.newItem;
  workItems.push(item);
  res.redirect("/work");
});

app.get("/about", function(req, res) {
  res.render("about");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
  console.log("Server up and running at " + PORT);
})