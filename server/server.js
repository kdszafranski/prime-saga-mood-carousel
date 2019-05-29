const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(express.static('build'));

/** ---------- ROUTES ---------- **/
app.use('/api/images', require('./routes/images.router'));


/** ---------- START SERVER ---------- **/
app.listen(PORT, function () {
    console.log('Listening on port: ', PORT);
});