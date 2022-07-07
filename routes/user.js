const express = require('express'); //import express
const router  = express.Router(); 
const userController = require('../controllers/user'); 
router.post('/user', userController.newUser); 
router.get('/user/:id', userController.getUserById); 
router.delete('/user/:id', userController.deleteUserById); 

module.exports = router;