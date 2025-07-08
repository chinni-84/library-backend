
const express = require('express');
const router = express.Router();
const Book = require('../models/Book');

router.post('/', async (req, res) => {
    const book = new Book(req.body);
    await book.save();
    res.send('Book added');
});

router.get('/', async (req, res) => {
    const books = await Book.find();
    res.json(books);
});

router.delete('/:id', async (req, res) => {
    await Book.findByIdAndDelete(req.params.id);
    res.send('Book deleted');
});

router.put('/issue/:id', async (req, res) => {
    await Book.findByIdAndUpdate(req.params.id, {
        status: 'issued',
        issuedTo: req.body.username
    });
    res.send('Book issued');
});

router.put('/return/:id', async (req, res) => {
    await Book.findByIdAndUpdate(req.params.id, {
        status: 'available',
        issuedTo: ''
    });
    res.send('Book returned');
});

module.exports = router;
