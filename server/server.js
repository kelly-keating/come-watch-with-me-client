const path = require('path')
const express = require('express')
const fs = require('fs')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))


server.get('/files', (req, res) => {
  fs.readdir(path.join(__dirname, './public/videos'), 'utf-8', (err, data) => {
    if (err) { 
      res.status(500).send(err.message) 
    } else {
      data = data.filter(file => file != ".gitkeep")
      res.json(data)
    }
  })
})


module.exports = server
