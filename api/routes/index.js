var express = require('express');
var router = express.Router();

// controller_file
const indexController = require('../controller/IndexController');
const taskController = require('../controller/TaskController');

// routing
router.get('/api', indexController.index);
router.get('/api/tasks', taskController.index);
router.post('/api/tasks/store', taskController.store);

module.exports = router;
