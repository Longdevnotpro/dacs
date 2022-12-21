var express = require('express'); 
const route = require('.');
var router = express.Router();


var homeController = require('../app/controllers/HomeController')


router.get('/admin/delete/:id', homeController.delete);

router.put('/admin/edit/:id', homeController.update)

router.get('/admin/:id/edit',homeController.edit)

router.post('/admin/store',homeController.store)
router.get('/admin/add',homeController.add)

router.get('/profile',homeController.setting_profile)

router.get('/admin', homeController.admin)
router.get('/newpara/:page', homeController.newpara);
router.get('/noidung',homeController.results)
router.get('/',homeController.show)

module.exports = router;