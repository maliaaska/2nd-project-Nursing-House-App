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
  res.render('editProfileUser');
});


router.post("/editProfileUser", (req, res, next) => {
  var username = req.body.username;
  var password = req.body.password;
  var role = req.body.user;

  if (username === "" || password === "") {
    req.flash('error', 'Indicate username and password' );
    res.render("auth/signup", { "message": req.flash("error") });
    return;
  }

  User.findOne({ username }, "username", (err, user) => {
    // if the user is different from null
    if (user !== null) {
      req.flash('error', 'The username already exists' );
      res.render("auth/signup", { message: req.flash("error") });
      return;
    }

    var salt     = bcrypt.genSaltSync(bcryptSalt);
    var hashPass = bcrypt.hashSync(password, salt);

    // any values you need from form need to be added here
    var newUser = User({
      username : username,
      role: role,
      fullname : req.body.fullname,
      password: hashPass,
    });

    newUser.save((err) => {
      if (err) {
        console.log('error', err)
        req.flash('error', 'The username already exists' );
        res.render("auth/signup", { message: req.flash('error') });
      } else {
       
        passport.authenticate("local")(req, res, function () {
           res.render('secret', { user: req.user });
        });
      }
    });
  });
});


router.get('/editProfileNhome', function(req, res, next) {
  res.render('editProfileNhome');
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
  console.log('user', req.user);
  res.render('secret', { user: JSON.stringify(req.user) });
});

router.get('/admin', auth.checkLoggedIn('You must be login', '/login'), auth.checkCredentials('ADMIN'), function(req, res, next) {
	// console.log(req.user);
  res.render('admin', { user: JSON.stringify(req.user) });
});

module.exports = router;

 // User.find('{name: "Marc", }') (err, users) => {