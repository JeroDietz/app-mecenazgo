const express = require('express');
const { check, body } = require('express-validator');
const router = express.Router();
const userController = require('../controllers/userController');


router.get('/login', userController.login);
router.post('/login', userController.chequeoUser);

router.get('/register', userController.register);
router.post('/register', [
    check('email').isEmail().withMessage('Debes ingresar un email valido')
] , userController.createUser);

router.get('/perfil', userController.perfil);

module.exports = router;