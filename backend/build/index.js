"use strict";
const express = require('express');
const cors = require('cors');
const app = express();
const conn = require('./db/connection');
const routes = require('./routes/router');
app.use(cors());
app.use(express.json());
conn();
app.use('/api', routes);
app.listen(3000, () => {
    console.log('Server Running!');
});
