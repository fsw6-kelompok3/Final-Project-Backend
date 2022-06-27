var express = require('express');
var router = express.Router();
const multer = require('../middleware/multer')

const BukuController = require('../controller/buku')

router.get('/v1/buku', BukuController.getAllDataBuku)
router.post('/v1/buku', multer.single('gambar'), BukuController.tambahBuku)
router.get('/v1/buku/:id', BukuController.getDataBukuById)
router.put('/v1/buku/:id', multer.single('gambar'), BukuController.editDetailBuku)
router.delete('/v1/buku/:id', BukuController.deleteBuku)

router.get('/v1/cari', BukuController.searchBuku)
router.get('/v1/diminati', BukuController.filterDiminati)

router.patch('/v1/buku/:id/like', BukuController.likeDataBuku)
router.patch('/v1/buku/:id/unlike', BukuController.unlikeDataBuku)

module.exports = router;