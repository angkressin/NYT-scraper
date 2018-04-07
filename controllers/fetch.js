var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

// Require all models
var db = require("../models");

// grab and save to db
module.exports = {
  fetch: function(req, res) {
  // identify the content to be saved
  var articleObj = {};
  articleObj.title = req.body.title;
  articleObj.link = req.body.link;
  articleObj.summary = req.body.summary;

  // Create a new Article
  db.Article.create(articleObj)
    .then(function(dbArticle) {
      // View the added result in the console
      console.log("the is the db article" + dbArticle);
      res.json(dbArticle)
    })
    .catch(function(err) {
      // If an error occurred, send it to the client
      return res.json("this is the error:" + err);
    });
}
}
