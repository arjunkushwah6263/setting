const mongoose = require('mongoose');

const connectionAndSharingSchema = new mongoose.Schema({
  isAirplaneMode: Boolean,
  isHotspot: Boolean,
  isBluetooth: Boolean,
});

const ConnectionAndSharing = mongoose.model('ConnectionAndSharing', connectionAndSharingSchema);

module.exports = ConnectionAndSharing;
