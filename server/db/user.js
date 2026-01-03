const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  petsAdopted: Number,
  petsDisappeared: Number,
  status: String
});

const User = mongoose.model('User', userSchema);

module.exports = User;
