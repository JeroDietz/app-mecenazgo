const express = require('express');
const { check, body } = require('express-validator');
const router = express.Router();
const userController = require('../controllers/userController');

const validationLogin = require('../validations/loginValidation');


router.get('/login', userController.login);
router.post('/login', validationLogin , userController.chequeoUser);

router.get('/register', userController.register);
router.post('/register', userController.createUser);

router.get('/perfil', userController.perfil);

router.get("/logout", userController.logOut);

module.exports = router;