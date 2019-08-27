const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Author = new Schema({
  first_name: { type: String, required: true },
  middle_name: { type: String },
  last_name: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
  status: { type: Boolean, default: true }
});

const Authors = mongoose.model("authors", Author);
module.exports = Authors;
