'use strict';

const mongoose = require('mongoose'),
      app      = require('./app'),
      port     = process.env.PORT || 5001;

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/hotel', (err, res) => {
  if(err){
    throw err;
  }else{
    console.log('La conexión a la base esta funcionando correctamente.');

    app.listen(port, () => {
      console.log(`Servidor del API REST Almundo escuchando en http://localhost: ${port}.`);
    });
  }
});
