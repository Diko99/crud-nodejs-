const path = require('path');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');



const app = express();
// connecting to database
mongoose.connect('mongodb://localhost/crud-mongo', {
    useNewUrlParser: true
})
    .then(db => console.log('Database connection'))
    .catch(err => console.log(err))


// importing routers
const indexRoutes = require ('./routes/index');

// Setting
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// middleware
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));

// routes
app.use('/', indexRoutes);


// starting server
app.listen(app.get('port'), () => {
    console.log(`connected on port ${app.get('port')}`);
})