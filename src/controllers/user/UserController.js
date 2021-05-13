var express = require('express');

function getLogin(request, response){
    response.render('user/login');
}

function getRegister(request, response){
    response.render('user/register');
}

function getMyAccount(request, response){
    response.render('user/my-account');
}

function getOrderHistory(request, response){
    response.render('user/order-history');
}

function getOrderInformation(request, response){
    response.render('user/order-information');
}

function getProductReturn(request, response){
    response.render('user/product-return');
}

module.exports = {
    getLogin,
    getRegister,
    getMyAccount,
    getOrderHistory,
    getOrderInformation,
    getProductReturn,
}