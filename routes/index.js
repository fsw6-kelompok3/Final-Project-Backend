var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
router.use('/auth', require('./users'));

router.use('/', require('./buku'))
router.use('/', require('./kategori'))
router.use('/', require('./users'))

module.exports = router;