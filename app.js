const express = require('express');
const app = express();
const cors = require('cors');
const db = require('./database/db');
db.dbConnector();

app.use(cors());


app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/', require('./routes/Routing'));



module.exports = app;