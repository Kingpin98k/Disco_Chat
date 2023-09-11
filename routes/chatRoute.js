const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');

// Create a new chat
router.post('/', chatController.createChat);

// Get all chats
router.get('/', chatController.getAllChats);

// Get chat by ID
router.get('/:id', chatController.getChatById);

// Update chat by ID
router.patch('/:id', chatController.updateChatById);

// Delete chat by ID
router.delete('/:id', chatController.deleteChatById);

module.exports = router;
