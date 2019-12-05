const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getBirds
}

function getBirds (db = connection) {
  return db('birds')
    .select('Bird_ID', 'name', 'found')
}

function foundbird (title, db=connection) {
  return db('birds')
  .where({'birds.title', title})
  .insert([
    {
    }
  ])
}