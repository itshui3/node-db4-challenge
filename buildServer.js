const express = require('express');

const server = express();

server.use(express.json());
server.use(require('cors')());
server.use(require('helmet')());
server.use(require('morgan')('tiny'));

server.use('/api', require('./api/apiRouter'));

server.get('/', (req, res) => {
  res.status(200).json({ message: `status 200: root get successful` })
})

server.use((req, res) => {
  res.status(404).json({ message: `status 404: resource not found` })
})

module.exports = server;