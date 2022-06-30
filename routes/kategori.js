var express = require('express');
var router = express.Router();
const authAdmin = require("../middleware/admin")

const KategoriController = require('../controller/kategori')

router.post('/v1/kategori', authAdmin, KategoriController.tambahKategori)
router.delete('/v1/kategori/:id', authAdmin, KategoriController.deleteKategori)

module.exports = router;