const express = require('express');
const router = express.Router();
const controller = require('../controllers/libraryController');
const auth = require('../middleware/auth');

router.use(auth);
router.get('/', controller.getLibraries);
router.get('/:id', controller.getLibraryById);
router.post('/', controller.createLibrary);
router.put('/:id', controller.updateLibrary);
router.delete('/:id', controller.deleteLibrary);
router.get('/:id/inventory', controller.getInventory);
router.post('/:id/inventory', controller.addBookToInventory);
router.delete('/:id/inventory/:bookId', controller.removeBookFromInventory);

module.exports = router;

