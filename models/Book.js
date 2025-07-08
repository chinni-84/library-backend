
const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  status: {
    type: String,
    default: 'available'
  },
  issuedTo: String
});

module.exports = mongoose.model('Book', bookSchema);
