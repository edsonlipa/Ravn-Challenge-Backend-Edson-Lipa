const express = require('express');
const { json } = require('express/lib/response');
const app = express();
const morgan = require('morgan');

const Apis=require('./routes/apis')

//settings
app.set('port', process.env.PORT || 3000);
app.set('json spaces',2);

//routes
app.use('/apis',Apis);

//middelwares
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//starting server
app.listen(app.get('port'),()=>{
    console.log(`Server on port ${app.get('port')}`);
});