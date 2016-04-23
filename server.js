'use strict';

const express = require('express');

// Constants
const PORT = 8080;

// App
const app = express();
app.get('/', function (req, res) {
  res.send('mam moc rad barush and denisu\n');
});

app.get('/kuk/:name', function (req, res) {
  res.send('Hello senora' +  req.params.name);
});
app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
