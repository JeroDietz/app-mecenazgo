const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');

/* GET home page. */
router.get('/', indexController.home);
router.get('/login', indexController.login);
router.get('/register', indexController.register);
router.get('/createProyect', indexController.createProyect);

module.exports = router;