const express = require('express');
var path = require('path');
const app = express();

//User
const home = require('./src/routes/user/home');
const cart = require('./src/routes/user/cart');
const wishlist = require('./src/routes/user/wishlist');
const product = require('./src/routes/user/product');
const category = require('./src/routes/user/category');
const user = require('./src/routes/user/user');

const PORT = process.env.PORT || 3000

app.set('views', path.join(__dirname, '/src/views'));
app.set('view engine', 'ejs');
// app.set('view options', {
//     layout: false
// });

app.use(express.static(path.join(__dirname, '/src/public')));

app.use('/', home);
app.use('/cart', cart);
app.use('/wishlist', wishlist);
app.use('/product', product);
app.use('/category', category);
app.use('/user', user);

app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT)
})

