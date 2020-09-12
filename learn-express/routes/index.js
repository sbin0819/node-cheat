var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', (req, res) => {
  console.log('third');
  res.render('test', {
    title: 'Express',
    title2: 'Hello',
    fruits: ['apple', 'pear', 'orange'],
  });
});

router.post('/', (req, res) => {});

module.exports = router;
