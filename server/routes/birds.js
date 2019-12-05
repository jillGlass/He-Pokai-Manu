const express = require('express')

const db = require('../db/db')

const knex = require('../db/knexfile')

const router = express.Router()

router.get('/', (req, res) => {
  db.getBirds()
    .then(birds => {
      res.render(birds)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    }
    )
}
)

router.post('/', (req, res) => {
  console.log('Change Bird to Found - Route')
  const addData = req.body
  db.insertNewUser(addData)
    .then()
  res.redirect('/')
})

