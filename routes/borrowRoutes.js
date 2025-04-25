const express = require('express');
const router = express.Router();
const controller = require('../controllers/borrowController');
const auth = require('../middleware/auth');

router.use(auth);
router.post('/borrow', controller.borrowBook);
router.put('/return/:id', controller.returnBook);

module.exports = router;
