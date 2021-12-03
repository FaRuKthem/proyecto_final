//servidor
const express = require('express');
const engine = require('ejs-mate');
const path = require('path');

const app = express();


//configuraciones
app.set('views',path.join(__dirname,'views'));
app.engine('ejs',engine);
app.set('view engine','ejs');
app.listen(3000);

//Routes
app.use('/',require('./routes/index'));
require('./database');

//Iniio servidor
console.log('SERVIDOR ACTIVADO POR EL PUERTO:',3000);

//
require('./database');

app.use(require('./routes/index'));

