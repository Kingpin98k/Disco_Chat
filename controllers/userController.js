// userController.js
const User = require('../models/userModel');
const appError = require('../utils/appError');

// Create a new user
exports.createUser = async (req, res, next) => {
  try {
    if (!req.body.username || !req.body.email || !req.body.password) {
      return next(new appError('Username, email, and password are required', 400));
    }
    const user = await User.create(req.body);
    res.status(201).json({ message: 'User created successfully', user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Unable to create user' });
  }
};

// Get all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Unable to retrieve users' });
  }
};

// Get user by ID
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Unable to retrieve user' });
  }
};

// Update user by ID
exports.updateUserById = async (req, res) => {
  try {
    const { username, email } = req.body;
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { username, email },
      { new: true } // Return the updated user
    );
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json({ message: 'User updated successfully', user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Unable to update user' });
  }
};

// Delete user by ID
exports.deleteUserById = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Unable to delete user' });
  }
};
