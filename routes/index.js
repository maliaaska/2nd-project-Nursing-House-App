var express = require('express');
var router  = express.Router();
var auth    = require('../helpers/auth');
const User  = require("../models/user");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/where-we-work', function(req, res, next) {
  res.render('where-we-work');
});


router.get('/editProfileUser', function(req, res, next) {
  var user = req.user
  res.render('editProfileUser',{user});
});


router.post("/editProfileUser", (req, res, next) => {
  // var userId = req.user
  console.log("inside post", req.user._id)
   var userId = req.user._id
  var update = {
    age: req.body.age,
    
  }
  console.log(update)

  User.findByIdAndUpdate({ _id: userId }, update, (err, user) => {
    // if the user is different from null
    if (err) {return next(err);
    } else {
      console.log("secret",user)
      res.render("secret",{user})
    }
  });
});


//to display the volunteers database
router.get('/volunteersDatabase', function (req, res, next) {
  User.find({}, (err, users) => {
    if (err) {return next(err) }
      console.log(users)
    res.render('volunteersDatabase', {users});
  });
});



router.get('/secret', auth.checkLoggedIn('You must be login', '/login'), function(req, res, next) {
  var user = req.user
  console.log('user', req.user);
  res.render('secret', {user});
});

router.get('/admin', auth.checkLoggedIn('You must be login', '/login'), auth.checkCredentials('ADMIN'), function(req, res, next) {
	// console.log(req.user);
  res.render('admin', { user: JSON.stringify(req.user) });
});

module.exports = router;

 // User.find('{name: "Marc", }') (err, users) => {