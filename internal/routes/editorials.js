const { get, post, update } = require("../src/api/editorials/controller");

module.exports = app => {
  app.get("/editorials", get);
  app.post("/editorials", post);
  app.put("/editorials", update);
};
