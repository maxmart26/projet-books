const express = require('express');
const router = express.Router();
const bookCtrl = require('../controllers/books')


router.get('/', bookCtrl.getAllBook);
router.post('/', bookCtrl.createBook);
router.get('/:id', bookCtrl.getBook);
router.put('/:id', bookCtrl.uptateOneBook);
router.delete('/:id', bookCtrl.deleteBook);

module.exports = router