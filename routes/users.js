var express = require('express');
var router = express.Router();
const multer = require('../middleware/multer')

const UserController = require('../controller/user')

router.post('/v1/user', multer.single('foto'), UserController.tambahUser)
router.get('/v1/user/:id', UserController.getDataUserById)
router.put('/v1/user/:id', multer.single('foto'), UserController.editDetailUser)
router.delete('/v1/user/:id', UserController.deleteUser)

module.exports = router;
