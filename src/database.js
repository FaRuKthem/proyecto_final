//cadena de conexión
const mongoose = require('mongoose');

mongoose.connect('mongodb://mongo/inventario') // necesitamos un nombre para base de datos, en este caso usamos inentario, se usa mongo por que ese l nombre que le dimos a nuestro contenedor
.then(db => console.log('EL HURÓN LLEGÓ AL A ESTACIÓN',db.connection.host)) //mensaje para avisar que la base de datos se conectó
.catch(err => console.error(err)); // mensaje en caso que la base datos no se conectara (esperemos que no)
