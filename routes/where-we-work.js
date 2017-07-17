const express  = require('express');
const router     = express.Router();
var auth    = require('../helpers/auth');


router.get('/where-we-work', function(req, res, next) {
  res.render('map');
});


module.exports = router;
