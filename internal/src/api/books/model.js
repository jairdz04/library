const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const booksSchema = new Schema({
  isbn: { type: String, required: true },
  name: { type: String, required: true },
  code: { type: String },
  author: { type: String, required: true },
  year: { type: String },
  edition: { type: String },
  editorial: { type: String, required: true },
  description: { type: String },
  quantity: { type: Number, required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
  status: { type: Boolean, default: true }
});

const Books = mongoose.model("books", booksSchema);
module.exports = Books;
