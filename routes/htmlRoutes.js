/* eslint-disable no-unused-vars */
var db = require("../models");
var path = require("path");
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    if (req.user) {
      res.redirect("user");
    }
    res.render("index");
  });
  // Loads Login page
  app.get("/login", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/user");
    }
    res.render("login");
  });

  // Load USER page
  // app.get("/user", isAuthenticated, function(req, res) {
  //   db.Group.findAll({}).then(function(dbGroup) {
  //     res.render("user", {
  //       groups: dbGroup
  //     });
  //   });
  // });
  app.get("/user", isAuthenticated, function(req, res) {
    res.render("user");
  });

  // Load GROUP page
  app.get("/group/:id", isAuthenticated, function(req, res) {
    res.render("group");
  });

  // Load EVENT page
  app.get("/event/:id", isAuthenticated, function(req, res) {
    res.render("event");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
