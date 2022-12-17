var express = require('express'); 
const route = require('.');
var router = express.Router();

var siteController = require('../app/controllers/SiteController')

router.get('/noidung', siteController.results)

router.get('/',siteController.index)

module.exports = router;