const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, enum: ["Author", "Borrower"] },
  preferredLanguage: { type: String, enum: ["en", "hi"], default: "en" },
});

module.exports = mongoose.model("User", userSchema);
