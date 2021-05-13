var express = require('express');
var router = express.Router();

//import controller
const CartController = require('../../controllers/user/CartController');

// get home
router.get('/', CartController.index);
router.get('/checkout', CartController.getCheckout);

module.exports = router;