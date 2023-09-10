const mongoose = require('mongoose');

// Define the Membership schema
const MembershipSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  room: { type: mongoose.Schema.Types.ObjectId, ref: 'Room' },
  // Other membership-related fields (e.g., role, permissions)
});

// Create the Membership model
const MembershipModel = mongoose.model('Membership', MembershipSchema);

module.exports = MembershipModel;
