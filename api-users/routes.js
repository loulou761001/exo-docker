const express = require('express');
const router = express.Router();
const userService = require("./services/user")

// Define routes
router.get('/', userService.getAllusers);
router.get('/:id', userService.getUserById);
router.post('/', userService.createUser);
router.put('/:id', userService.updateUser);
router.delete('/:id', userService.deleteUser);

module.exports = router;