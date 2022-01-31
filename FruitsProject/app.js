const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB");

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    min: 0,
    max: 10
  },
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
  name: "Apple",
  rating: 7,
  review: "Hmmm kind of good"
});

// fruit.save();

const peach = new Fruit({
  name: "Peach",
  rating: 8,
  review: "Kinda sus"
});

// peach.save();
// Fruit.updateOne({
//   _id: "61f7de4360f1e23970323ac3"
// }, {
//   name: "Dragon fruit"
// }, (err) => console.log(err));

// Fruit.deleteOne({
//   _id: "61f7de4360f1e23970323ac3"
// }, (err) => console.log(err));

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favoriteFruit: fruitSchema
});

const pineapple = new Fruit({
  name: "Pineapple",
  score: 8,
  review: "Sussy baka"
})
pineapple.save();

const Person = mongoose.model("Person", personSchema);

const person = new Person({
  name: "Amy",
  age: 12,
  favoriteFruit: pineapple
});
// person.save();
//
// Person.deleteMany({
//   name: "John"
// }, (err) => console.log(err));

const mango = new Fruit({
  name: "Mango",
  score: 10,
  review: "The best!!"
});
mango.save();

const kiwi = new Fruit({
  name: "Kiwi",
  score: 2,
  review: "Idk"
});

kiwi.save();
Person.updateOne({
  name: "John"
}, {
  favoriteFruit: mango
}, (err) => console.log(err));

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
    fruits.forEach((fruit) => console.log(fruit.name));
  }
});