var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET Brothers Page */
router.get('/brothers', function(req, res, next) {
  res.render('brothers', { title: 'Express' });
});
/* GET Actives Page. 
router.get('/active', function(req, res, next) {
  res.render('brothers', { title: 'Express' });
});
/* GET Alumni Page. 
router.get('/alumni', function(req, res, next) {
  res.render('brothers', { title: 'Express' });
});
/* GET Blog Page. */
router.get('/blog', function(req, res, next) {
  res.render('blog', { title: 'Express' });
});
/* GET Events Page. */
router.get('/events', function(req, res, next) {
  res.render('events', { title: 'Express' });
});
/* GET About Page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Express' });
});
/* GET Contact Page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Express' });
});

module.exports = router;
