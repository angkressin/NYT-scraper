var axios = require("axios");
var cheerio = require("cheerio");
var request = require("request");

// Require all models
var db = require("../models");

// Grab the body of the html with request
module.exports = function(req, res) {
  request("http://www.nytimes.com/", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("article h2").each(function(i, element) {
      var results = {};

      var title = $(this).children("a").text();
      var link = $(this).children("a").attr("href");
      // var summary = $(this).parent("wsj-card").find("span")

      results = {
        title: title,
        link: link,
        // summary: summary
      }
      var hbsArticleObject = {
          articles: results
      };
      console.log(hbsArticleObject)
      return hbsArticleObject;
    });
  })
};
