var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home | Omega Beta — Theta Tau' });
});

/* GET Brothers Page */
router.get('/active', function(req, res, next) {
  res.render('active', { title: 'Brothers | Omega Beta — Theta Tau' });
});

/* GET Actives Page. 
router.get('/active', function(req, res, next) {
  res.render('brothers', { title: 'Home | Omega Beta — Theta Tau' });
});

/* GET Alumni Page. */
router.get('/alumni', function(req, res, next) {
  res.render('alumni', { title: 'Home | Omega Beta — Theta Tau' });
});

// /* GET Blog Page. */
// router.get('/blog', function(req, res, next) {
//   res.render('blog', { title: 'Blog | Omega Beta — Theta Tau' });
// });

/* GET Events Page. */
router.get('/events', function(req, res, next) {
  res.render('events', { title: 'Events | Omega Beta — Theta Tau' });
});

/* GET About Page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Us | Omega Beta — Theta Tau' });
});

/* GET Contact Page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Us | Omega Beta — Theta Tau' });
});
router.get('/elements', function(req, res, next) {
  res.render('elements', { title: 'Contact Us | Omega Beta — Theta Tau' });
});

module.exports = router;
