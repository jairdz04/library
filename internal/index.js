const express = require("express");
const app = express();
const cors = require("cors");
const database = require("./config/database");
const { appPort, origin } = require("./config/environment");
const body_parser = require("body-parser");

const cors_options = {
  origin,
  optionSuccessStatus: 200
};

app.use(cors(cors_options));
app.use(body_parser.json());
app.use((req, res, next) => {
  res.removeHeader("X-Powered-By");
  next();
});

require("./router")(app);

app.listen(appPort, () => {
  console.log(`Server running on port ${appPort}`);
  database.createConnection();
});

