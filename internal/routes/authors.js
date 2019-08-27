const { get, post, update } = require("../src/api/authors/controller");

module.exports = app => {
  app.get("/authors", get);
  app.post("/authors", post);
  app.put("/authors", update);
};
