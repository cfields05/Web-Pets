
const { default: axios } = require('axios');
const express = require('express');
const router = express.Router();

const { Pet } = require('../db');

router.patch('/hunger/:val', (req, res) => {
  const { passport } = req.session;
  // console.log(passport);
  // Pet.findOneAndUpdate
});

router.patch('/mood/:val', (req, res) => {
  const { passport } = req.session;
});

router.patch('/love/:val', (req, res) => {
  const { passport } = req.session;
});

module.exports = router;
