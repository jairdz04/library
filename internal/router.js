module.exports = app => {
  require("./routes/books")(app);
  require("./routes/authors")(app);
  require("./routes/editorials")(app);
};
