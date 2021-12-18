const express = require('express');
const { json } = require('express/lib/response');
const morgan = require('morgan');

const Apis=require('./routes/apis')

const app = express();

//settings
app.set('port', process.env.PORT || 3000);
app.set('json spaces',2);

//routes
app.use('/apis',Apis);

//middelwares
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

export default app;