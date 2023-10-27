const mongoose = require('mongoose');

const locationModeSchema = new mongoose.Schema({
  isLocationMode: Boolean,
});

const LocationMode = mongoose.model('LocationMode', locationModeSchema);

module.exports = LocationMode;
