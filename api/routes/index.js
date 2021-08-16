var express = require('express');
var router = express.Router();

// controller_file
const indexController = require('../controller/IndexController');

// routing
router.get('/', indexController.index);

module.exports = router;
