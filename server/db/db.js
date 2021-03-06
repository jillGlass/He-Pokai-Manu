const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  foundBird,
  getBirds,
  resetBirds
}

function getBirds (db = connection) {
  return db('birds')
}

function foundBird (id, db = connection) {
  return db('birds')
    .where('bird_id', id)
    .update(
      { found: true
      })
}

function resetBirds (db = connection) {
  return db('birds')
    .where('found', '=', true)
    .update(
      {
        found: false
      }
    )
}
