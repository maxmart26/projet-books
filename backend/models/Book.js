const mongoose = require('mongoose');

const booksSchema = mongoose.Schema({
  userId: { type: String, required: true},
  title: { type: String, required: true },
  author: { type: String, required: true },
  imageUrl: { type: String, required: true },
  year: { type: Number, required: true },
  genre: { type: String, reguired: true},
  ratings:[{
    grade:{type: Number, required: false}
  }],
  //averageRating:{type: Number, reguired: false},
});

module.exports = mongoose.model('Books', booksSchema);