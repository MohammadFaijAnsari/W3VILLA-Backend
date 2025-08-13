const express = require('express');
const router = express.Router();
const { crudaddData, handleallData, handleDeleteData, handleEditData } = require('../controller/crud_controller');

router.post('/add', crudaddData);
router.get('/alldata', handleallData);
router.delete('/delete/:id', handleDeleteData);
router.put('/update', handleEditData);

module.exports = router;
