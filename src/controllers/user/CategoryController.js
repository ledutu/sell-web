var express = require('express');

function index(request, response){
    response.render('user/category');
}

module.exports = {
    index,
}