const Chat = require('../models/chatModel');
const appError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

// Create a new chat
exports.createChat = catchAsync(async (req, res) => {
  const { user, room, content } = req.body;
  const chat = await Chat.create({ user, room, content });
  res.status(201).json({ message: 'Chat created successfully', chat });
});

// Get all chats
exports.getAllChats = catchAsync(async (req, res) => {
  const chats = await Chat.find();
  res.status(200).json(chats);
});

// Get chat by ID
exports.getChatById = catchAsync(async (req, res) => {
  const chat = await Chat.findById(req.params.id);
  if (!chat) {
    return res.status(404).json({ error: 'Chat not found' });
  }
  res.status(200).json(chat);
});

// Update chat by ID
exports.updateChatById = catchAsync(async (req, res) => {
  const { content } = req.body;
  const chat = await Chat.findByIdAndUpdate(
    req.params.id,
    { content },
    { new: true }
  );
  if (!chat) {
    return res.status(404).json({ error: 'Chat not found' });
  }
  res.status(200).json({ message: 'Chat updated successfully', chat });
});

// Delete chat by ID
exports.deleteChatById = catchAsync(async (req, res) => {
  const chat = await Chat.findByIdAndDelete(req.params.id);
  if (!chat) {
    return res.status(404).json({ error: 'Chat not found' });
  }
  res.status(200).json({ message: 'Chat deleted successfully' });
});
