const express = require('express');
const userController = require('../Controller/userController.js');

const router = express.Router();

router.get('/users', userController.getAllUsers);
router.get('/users/:email', userController.getUserByEmail);
router.post('/users', userController.createUser);
router.put('/edituser/:email', userController.updateUser);
router.delete('/deleteuser/:email', userController.deleteUser);

module.exports = router;
