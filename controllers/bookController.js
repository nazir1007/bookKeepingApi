const Book = require("../models/Book");
const uploadImage = require("../utils/upload");

exports.getBooks = async (req, res) => {
  const books = await Book.find()
    .populate("author")
    .populate("borrower")
    .populate("library");
  res.json(books);
};

exports.getBookById = async (req, res) => {
  const book = await Book.findById(req.params.id)
    .populate("author")
    .populate("borrower")
    .populate("library");
  if (!book) return res.status(404).json({ message: "Book not found" });
  res.json(book);
};


exports.createBook = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const imageUrl = `/uploads/${req.file.filename}`;
    const book = await Book.create({ ...req.body, coverImage: imageUrl });
    res.status(201).json(book);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


exports.updateBook = async (req, res) => {
  const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(book);
};

exports.deleteBook = async (req, res) => {
  await Book.findByIdAndDelete(req.params.id);
  res.json({ message: "Book deleted"});
};
