var express = require('express');
const { User } = require('../models');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  User.findAll()
    .then((users) => {
      res.render('sequelize', { title: 'Express', users });
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });
});

module.exports = router;
