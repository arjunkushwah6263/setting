const mongoose = require('mongoose');

const airplaneModeSchema = new mongoose.Schema({
  isAirplaneMode: Boolean,
});

const AirplaneMode = mongoose.model('AirplaneMode', airplaneModeSchema);

module.exports = AirplaneMode;