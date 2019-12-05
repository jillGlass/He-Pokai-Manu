const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getBird,
  foundbird,
  getBirds
}

function getBird (title, db = connection) {
  return db('birds', title)
    .select('Bird_ID', 'name', 'found')
}

function getBirds (db = connection) {
  return db('birds')
    .select('Bird_ID', 'name', 'found')
}

function foundbird (title, db = connection) {
  return db('birds')
    .where('bird_ID', title)
    .update([
      { found: '1'
      }
    ])
}
