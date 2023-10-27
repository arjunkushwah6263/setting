const mongoose = require('mongoose');

const soundAndVibrationSchema = new mongoose.Schema({
  mediaVolume: Number,
  ringtoneVolume: Number,
  alarmVolume: Number,
  notificationVolume: Number,
  soundMode: String,
});

module.exports = mongoose.model('SoundAndVibration', soundAndVibrationSchema);
