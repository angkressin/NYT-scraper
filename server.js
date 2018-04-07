var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var routes = require("./routes");

var PORT = 3000;

// Initialize Express
var app = express();

// Set Handlebars.
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Configure middleware

// Use morgan logger for logging requests
app.use(logger("dev"));
// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({ extended: true }));
// Use express.static to serve the public folder as a static directory
app.use(express.static("./public"));

routes.apiRoutes(app);
routes.viewRoutes(app);

// By default mongoose uses callbacks for async queries, we're setting it to use promises (.then syntax) instead
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines");

// Start the server
app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});
