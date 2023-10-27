const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
  isLocation: Boolean,
});

const Location = mongoose.model('Location', locationSchema);

module.exports = Location;