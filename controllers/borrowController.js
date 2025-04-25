const Book = require("../models/Book");

exports.borrowBook = async (req, res) => {
  const { bookId } = req.body;
  const book = await Book.findById(bookId);
  if (book.borrower)
    return res.status(400).json({ message: "Book already borrowed" });
  book.borrower = req.user._id;
  await book.save();
  res.json({ message: req.t("BORROW_SUCCESS") });
};

exports.returnBook = async (req, res) => {
  const book = await Book.findById(req.params.id);
  if (!book.borrower?.equals(req.user._id))
    return res.status(403).json({ message: req.t("UNAUTHORIZED") });
  book.borrower = null;
  await book.save();
  res.json({ message: req.t("RETURN_SUCCESS") });
};
