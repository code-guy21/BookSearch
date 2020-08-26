const db = require("../models");

module.exports = {
  findAll: (req, res) => {
    db.Book.find({})
      .then((dbModel) => {
        res.json(dbModel);
      })
      .catch((err) => {
        res.json(err);
      });
  },
  findOne: (req, res) => {
    db.Book.find({ bookId: req.params.id })
      .then((dbModel) => {
        res.json(dbModel);
      })
      .catch((err) => {
        res.json(err);
      });
  },
  create: (req, res) => {
    db.Book.create(req.body)
      .then((dbModel) => {
        res.json(dbModel);
      })
      .catch((err) => {
        res.json(err);
      });
  },
  remove: (req, res) => {
    db.Book.deleteOne({ _id: req.params.id })
      .then((dbModel) => {
        res.json(dbModel);
      })
      .catch((err) => {
        res.json(err);
      });
  },
};
