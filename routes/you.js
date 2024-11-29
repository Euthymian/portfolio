var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('You?');
});

router.get('/cool', function(req, res, next) {
  res.send("You're sooooo fucking cool");
});

module.exports = router;
