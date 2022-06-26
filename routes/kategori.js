var express = require('express');
var router = express.Router();

const KategoriController = require('../controller/kategori')

router.post('/v1/kategori', KategoriController.tambahKategori)
router.delete('/v1/kategori/:id', KategoriController.deleteKategori)

module.exports = router;