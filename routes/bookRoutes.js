const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const bookController = require('../controllers/bookController');
const upload = require('../utils/upload');

router.use(auth);

router.post('/', upload.single('coverImage'), bookController.createBook);
router.get('/', bookController.getBooks);
router.get('/:id', bookController.getBookById);
router.put('/:id', bookController.updateBook);
router.delete('/:id', bookController.deleteBook);

module.exports = router;
