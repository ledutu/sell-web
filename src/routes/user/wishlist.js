var express = require('express');
var router = express.Router();

//import controller
const WishlistController = require('../../controllers/user/WishlistController');

// get home
router.get('/', WishlistController.index);

module.exports = router;