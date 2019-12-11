// Update with your config settings.
const path = require('path')

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: path.join(__dirname, 'dev.sqlite3')
    },
    useNullAsDefault: true
  },

  test: {
    client: 'sqlite3',
    connection: {
      filename: ':memory:'
    },
    useNullAsDefault: true,
    migrations: {
      directory: path.join(__dirname, 'migrations')
    },
    seeds: {
      directory: path.join(__dirname, 'seeds')
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: 'postgres://dnuhpntitivhzj:4a3e1745943cbf409ce07c03bde8ee3888505367a20a9356abff8a63402e2f66@ec2-174-129-255-35.compute-1.amazonaws.com:5432/dabhmi8785hp27',
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

}
