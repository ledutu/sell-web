var express = require('express');

function index(request, response){
    response.render('user/product');
}

module.exports = {
    index,
}