var express = require('express'); 
const route = require('.');
var router = express.Router();

var newparaController = require('../app/controllers/NewparaController')

router.get('/',newparaController.show)

module.exports = router;