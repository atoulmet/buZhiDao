var express = require("express");
var bodyParser = require("body-parser");
var app = express();
require("dotenv").config();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.listen(process.env.PORT || 3000);

// Server frontpage
app.get("/", function(req, res) {
  res.send("This is BuZhiDao Server");
});

// Facebook Webhook
app.get("/webhook", function(req, res) {
  if (req.query["hub.verify_token"] === process.env.VERIFY_TOKEN) {
    res.send(req.query["hub.challenge"]);
  } else {
    res.send("Invalid verify token");
  }
});
