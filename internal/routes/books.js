const { get, getOne, post } = require("../src/api/books/controller");

module.exports = app => {
  app.get("/books", get);
  app.get("/books/:id", getOne);
  app.post("/books", post);
};
