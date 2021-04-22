'use strict'

const express = require('express')

const server = express();

const PORT = process.env.PORT || 3000;

server.use(express.static('./public'));

server.get('/welcome', (req,res) => {
  res.send('Welcome to our website');
})
server.get('/tel', (req,res) => {
  res.send('THIS IS PRIVATE!!!!!!');
})
server.listen(PORT, () => {
  console.log(`Listening to Port ${PORT}`)
})

