// roomRoutes.js
const express = require('express');
const roomController = require('../controllers/roomController');

const router = express.Router();

router.post('/', roomController.createRoom);
router.get('/', roomController.getAllRooms);
router.get('/:id', roomController.getRoomById);
router.patch('/:id', roomController.updateRoomById);
router.delete('/:id', roomController.deleteRoomById);

module.exports = router;
