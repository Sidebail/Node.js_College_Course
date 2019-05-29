var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Lab 3 stuff' });
});

router.get('/aboutme', function(req, res, next) {
  res.render('aboutme', { 
    title: 'About me page',
    age: 19,
    likes: 'games'
  });
});

router.get('/dad', function(req, res, next) {
  res.render('dad', { 
    title: 'About dad page',
    age: 51,
    likes: 'music'
  });
});

router.get('/mum', function(req, res, next) {
  res.render('mum', { 
    title: 'About mum page',
    age: 45,
    likes: 'when everything is tidy'
  });
});

router.get('/sister', function(req, res, next) {
  res.render('sister', { 
    title: 'About sister page',
    age: 12,
    likes: 'cute animals and video bloggers'
  });
});


module.exports = router;
