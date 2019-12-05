const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getBirds,
  foundbird
}

function getBirds (db = connection) {
  return db('birds')
    .select('Bird_ID', 'name', 'found')
    .then(console.log())
}

function foundbird (title, db = connection) {
  return db('birds')
    .where('bird_ID', title)
    .update([
      { found: '1'
      }
    ])
}
