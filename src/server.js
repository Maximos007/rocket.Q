const express = require('express');
const route = require('./routes');
const path = require('path');

const server = express();

server.set('view engine', 'ejs');
server.use(express.static('public'));
server.set('views', path.join(__dirname, 'views'));

server.use(route);

server.listen(3333, () => console.log('live'));