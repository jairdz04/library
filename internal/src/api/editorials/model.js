const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EditorialSchema = new Schema({
  name: { type: String, required: true },
  code: { type: String },
  created_at: { type: Date, default: Date.now },
  status: { type: Boolean, default: true }
});

const Editorials = mongoose.model("editorials", EditorialSchema);
module.exports = Editorials;
