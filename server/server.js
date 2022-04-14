const path = require('path')
const express = require('express')

const welcome = require('./routes/welcome')
const music = require('./routes/music')
const moves = require('./routes/welcome')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/v1/welcome', welcome)
server.use('/api/v1/music', music)
server.use('/api/v1/moves', moves)

module.exports = server
