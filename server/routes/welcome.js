const express = require('express')

const router = express.Router()
const db = require('../db/db')
// GET /api/v1/welcome/
router.get('/', (req, res) => {
  db.getMoves()
    .then(moves => {
      res.json(moves)
      return null
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

module.exports = router
