//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
const _ = require("lodash");
const mongoose = require("mongoose");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

const workItems = [];

//Creating a new DB
mongoose.connect("mongodb+srv://admin-me:HJfhdJLZ8808ypIk@cluster0.j354x.mongodb.net/todolistDB");

//Creating a schema for the collection
const itemSchema = new mongoose.Schema({
  name: String
});

//Creating a model of that Schema
const Item = mongoose.model("Item", itemSchema);

//Creating a document formt that model
const item1 = new Item({
  name: "Welcome to the to do list"
});
const item2 = new Item({
  name: "Hit + to add a new item"
});
const item3 = new Item({
  name: "<--- Hit here to delete an item"
});

const defaultItems = [item1, item2, item3];

const listSchema = {
  name: String,
  items: [itemSchema]
};

const List = mongoose.model("List", listSchema);

app.get("/", function(req, res) {
  Item.find({}, (err, foundItems) => {
    if (foundItems.length === 0) {
      Item.insertMany(defaultItems, (err) => {
        if (err) {
          console.log("Error", err);
        } else {
          console.log("Successfully added items to the DB");
        }
      });
    }
    res.render("list", {
      listTitle: "Today",
      newListItems: foundItems
    });
  });
});

app.post("/", function(req, res) {
  const listName = req.body.list;
  const itemName = req.body.newItem;
  const item = new Item({
    name: itemName
  });
  if (listName == "Today") {
    item.save();
    res.redirect("/");
  } else {
    List.findOne({
      name: listName
    }, (err, foundList) => {
      foundList.items.push(item);
      foundList.save();
      res.redirect("/" + listName);
    });
  }
});

app.post("/delete", (req, res) => {
  const checkedItemId = req.body.checkbox;
  const listName = req.body.listName;
  if (listName === "Today") {
    Item.deleteOne({
      _id: checkedItemId
    }, (err) => {
      if (err) {
        console.log("Error", err);
      } else {
        console.log("Successfully deleted item from DB");
      }
    });
    res.redirect("/");
  } else {
    List.findOneAndUpdate({
      name: listName
    }, {
      $pull: {
        items: {
          _id: checkedItemId
        }
      }
    }, (err, foundList) => {
      if (!err) {
        res.redirect("/" + listName);
      }
    });
  }
});

app.get("/:category", (req, res) => {
  const customListName = _.capitalize((req.params.category));
  List.findOne({
      name: customListName
    },
    (err, foundList) => {
      if (!foundList) {
        const list = new List({
          name: customListName,
          items: defaultItems
        });
        list.save();
        res.redirect("/" + customListName);
      } else {
        res.render("list", {
          listTitle: customListName,
          newListItems: foundList.items
        });
      }
    })
});

app.get("/about", function(req, res) {
  res.render("about");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
  console.log("Server started on port " + PORT);
});