require("dotenv").config();

const {
  PORT,
  ALLOW_ORIGIN,
  MONGO_HOST,
  MONGO_PORT,
  MONGO_DATABASE
} = process.env;

module.exports = {
  origin: ALLOW_ORIGIN,
  appPort: PORT || 3000,
  mongoHost: MONGO_HOST,
  mongoPort: MONGO_PORT,
  mongoDB: MONGO_DATABASE
};
