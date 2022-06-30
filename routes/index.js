var express = require('express');
var router = express.Router();
const authAdmin = require("../middleware/admin")

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/auth', require('./users'));
router.use('/transaksi', require('./transaksi'));
router.use('/', require('./buku'))
router.use('/', require('./kategori'))

module.exports = router;