var express = require('express');
var router = express.Router();

//import controller
const UserController = require('../../controllers/user/UserController');

// get home
router.get('/login', UserController.getLogin);
router.get('/register', UserController.getRegister);
router.get('/my-account', UserController.getMyAccount);
router.get('/order-history', UserController.getOrderHistory);
router.get('/order-information', UserController.getOrderInformation);
router.get('/product-return', UserController.getProductReturn);

module.exports = router;