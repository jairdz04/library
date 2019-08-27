const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const { mongoDB, mongoHost, mongoPort } = require("./environment");

exports.createConnection = () => {
  const mongo_url = `${mongoHost}:${mongoPort}/${mongoDB}`;
  mongoose.connect(`mongodb://${mongo_url}`, {
    useNewUrlParser: true,
    reconnectTries: 30000,
    reconnectInterval: 1000
  });

  const connection = mongoose.connection;
  connection.on("connecting", () => console.log("Connecting to mongodb"));
  connection.on("disconnecting", () =>
    console.log("Disconnecting from mongodb")
  );
  connection.on("disconnected", () => console.log("Disconnected from mongodb"));
  connection.on("close", () => console.log("Mongodb connection closed"));
  connection.on("reconnected", () =>
    console.log("Mongodb connection reconnected")
  );
  connection.on("error", err => console.log(err.message));
  console.log("database connected");
};
