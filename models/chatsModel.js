const mongoose = require('mongoose');

// Define the Chat schema
const ChatSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  room: { type: mongoose.Schema.Types.ObjectId, ref: 'Room' },
  content: String,
  timestamp: { type: Date, default: Date.now },
  // Other chat-related fields
});

// Create the Chat model
const ChatModel = mongoose.model('Chat', ChatSchema);

module.exports = ChatModel;
