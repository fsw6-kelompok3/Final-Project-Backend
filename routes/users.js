var express = require('express');
var router = express.Router();
const multer = require('../middleware/multer')

const authAdmin = require("../middleware/admin")
const authUser = require("../middleware/user")

const UserController = require('../controller/user')

//registrasi member
router.post('/register/user', UserController.addUser);
router.post('/register/admin', UserController.addAdmin);

router.post('/login', UserController.login);

router.get('/v1/admin', authAdmin, UserController.getDataUserById)
router.get('/v1/user', authUser, UserController.getDataUserById)

router.put('/v1/admin', authAdmin, multer.single('foto'), UserController.editDetailUser)
router.put('/v1/user', authUser, multer.single('foto'), UserController.editDetailUser)

router.delete('/v1/admin/:id', authAdmin, UserController.deleteUser)
router.delete('/v1/user/:id', authUser, UserController.deleteUser)

module.exports = router;
