const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const customerSchema = new Schema({
  first_name: { type: String, required: true },
  middle_name: { type: String },
  last_name: { type: String },
  career: { type: String },
  identification: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
  status: { type: Boolean, default: true }
});

const Customers = mongoose.model("customers", customerSchema);
module.exports = Customers;
