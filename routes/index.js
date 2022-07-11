var express = require('express');
var router = express.Router();
const authAdmin = require("../middleware/admin")

/* GET home page. */
router.get('/index', function (req, res, next) {
  res.json({ message: "SecondHand Deploy Success" })
});

router.use('/auth', require('./users'));
router.use('/transaksi', require('./transaksi'));
router.use('/', require('./buku'))
router.use('/', require('./kategori'))

module.exports = router;