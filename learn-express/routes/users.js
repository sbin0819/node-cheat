var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
  res.send('hello users');
});

router.delete('/', (req, res) => {});

module.exports = router;
