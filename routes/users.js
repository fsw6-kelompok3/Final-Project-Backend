var express = require('express');
var router = express.Router();

const multer = require('../middleware/multer')

const UserController = require('../controller/user')

//registrasi member
router.post('/register/user', UserController.addUser);
router.post('/register/admin', UserController.addAdmin);

router.post('/login', UserController.login);

router.post('/v1/user', multer.single('foto'), UserController.addUser)
router.get('/v1/user/:id', UserController.getDataUserById)
router.put('/v1/user/:id', multer.single('foto'), UserController.editDetailUser)
router.delete('/v1/user/:id', UserController.deleteUser)

module.exports = router;
