var express = require('express');
var router = express.Router();

//import controller
const CategoryController = require('../../controllers/user/CategoryController');

// get home
router.get('/', CategoryController.index);

module.exports = router;