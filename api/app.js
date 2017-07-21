'use strict'

const express    = require('express'),
      bodyParser = require('body-parser'),
      app        = express();


//Routes.
const hotel_routes = require('./routes/hotel');


app.use(bodyParser.urlencoded({extended: false }));
app.use(bodyParser.json());


//Config headers http.
app.use((req,res, next) => {
    res.header('Acess-Control-Allow-Origin', '*');
    res.header('Acess-Control-Allow-Origin', 'Authorization, X-API-KEY, Origin, X-Requested-With. Content-Type, Access-Control-Allow-Method');
    res.header('Access-Control-Allow-Method', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');

    next();
});


//Basic routes.
app.use('/api', hotel_routes);



module.exports = app;
