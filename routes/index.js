var express = require('express');
var router = express.Router();

const BukuController = require('../controller/buku')
const KategoriController = require('../controller/kategori')

router.post('/v1/kategori', KategoriController.tambahKategori)
// router.delete('/v1/kategori/:id', KategoriController.dellet)

router.post('/v1/buku', BukuController.tambahBuku)
router.delete('/v1/buku/:id', BukuController.deleteBuku)

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
