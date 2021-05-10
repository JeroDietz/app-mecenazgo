const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');

/* GET home page. */
router.get('/', indexController.home);

/*
router.get('/detailProyect/:id', indexController.detail);

router.get('/login', indexController.login);

router.get('/register', indexController.register);

router.get('/createProyect', indexController.createProyect);
router.post('/createProyect', indexController.create);

router.get('/updateProyect/:id', indexController.updateProject);
router.post('/updateProyect/:id', indexController.update);
*/

module.exports = router;
