const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

function getMoves (db = connection) {
  return db('moves').select()
}
module.exports = {
  getMoves
}
