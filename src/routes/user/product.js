var express = require('express');
var router = express.Router();

//import controller
const ProductController = require('../../controllers/user/ProductController');

// get home
router.get('/:id', ProductController.index);

module.exports = router;