var express = require('express');
var router = express.Router();
var { User } = require('../models');

/* GET users listing. */
router.get('/', function (req, res, next) {
  User.findAll()
    .then((users) => {
      res.json(users);
    })
    .catch((e) => {
      console.log(e);
      next(e);
    });
});

//  Post /users
router.post('/', (req, res, next) => {
  User.create({
    name: req.body.name,
    age: req.body.age,
    married: req.body.married,
  })
    .then((result) => {
      console.log(result);
      res.status(201).json(result);
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });
});

module.exports = router;
