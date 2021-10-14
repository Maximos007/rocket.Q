const express = require('express');

const route = express.Router();

route.get('/', (req, res) => res.render('home'));
route.get('/room', (req, res) => res.render('room'));
route.get('/create-pass', (req, res) => res.render('create-pass'));

// route.get('/room/:room/:question/:action', (req, res) => res.render('exemple', {req}))

module.exports = route;