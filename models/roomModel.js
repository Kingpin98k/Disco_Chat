const mongoose = require('mongoose');

// Define the Room schema
const RoomSchema = new mongoose.Schema({
  name: String,
  organization: { type: mongoose.Schema.Types.ObjectId, ref: 'Organization' },
  // Other room-related fields
});

// Create the Room model
const RoomModel = mongoose.model('Room', RoomSchema);

module.exports = RoomModel;
