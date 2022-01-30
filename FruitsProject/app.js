const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB");

const fruitSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
  name: "Apple",
  rating: 7,
  review: "Hmmm kind of good"
});

//fruit.save();

const personSchema = new mongoose.Schema({
  name: String,
  age: Number
});

const Person = mongoose.model("Person", personSchema);

const person = new Person({
  name: "John",
  age: 37
});

// person.save();

const kiwi = new Fruit({
  name: "Kiwi",
  score: 2,
  review: "Idk"
});

const orange = new Fruit({
  name: "Orange",
  score: 10,
  review: "Best fruit ever"
});

const banana = new Fruit({
  name: "Banana",
  score: 9,
  review: "banananannananannaanna"
});


// Fruit.insertMany([kiwi, orange, banana], function(err) {
//   if (err) {
//     console.log("error");
//   } else {
//     console.log("Success!!");
//   }
// });

Fruit.find((err, fruits) => {
  if (err) {
    console.log("Error");
  } else {
    mongoose.connection.close();
    fruits.forEach((fruit) => console.log(fruit.name));
  }
});