const Library = require("../models/Library");
const Book = require("../models/Book");

exports.getLibraries = async (req, res) => {
  const libraries = await Library.find();
  res.json(libraries);
};

exports.getLibraryById = async (req, res) => {
  const library = await Library.findById(req.params.id).populate({
    path: "books",
    populate: { path: "borrower" },
  });
  res.json(library);
};

exports.createLibrary = async (req, res) => {
  const library = await Library.create(req.body);
  res.status(201).json(library);
};

exports.updateLibrary = async (req, res) => {
  const library = await Library.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(library);
};

exports.deleteLibrary = async (req, res) => {
  await Library.findByIdAndDelete(req.params.id);
  res.json({ message: "Library deleted" });
};

exports.getInventory = async (req, res) => {
  const library = await Library.findById(req.params.id).populate("books");
  res.json(library.books);
};

exports.addBookToInventory = async (req, res) => {
  const library = await Library.findById(req.params.id);
  library.books.push(req.body.bookId);
  await library.save();
  await Book.findByIdAndUpdate(req.body.bookId, { library: library._id });
  res.json({ message: "Book added to inventory" });
};

exports.removeBookFromInventory = async (req, res) => {
  const library = await Library.findById(req.params.id);
  library.books.pull(req.params.bookId);
  await library.save();
  await Book.findByIdAndUpdate(req.params.bookId, { $unset: { library: 1 } });
  res.json({ message: "Book removed from inventory" });
};
