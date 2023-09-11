// roomController.js
const Room = require('../models/roomModel');
const Chats = require('../models/chatsModel')
const appError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

// Create a new room
exports.createRoom = catchAsync(async (req, res, next) => {
  try {
    if (!req.body.name || !req.body.organization) {
      return next(new appError('Name and organization are required', 400));
    }
    const room = await Room.create(req.body);
    res.status(201).json({ message: 'Room created successfully', room });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Unable to create room' });
  }
});

// Get all rooms
exports.getAllRooms = catchAsync(async (req, res) => {
  try {
    const rooms = await Room.find();
    res.status(200).json(rooms);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Unable to retrieve rooms' });
  }
});

// Get room by ID
exports.getRoomById = catchAsync(async (req, res) => {
  try {
    const room = await Room.findById(req.params.id);
    if (!room) {
      return res.status(404).json({ error: 'Room not found' });
    }
    const chats = await Chat.find({room : room._id})
    const completeRoom = { room }
    completeRoom.chats = chats
    res.status(200).json(completeRoom);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Unable to retrieve room' });
  }
});

// Update room by ID
exports.updateRoomById = catchAsync(async (req, res) => {
  try {
    const { name, organization } = req.body;
    const room = await Room.findByIdAndUpdate(
      req.params.id,
      { name, organization },
      { new: true }
    );
    if (!room) {
      return res.status(404).json({ error: 'Room not found' });
    }
    res.status(200).json({ message: 'Room updated successfully', room });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Unable to update room' });
  }
});

// Delete room by ID
exports.deleteRoomById = catchAsync(async (req, res) => {
  try {
    const room = await Room.findByIdAndDelete(req.params.id);
    if (!room) {
      return res.status(404).json({ error: 'Room not found' });
    }
    res.status(200).json({ message: 'Room deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Unable to delete room' });
  }
});
