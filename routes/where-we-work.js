const express  = require('express');
const router     = express.Router();
var auth    = require('../helpers/auth');


router.get('/where-we-work', function(req, res, next) {
  res.render('where-we-work', { title: 'Find a place where you can help!' });
});




module.exports = router;
