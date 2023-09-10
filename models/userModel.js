const mongoose = require('mongoose');

// Define the User schema
const UserSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String, // Hashed password
  // Other user-related fields
});

// Create the User model
const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;
