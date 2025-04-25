const express = require("express");
require("dotenv").config();
const { i18nMiddleware } = require("./config/i18n");
const connectDB = require("./config/mongoose");


const userRoutes = require("./routes/userRoutes");
const bookRoutes = require("./routes/bookRoutes");
const libraryRoutes = require("./routes/libraryRoutes");
const borrowRoutes = require("./routes/borrowRoutes");

const app = express();
app.use(i18nMiddleware);
app.use(express.json());
app.use('/uploads', express.static('uploads'));


app.use("/api/users", userRoutes);
app.use("/api/books", bookRoutes);
app.use("/api/libraries", libraryRoutes);
app.use("/api", borrowRoutes);

connectDB().then(() => {
  app.listen(5000, () => console.log("Server running on port 5000"));
});
