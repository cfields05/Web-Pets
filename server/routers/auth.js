const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oidc');


const router = express.Router();

router.get('/', (req, res) => { // add 'next' here if needed
  res.send('send login');
});

router.get('/login/federated/google', passport.authenticate('google'));
module.exports = router;