const Books = require('../models/Book');


exports.createBook = (req, res, next) => {
    //delete req.body._id;
    const book = new Books({
        ...req.body
    })
    book.save()
    .then(() => res.status(201).json({ message: 'livre enregistré !'}))
    .catch(error => res.status(400).json({ error }));
  };

exports.getAllBook = (req, res, next) => {
    Books.find()
    .then(things => res.status(200).json(things))
    .catch(error => res.status(400).json({ error }));
  };

exports.getBook = (req, res, next) => {
    Books.findOne({ _id: req.params.id })
      .then(book => res.status(200).json(book))
      .catch(error => res.status(404).json({ error }));
  };

exports.uptateOneBook = (req, res, next) => {
    Books.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Objet modifié !'}))
      .catch(error => res.status(400).json({ error }));
  };

exports.deleteBook = (req, res, next) => {
    Books.deleteOne({ _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
      .catch(error => res.status(400).json({ error }));
  }