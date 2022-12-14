var express = require('express'); 
const route = require('.');
var router = express.Router();

var registerController = require('../app/controllers/RegisterController')

router.use('/', registerController.register)

module.exports = router;