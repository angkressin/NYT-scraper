var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

// Require all models
var db = require("../models");

module.exports = {
// finding the saved articles
saved: function(req, res) {
  // Grab every document in the Articles collection
  db.Article.findAll({})
    .then(function(dbArticle) {
      console.log("here are the found articles: " + dbArticle)
      var hbsArticleObject = {
        articles: dbArticle
      };
      // // If we were able to successfully find Articles, send them back to the client
      // res.json(dbArticle);
      return hbsArticleObject;
    })
    .catch(function(err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
},
// Route for deleting articles
deleteArticle: function(req, res) {
  db.Article.findOneAndDelete({ _id: req.params.id })
  .then(function(delItem) {
    console.log("delete note item: " + delItem)
  })
  .catch(function(err) {
    console.log(err)
  })
}

}
