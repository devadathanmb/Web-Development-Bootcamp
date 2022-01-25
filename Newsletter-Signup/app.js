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

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

//Mailchimp ping response
async function run() {
  const response = await mailchimp.ping.get();
  console.log(response);
}
run();

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req, res) {
  const fName = req.body.firstName;
  const lName = req.body.lastName;
  const email = req.body.email;
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
    res.sendFile(__dirname + "/success.html");
    console.log("Successfully added contact. Contact id : " + response.id);
    console.log(res.statusCode);
  }
  run().catch(function(){
    console.log("An error occuered");
    console.log(res.statusCode);
    res.sendFile(__dirname + "/failure.html");});
});

app.post("/failure", function(req, res){
  res.redirect("/");
});

app.listen(process.env.PORT || 3000, function() {
  console.log("Server is up and running on port 3000");
});



// API Key
 // 07c6b868647a6ad628a35e9e2c1ae9f7-us20

// List ID
// c26f8fc02e
