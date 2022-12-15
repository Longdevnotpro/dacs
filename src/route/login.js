var express = require('express'); 
const route = require('.');
var router = express.Router();

var loginController = require('../app/controllers/LoginController')

router.get('/',loginController.dangnhap)

module.exports = router;