const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: String,
  description: String,
  coverImage: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  borrower: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    default: null,
  },
  library: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Library",
    default: null,
  },
});

module.exports = mongoose.model("Book", bookSchema);
