var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Define route for test creating a zone
router.get('/createzone', function(req, res, next) {
  res.render('createzone', null);
});

// Define route for test creating a comment
router.get('/createcomment', function(req, res, next) {
  res.render('createcomment', null);
});

module.exports = router;
