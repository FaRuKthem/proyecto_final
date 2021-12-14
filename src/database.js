const mongoose = require('mongoose')

mongoose.connect('mongodb://mongo/proyecto')
    .then(db => console.log('EL HURÓN LLEGÓ A LA ESTACIÓN', db.connection.host))
    .catch(err => console.error(err));

