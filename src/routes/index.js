const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/signup', (req, res, next) => {
  res.render('signup');
});

router.post('/signup', passport.authenticate('local-signup', {
  successRedirect: '/profile',
  failureRedirect: '/signup',
  passReqToCallback: true
})); 

router.get('/signin', (req, res, next) => {
  res.render('signin');
});


router.post('/signin', passport.authenticate('local-signin', {
  successRedirect: '/profile',
  failureRedirect: '/signin',
  passReqToCallback: true
}));

router.get('/logout', (req, res, next) => {
  req.logout();
  res.redirect('/');
});

router.get('/profile',isAuthenticated, (req, res, next) => {
  res.render('profile');
});


router.get('/control', (req, res, next)=>{
  res.render('control');
});

router.get('/informacion', (req, res, next)=>{
  res.render('informacion');
});

router.get('/sableb', (req, res, next)=>{
  res.render('sableb');
});

router.get('/sablen', (req, res, next)=>{
  res.render('sablen');
});

router.get('/inicio', (req, res, next)=>{
    res.render('inicio');
});

router.get('/chocolate', (req, res, next)=>{
  res.render('chocolate');
});

router.get('/hurones', (req, res, next)=>{
    res.render('hurones');
});

router.get('/champan', (req, res, next)=>{
  res.render('champan');
});

router.get('/canela', (req, res, next)=>{
  res.render('canela');
});

router.get('/albino', (req, res, next)=>{
  res.render('albino');
});

router.get('/plata', (req, res, next)=>{
  res.render('plata');
});

router.get('/prueba', (req, res, next)=>{
  res.render('prueba');
});

router.get('/nosotros', (req, res, next)=>{
  res.render('nosotros');
});

router.get('/styles', (req, res, next)=>{
  res.render('styles');
});


function isAuthenticated(req, res, next) {
  if(req.isAuthenticated()) {
    return next();
  }
  res.redirect('/')
}

module.exports = router;