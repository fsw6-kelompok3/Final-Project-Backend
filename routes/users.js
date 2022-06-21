var express = require('express');
var router = express.Router();
const AuthController = require('../controller/user')


//registrasi member
router.post('/register/user',AuthController.addUser);

router.post('/register/admin',AuthController.addAdmin);



router.post('/login',AuthController.login);

module.exports = router;
