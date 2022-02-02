const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");


const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));


mongoose.connect("mongodb://localhost:27017/wikiDB");

const articlesSchema = new mongoose.Schema({
  title: String,
  content: String,
});

const Article = new mongoose.model("article", articlesSchema);

//////////////////////////////////////////Requests targeting all articles
app.route("/articles")
  .get((req, res) => {
    Article.find({}, (err, foundArticles) => {
      if (!err) {
        res.send(foundArticles);
      } else {
        res.send(err);
      }
    });
  })
  .post((req, res) => {
    const newArticle = new Article({
      title: req.body.title,
      content: req.body.content
    });
    newArticle.save((err) => {
      if (err) {
        res.send(err);
      } else {
        res.send("Successfully added a new article!");
      }
    });
  })
  .delete((req, res) => {
    Article.deleteMany({}, (err) => {
      if (err) {
        res.send(err);
      } else {
        res.send("Successfully deleted all articles!");
      }
    });
  });


////////////////////////////////////////Requests targeting a specific article
app.route("/articles/:articleTitle")
  .get((req, res) => {
    Article.findOne({
      title: req.params.articleTitle
    }, (err, article) => {
      if (err) {
        res.send(err);
      } else {
        res.send(article);
      }
    });
  })
  .put((req, res) => {
    Article.replaceOne({
      title: req.params.articleTitle
    }, {
      title: req.body.title,
      content: req.body.content
    }, {
      overwrite: true
    }, (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send("Successfully updated article");
      }
    });
  })
  .patch((req, res) => {
    Article.updateOne({
      title: req.body.title,
      content: req.body.content
    }, (err) => {
      if (err) {
        re.send(err)
      } else {
        res.send("Successfully updated article");
      }
    })
  })
  .delete((req, res) => {
    Article.deleteOne({
      title: req.body.title
    }, (err) => {
      if (err) {
        res.send(err);
      } else {
        res.send("Successfully deleted");
      }
    });
  });


//////////////////////////////////////
app.listen(3000, () => {
  console.log("Server up and running at port 3000");
})