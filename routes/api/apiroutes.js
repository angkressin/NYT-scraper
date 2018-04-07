var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var scrape = require("../../scripts/scrape.js")
var fetch = require("../../controllers/fetch.js")
var headline = require("../../controllers/headline.js")
var note = require("../../controllers/note.js")

var fetchArticles = fetch.fetch
var savedHeadline = headline.saved
var deletedHeadline = headline.deleteArticle
var popNote = note.popNote
var updateNote = note.updateNote
var deletedNote = note.deleteNote

// Initialize Express
var app = express();

// Routes

module.exports = (app) => {
  // POST route to send the saved items
  app.post("/save", fetchArticles);

  // a GET route for the saved/selected articles
  // app.get("/savedArticles", savedHeadline);

  // a POST route to delete the article
  app.post("/deleteArticles/:id", deletedHeadline)

  // a GET route for the notes
  app.get("/savedArticles/:id", popNote)

  // a POST route for saving and updating notes
  app.post("/savedArticles/:id", updateNote)

  // a POST route to delete the notes
  app.post("/notes/:id", deletedNote)

  return app;
};
