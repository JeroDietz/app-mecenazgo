const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/login', userController.login);
router.post('/login', userController.checkUser);

router.get('/register', userController.register);
router.post('/register', userController.createUser);

router.get('/perfil', userController.perfil);

module.exports = router;