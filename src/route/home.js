var express = require('express'); 
const route = require('.');
var router = express.Router();

var homeController = require('../app/controllers/HomeController')

router.use('/profile',homeController.setting_profile)

router.use('/admin', homeController.admin)
router.use('/newpara',homeController.newpara)

router.use('/',homeController.show)

module.exports = router;