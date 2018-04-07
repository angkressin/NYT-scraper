var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var scrape = require("../../scripts/scrape.js")
var fetch = require("../../controllers/fetch.js")
var headline = require("../../controllers/headline.js")
var savedHeadline = headline.saved

// Initialize Express
var app = express();

module.exports = (app) => {
// GET route to render the default view
app.get("/", function(req, res) {
  res.render("home");
});
// GET route for the scrape
app.post("/scrape", function(req, res) {
  res.render("home", scrape);
});

app.get("/saved-articles", function(req, res) {
  res.render("saved", savedHeadline);
});

return app;
}
