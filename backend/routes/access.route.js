const express = require('express');
const router = express.Router();

const accessController = require('../controller/access.controller');

router.get('/list', accessController.getAccess)
router.get('/getAccessById/:id', accessController.getAccessById)
router.delete('/delete/:id', accessController.deleteAccessById)
router.post('/create', accessController.create)
router.put('/edit/:id', accessController.edit)

module.exports = router;
