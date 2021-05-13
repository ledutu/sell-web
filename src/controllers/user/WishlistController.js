var express = require('express');

function index(request, response){
    response.render('user/wishlist');
}

module.exports = {
    index,
}