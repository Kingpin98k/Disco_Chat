// userRoutes.js
const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.post('/create', userController.createUser);
router.get('/all', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.patch('/:id', userController.updateUserById); // Use PATCH for updates
router.delete('/:id', userController.deleteUserById);

module.exports = router;
