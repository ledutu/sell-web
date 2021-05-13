var express = require('express');

function index(request, response){
    response.render('user/cart');
}

function getCheckout(request, response){
    response.render('user/checkout');
}

module.exports = {
    index,
    getCheckout,
}