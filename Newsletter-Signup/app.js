//jshint esversion:8
const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const app = express();
const mailchimp = require("@mailchimp/mailchimp_marketing");
mailchimp.setConfig({
  apiKey: "07c6b868647a6ad628a35e9e2c1ae9f7-us20",
  server: "us20"
});

async function run() {
  const response = await mailchimp.ping.get();
  console.log(response);
}
run();
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req, res) {
  const fName = req.body.firstName;
  const lName = req.body.lastName;
  const email = req.body.email;
  console.log(fName + " " + lName + " " + email);
  const listId = "c26f8fc02e";
  const subscribingUser = {
    firstName: fName,
    lastName: lName,
    email: email
  };
  async function run() {
    const response = await mailchimp.lists.addListMember(listId, {
      email_address: subscribingUser.email,
      status: "subscribed",
      merge_fields: {
        FNAME: subscribingUser.firstName,
        LNAME: subscribingUser.lastName
      }
    });
    // console.log(response);
  }
  run();
  res.sendFile(__dirname + "/success.html");
  run().catch(e => res.sendFile(__dirname + "/failure.html"));
});

// app.post("failure", function(req, res){
//   res.redirect("/");
// });

app.listen(3000, function() {
  console.log("Server is up and running on port 3000");
});


// 07c6b868647a6ad628a35e9e2c1ae9f7-us20
// c26f8fc02e
