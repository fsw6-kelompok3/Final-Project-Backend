var express = require('express');
var router = express.Router();
const authAdmin = require("../middleware/admin")


const BukuController = require('../controller/buku')
const KategoriController = require('../controller/kategori')

router.post('/v1/kategori', KategoriController.tambahKategori)
// router.delete('/v1/kategori/:id', KategoriController.dellet)

router.post('/v1/buku', authAdmin, BukuController.tambahBuku)
router.delete('/v1/buku/:id', authAdmin, BukuController.deleteBuku)



router.use('/auth', require('./users'));

router.use('/transaksi', require('./transaksi'));

module.exports = router;

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/', require('./buku'))
router.use('/', require('./kategori'))
router.use('/auth', require('./users'));

module.exports = router;

