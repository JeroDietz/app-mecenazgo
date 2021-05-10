const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');

router.get('/detailProyect/:id', projectController.detail);

router.get('/createProyect', projectController.createProyect);
router.post('/createProyect', projectController.create);

router.get('/updateProyect/:id', projectController.updateProject);
router.post('/updateProyect/:id', projectController.update);

router.post('/deleteProyect', projectController.delete);

module.exports = router;