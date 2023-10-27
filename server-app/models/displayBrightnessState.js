const mongoose = require('mongoose');

const displayBrightnessStateSchema = new mongoose.Schema({
  brightness: Number,
  mode: String,
  isAutobrightness: Boolean,
  isEyecomfort: Boolean,
  isAutorotate : Boolean,
  isOsi: Boolean,
});

module.exports = mongoose.model('DisplayBrightnessState', displayBrightnessStateSchema);
