const express = require('express');

const router = express.Router();

const Book = require('../model/books');
const BookController = require('../controller/books-controller');

router.get('/', BookController.getallBooks);
router.post('/', BookController.addBook);
router.get('/:id', BookController.getbyid);
router.put('/:id', BookController.updateBook);
router.delete('/:id', BookController.deleteBook);


module.exports = router;