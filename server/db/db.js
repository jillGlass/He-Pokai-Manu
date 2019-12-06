const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getBird,
  foundBird,
  getBirds
}

function getBirds (db = connection) {
  return db('birds')
    .select('name', 'image', 'found')
}

function getBird (id, db = connection) {
  return db('birds')
    .where('bird_id', id)
    .select('name', 'found', 'info', 'image')
    .first()
}

function foundBird (id, db = connection) {
  return db('birds')
    .where('bird_id', id)
    .update(
      { found: true
      })
}
