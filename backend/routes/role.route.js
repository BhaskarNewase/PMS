const express = require('express');
const router = express.Router();

const roleController = require('../controller/role.controller');

router.post('/create', roleController.create)
router.put('/edit/:id', roleController.edit)
router.get('/list', roleController.list)
router.get('/getRoleById/:id', roleController.getRoleById)
router.delete('/delete/:id', roleController.delete)

module.exports = router;
